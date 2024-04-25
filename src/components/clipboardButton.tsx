'use client';

import { useState } from 'react';
import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

export default function ClipboardButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="active:text-green-500 text-lg text-text">
      {isCopied ? (
        <div className="flex gap-2">
          <ClipboardDocumentCheckIcon className="size-4" />
          <span className="text-xs">Copied!</span>
        </div>
      ) : (
        <ClipboardDocumentIcon className="size-4" />
      )}
    </button>
  );
}
