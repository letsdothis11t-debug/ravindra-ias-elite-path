import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const toppers = [
  { name: "Priya Sharma", rank: "AIR 3", year: "2024", quote: "Ravindra IAS transformed my entire approach to UPSC. The mentorship was unparalleled." },
  { name: "Arjun Mehta", rank: "AIR 12", year: "2024", quote: "The structured roadmap and daily practice system gave me the edge I needed." },
  { name: "Sneha Patel", rank: "AIR 27", year: "2023", quote: "From a small town to the civil services — Ravindra IAS made it possible." },
  { name: "Vikram Singh", rank: "AIR 45", year: "2023", quote: "Expert faculty who genuinely care about your success. Best decision I ever made." },
];

const ToppersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold">Our Pride</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 heading-gradient">
            From Aspirant to IAS Officer
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Our students consistently achieve top ranks in the UPSC Civil Services Examination.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toppers.map((topper, i) => (
            <motion.div
              key={topper.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 group hover:glow-purple transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full gradient-purple flex items-center justify-center text-xl font-serif font-bold text-foreground mb-4">
                {topper.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground">{topper.name}</h3>
              <div className="flex items-center gap-2 mt-1 mb-3">
                <span className="text-gold font-bold text-xl font-serif">{topper.rank}</span>
                <span className="text-muted-foreground text-sm">• {topper.year}</span>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">"{topper.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToppersSection;
