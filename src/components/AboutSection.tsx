import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { year: "2013", text: "Founded with a vision to democratize IAS coaching" },
  { year: "2016", text: "First batch achieves 15 selections in UPSC CSE" },
  { year: "2019", text: "Expanded to 3 centers across North India" },
  { year: "2022", text: "Launched online programs reaching 10,000+ aspirants" },
  { year: "2024", text: "500+ cumulative selections with 50+ in Top 100" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-gold">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6 heading-gradient">
              A Decade of Building India's Leaders
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Ravindra IAS was founded on the belief that every aspirant, regardless of background, deserves world-class guidance. What started as a small classroom has grown into one of India's most respected IAS coaching institutes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission remains unchanged: to nurture disciplined, knowledgeable, and compassionate civil servants who will shape the future of our nation.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex gap-6 items-start pl-4"
                >
                  <div className="relative -ml-4">
                    <div className="w-8 h-8 rounded-full gradient-purple flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-foreground" />
                    </div>
                  </div>
                  <div>
                    <span className="text-gold font-serif font-bold text-lg">{m.year}</span>
                    <p className="text-muted-foreground text-sm mt-1">{m.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
