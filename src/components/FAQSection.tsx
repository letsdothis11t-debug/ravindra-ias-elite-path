import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Who can enroll at Ravindra IAS?", a: "Any graduate or final-year student aspiring to crack UPSC CSE can enroll. We welcome aspirants from all backgrounds and streams." },
  { q: "Do you offer online classes?", a: "Yes, we offer comprehensive online programs with live interactive sessions, recorded lectures, and dedicated online mentorship." },
  { q: "What is the batch size?", a: "We keep our batches small (30-40 students) to ensure personalized attention and effective doubt resolution." },
  { q: "How is your test series structured?", a: "Our test series includes sectional tests, full-length mock exams, and CSAT practice papers with detailed performance analytics." },
  { q: "Do you provide interview preparation?", a: "Absolutely. We have a dedicated interview guidance program with mock panels comprising former UPSC board members and senior civil servants." },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 heading-gradient">
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card px-6 border-border/50"
              >
                <AccordionTrigger className="text-left font-serif font-semibold text-foreground hover:text-gold transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
