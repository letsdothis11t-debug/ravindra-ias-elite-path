import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Newspaper, FileText, PenTool } from "lucide-react";

const resources = [
  { icon: Newspaper, title: "Current Affairs", desc: "Daily curated analysis of national and international events.", cta: "Read Now" },
  { icon: FileText, title: "Study Notes", desc: "Comprehensive, exam-focused notes for every subject.", cta: "Download" },
  { icon: PenTool, title: "Test Series", desc: "Full-length and topic-wise mock tests with detailed solutions.", cta: "Start Test" },
];

const ResourcesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resources" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold">Resources</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 heading-gradient">
            Study Smart, Score High
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 text-center group hover:glow-purple transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full gradient-purple flex items-center justify-center mx-auto mb-6">
                <r.icon size={28} className="text-foreground" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{r.desc}</p>
              <button className="btn-outline-gold text-sm">{r.cta}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
