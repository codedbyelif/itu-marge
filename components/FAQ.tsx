'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is a FAQ and why is it important?",
      answer:
        "FAQ stands for Frequently Asked Questions. It is a list that provides answers to common questions people may have about a specific product, service, or topic.",
    },
    {
      question: "Why should I use a FAQ on my website or app?",
      answer:
        "Utilizing a FAQ section on your website or app is a practical way to offer instant assistance to your users or customers. Instead of waiting for customer support responses, they can find quick answers to commonly asked questions.",
    },
    {
      question: "How do I effectively create a FAQ section?",
      answer:
        "Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question.",
    },
    {
      question: "What are the benefits of having a well-maintained FAQ section?",
      answer:
        "There are numerous advantages to maintaining a robust FAQ section. Firstly, it provides immediate answers to common queries, which improves the user experience.",
    },
    {
      question: "How do I effectively create a FAQ section?",
      answer:
        "Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question.",
    },
  ];

  return (
    <section className="py-32 w-full">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mt-2 mb-12 text-3xl font-bold md:text-6xl">Sıkça Sorulan Sorular</h2>
        <Accordion type="single" collapsible className="space-y-2 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-md border-0 bg-muted px-5 py-2"
            >
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pt-0 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
