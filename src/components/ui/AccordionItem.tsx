"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-mortar-gray/25">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-display text-xl md:text-2xl text-charcoal-ash group-hover:text-clay-deep transition-colors pr-6">
          {question}
        </span>
        <Plus
          className={cn(
            "w-5 h-5 text-clay-deep transition-transform duration-300 flex-shrink-0",
            isOpen && "rotate-45"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className="text-secondary text-[15px] md:text-base leading-relaxed max-w-2xl">{answer}</p>
      </div>
    </div>
  );
}
