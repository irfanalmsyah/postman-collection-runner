import { useState } from "react";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="absolute top-1 right-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded-md transition"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
