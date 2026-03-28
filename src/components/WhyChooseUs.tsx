import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Map, UserCheck, Trophy, ClipboardList, Shield } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Expert Faculty", desc: "Former civil servants and top academicians guide your preparation." },
  { icon: Map, title: "Structured Roadmap", desc: "Phase-wise study plan tailored to UPSC demands." },
  { icon: UserCheck, title: "Personal Mentorship", desc: "One-on-one guidance from mentors who've been through the process." },
  { icon: Trophy, title: "Proven Results", desc: "500+ selections with 50+ in the Top 100 ranks." },
  { icon: ClipboardList, title: "Daily Practice", desc: "Consistent answer writing, MCQs, and current affairs drills." },
  { icon: Shield, title: "Trusted Legacy", desc: "Over a decade of shaping India's administrative leaders." },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold">Why Us</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 heading-gradient">
            The Ravindra IAS Advantage
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl hover:bg-secondary/40 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center shrink-0">
                <f.icon size={22} className="text-foreground" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
