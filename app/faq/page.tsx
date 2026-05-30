"use client";

import { getFAQs } from "@/src/services/api";
import { FAQItem } from "@/src/types";
import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    getFAQs().then(setFaqs);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 md:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-lato text-3xl md:text-4xl uppercase tracking-widest text-center text-black mb-16">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gray-100 pb-4 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
                >
                  <span className={`font-lato uppercase tracking-wider text-base transition-colors ${openIndex === index ? 'text-black' : 'text-gray-600 group-hover:text-black'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-black flex-shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 font-cormorant text-xl leading-relaxed pb-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
