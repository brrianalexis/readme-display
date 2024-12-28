import { FC } from "react";

type Props = {
  children: string;
};

export const CodeSnippet: FC<Props> = ({ children }) => (
  <div className="relative group">
    <pre className="p-4 bg-neutral-800 dark:bg-neutral-950 text-neutral-200 rounded-lg overflow-x-auto">
      <code>{children}</code>
    </pre>
    <button
      onClick={() => navigator.clipboard.writeText(children)}
      className="absolute top-2 right-2 p-2 text-neutral-400 hover:text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      Copy
    </button>
  </div>
);
