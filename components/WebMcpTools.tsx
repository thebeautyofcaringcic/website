"use client";

import { useEffect } from "react";
import { absoluteUrl, siteConfig } from "@/lib/site";

/**
 * WebMCP tools: lets AI agents in supporting browsers (Chrome/Edge with the origin
 * trial, ChatGPT "Site tools", Gemini in Chrome) answer questions about the charity
 * and help a visitor get in touch, without scraping the page.
 *
 * Progressive enhancement only: in browsers without document.modelContext nothing
 * happens and the page works exactly as before. The origin trial tokens that switch
 * the API on for real visitors are sent as headers from next.config.ts.
 */

const SECTIONS = {
  top: "Top of the page: who the charity is",
  about: "What socio-aesthetics is",
  session: "Treatments offered in a session",
  where: "Where the charity works",
  voices: "Testimonials from participants",
  natacha: "The founder, BBC Radio Bristol interview and Carol Vorderman film",
  partners: "Partners and funders",
  contact: "How to get in touch",
} as const;

type SectionId = keyof typeof SECTIONS;

const ENQUIRY_TYPES = {
  partnership: "Partnership enquiry",
  funding: "Funding a project",
  volunteering: "Volunteering",
  treatment_quote: "Quote for treatments or workshops",
  press: "Press or media enquiry",
  other: "General enquiry",
} as const;

type EnquiryType = keyof typeof ENQUIRY_TYPES;

const MAX_TEXT = 1500;

function clean(value: unknown, max = MAX_TEXT) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function tools(): ModelContextTool[] {
  return [
    {
      name: "get_charity_overview",
      title: "About The Beauty of Caring",
      description:
        "Get an overview of The Beauty of Caring CIC: what socio-aesthetics is, its mission, who it helps, where it is based, who founded it and how to contact it.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true },
      execute: () => ({
        name: siteConfig.name,
        type: "Registered community interest company (social enterprise)",
        tagline: siteConfig.tagline,
        summary: siteConfig.description,
        mission:
          "To provide access to compassionate, professional beauty and well-being care for vulnerable and underserved communities, supporting both physical and emotional healing during life's most challenging moments.",
        basedIn: `${siteConfig.locality}, UK`,
        founded: siteConfig.foundingDate,
        founder: `${siteConfig.founder.name}, socio-aesthetician, trained in Paris; previously worked in oncology and Alzheimer's care`,
        contactEmail: siteConfig.email,
        website: absoluteUrl("/"),
      }),
    },
    {
      name: "list_services",
      title: "Treatments and settings",
      description:
        "List the socio-aesthetic treatments the charity offers, the kinds of places it works in, how sessions are delivered and how pricing works.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true },
      execute: () => ({
        treatments: siteConfig.services,
        settings: siteConfig.settings,
        format: "One-to-one sessions or group workshops, delivered on site.",
        pricing: `Prices vary with the service needed. Email ${siteConfig.email} for a free quote.`,
      }),
    },
    {
      name: "get_press_coverage",
      title: "Press and media",
      description:
        "Get the charity's press and media coverage, including the BBC News article, the BBC Radio Bristol interview and the Pride of Britain film with Carol Vorderman.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true },
      execute: () => ({
        coverage: [
          ...siteConfig.press.map((p) => ({ outlet: p.publisher, title: p.headline, url: p.url })),
          {
            outlet: "BBC Radio Bristol",
            title: "Natacha's interview with James Hansen",
            url: absoluteUrl("/media/bbc-radio-bristol-interview.mp3"),
          },
          {
            outlet: "Pride of Britain",
            title: "Carol Vorderman's Hometown Heroes",
            url: absoluteUrl("/media/carol-vorderman-hometown-heroes.mp4"),
          },
        ],
      }),
    },
    {
      name: "show_page_section",
      title: "Show a section of the page",
      description:
        "Scroll the page to a section so the visitor can see it, for example the treatments, testimonials, founder story or contact details.",
      inputSchema: {
        type: "object",
        properties: {
          section: {
            type: "string",
            enum: Object.keys(SECTIONS),
            description: Object.entries(SECTIONS)
              .map(([id, label]) => `${id}: ${label}`)
              .join("; "),
          },
        },
        required: ["section"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute: (input) => {
        const section = clean(input.section, 30) as SectionId;
        if (!(section in SECTIONS)) {
          return `Unknown section "${section}". Use one of: ${Object.keys(SECTIONS).join(", ")}.`;
        }
        const element = document.getElementById(section);
        if (!element) return `The "${section}" section isn't on this page.`;
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return `Scrolled to the "${SECTIONS[section]}" section.`;
      },
    },
    {
      name: "start_email_enquiry",
      title: "Draft an email to the charity",
      description:
        "Open the visitor's email app with a drafted message to The Beauty of Caring, for partnerships, funding, volunteering, treatment quotes or press. Nothing is sent: the visitor reviews and sends it themselves.",
      inputSchema: {
        type: "object",
        properties: {
          enquiryType: {
            type: "string",
            enum: Object.keys(ENQUIRY_TYPES),
            description: "What the enquiry is about. Sets the email subject.",
          },
          message: {
            type: "string",
            description: "The body of the email in the visitor's own words.",
          },
          senderName: {
            type: "string",
            description: "The visitor's name or organisation, to sign the message. Optional.",
          },
        },
        required: ["enquiryType", "message"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false },
      execute: (input) => {
        const enquiryType = clean(input.enquiryType, 30) as EnquiryType;
        if (!(enquiryType in ENQUIRY_TYPES)) {
          return `Unknown enquiry type "${enquiryType}". Use one of: ${Object.keys(ENQUIRY_TYPES).join(", ")}.`;
        }
        const message = clean(input.message);
        if (!message) return "The message is empty. Ask the visitor what they would like to say.";
        const senderName = clean(input.senderName, 120);

        const subject = `${ENQUIRY_TYPES[enquiryType]} via the website`;
        const body = senderName ? `${message}\n\n${senderName}` : message;
        window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        return `Opened a draft email to ${siteConfig.email} with the subject "${subject}". The visitor needs to review it and press send in their email app.`;
      },
    },
  ];
}

export default function WebMcpTools() {
  useEffect(() => {
    const modelContext = document.modelContext;
    if (typeof modelContext?.registerTool !== "function") return;

    const controller = new AbortController();
    for (const tool of tools()) {
      modelContext.registerTool(tool, { signal: controller.signal }).catch((error: unknown) => {
        // AbortError on unmount is expected; anything else is worth seeing in the console.
        if ((error as Error)?.name !== "AbortError") {
          console.warn(`WebMCP: could not register "${tool.name}"`, error);
        }
      });
    }

    return () => controller.abort();
  }, []);

  return null;
}
