'use client';

import { useState } from 'react';

export default function ThemePreview() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleThemePreview = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>Theme Preview</div>
        <button
          onClick={toggleThemePreview}
          className="rounded-xl bg-accent px-4 py-2 font-medium text-white outline-none transition-transform hover:cursor-pointer active:scale-90">
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>
      <div className={`flex-col gap-4 ${isOpen ? 'flex' : 'hidden'}`}>
        <div className="flex flex-wrap items-center gap-4">
          <div className="text-text">Text</div>
          <div className="text-accent">Accent</div>
          <div className="text-purple">Purple</div>
          <div className="text-green">Green</div>
          <div className="text-cyan">Cyan</div>
          <div className="text-rose">Rose</div>
          <div className="text-orange">Orange</div>
          <div className="text-red">Red</div>
          <div className="text-blue">Blue</div>
          <div className="text-gold">Gold</div>

          <div className="rounded-xl bg-code-bg p-2">Code BG</div>
          <div className="rounded-xl bg-black p-2">Black</div>
          <div className="rounded-xl bg-white p-2">White</div>
          <div className="rounded-xl bg-fore p-2">Fore</div>
          <div className="rounded-xl bg-back p-2">Back</div>
          <div className="rounded-xl bg-back_layout p-2">Back Layout</div>
          <div className="rounded-xl bg-gutter p-2">Gutter</div>
          <div className="rounded-xl bg-guide p-2">Guide</div>
        </div>
      </div>
    </div>
  );
}
