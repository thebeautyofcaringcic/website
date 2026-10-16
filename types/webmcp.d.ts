// Minimal types for the experimental WebMCP API (document.modelContext).
// modelContext is optional on purpose: most browsers don't have it, so every call must feature-detect.

declare global {
  interface ToolAnnotations {
    readOnlyHint?: boolean;
    untrustedContentHint?: boolean;
  }

  interface ToolExecuteCallbackOptions {
    signal: AbortSignal;
  }

  interface ModelContextTool {
    name: string;
    title?: string;
    description: string;
    inputSchema?: Record<string, unknown>;
    execute: (input: Record<string, unknown>, options: ToolExecuteCallbackOptions) => Promise<unknown> | unknown;
    annotations?: ToolAnnotations;
  }

  interface ModelContext extends EventTarget {
    registerTool(tool: ModelContextTool, options?: { exposedTo?: string[]; signal?: AbortSignal }): Promise<void>;
  }

  interface Document {
    readonly modelContext?: ModelContext;
  }
}

export {};
