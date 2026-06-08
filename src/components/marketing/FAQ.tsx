"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is an autonomous AI agent?",
    answer: "An autonomous AI agent is a software program that can perceive its environment, make decisions, and take actions to achieve a specific goal without continuous human intervention. Unlike simple chatbots, our agents can execute complex multi-step workflows."
  },
  {
    question: "Do I need coding experience to use Aether AI?",
    answer: "Not at all! Our platform is designed with a no-code interface that allows anyone to configure and deploy agents. However, we also offer robust APIs and webhooks for developers who want deeper integration."
  },
  {
    question: "How secure is my data?",
    answer: "Security is our top priority. All data is encrypted at rest and in transit. We comply with SOC2, GDPR, and HIPAA standards. Your data is never used to train our base models without your explicit consent."
  },
  {
    question: "Can I integrate Aether AI with my existing tools?",
    answer: "Yes, Aether AI comes with over 50+ pre-built integrations for popular tools like Slack, Salesforce, Zendesk, and Google Workspace. You can also connect to any custom internal tool using our API."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <Accordion className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-white/10">
              <AccordionTrigger className="text-left hover:text-indigo-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
