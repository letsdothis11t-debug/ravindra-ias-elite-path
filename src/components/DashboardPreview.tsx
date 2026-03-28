import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, TrendingUp, BookOpen } from "lucide-react";

const tasks = [
  { text: "Read: Indian Polity Ch. 12", done: true },
  { text: "Solve: 50 MCQs on Economy", done: false },
  { text: "Write: Essay on Federalism", done: false },
  { text: "Current Affairs: Daily Digest", done: true },
];

const DashboardPreview = () => {
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
          <span className="text-sm font-semibold tracking-widest uppercase text-gold">Daily Dashboard</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 heading-gradient">
            Your UPSC Command Center
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 max-w-4xl mx-auto glow-purple"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {/* Today's Tasks */}
            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-foreground flex items-center gap-2">
                <CheckCircle size={18} className="text-gold" /> Today's Tasks
              </h3>
              <ul className="space-y-3">
                {tasks.map((t, i) => (
                  <li key={i} className={`flex items-center gap-2 text-sm ${t.done ? "text-muted-foreground line-through" : "text-foreground"}`}>
                    <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${t.done ? "bg-gold/20 border-gold" : "border-border"}`}>
                      {t.done && <span className="text-gold text-xs">✓</span>}
                    </span>
                    {t.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Current Affairs */}
            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-foreground flex items-center gap-2">
                <BookOpen size={18} className="text-gold" /> Current Affairs
              </h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-secondary/60">
                  <p className="text-xs text-gold font-semibold">ECONOMY</p>
                  <p className="text-sm text-foreground mt-1">RBI holds repo rate at 6.5%</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/60">
                  <p className="text-xs text-gold font-semibold">POLITY</p>
                  <p className="text-sm text-foreground mt-1">New amendment to Article 370 implications</p>
                </div>
              </div>
            </div>

            {/* Mock Score */}
            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-foreground flex items-center gap-2">
                <TrendingUp size={18} className="text-gold" /> Mock Test Score
              </h3>
              <div className="text-center py-4">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-gold/30">
                  <div>
                    <span className="text-3xl font-serif font-bold text-gold">142</span>
                    <p className="text-xs text-muted-foreground">/200</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Prelims Mock #12</p>
                <p className="text-xs text-gold">↑ 8 marks from last test</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
