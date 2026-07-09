"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-stone-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-semibold text-clay-800 group-hover:text-rust-500 transition-colors pr-4 text-[15px]">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-rust-500 transition-transform duration-200 flex-shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
