"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-cream-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-semibold text-navy-800 group-hover:text-orange-500 transition-colors pr-4 text-[15px]">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-orange-500 transition-transform duration-200 flex-shrink-0",
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
