import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, FileText, Users } from "lucide-react";

const courses = [
  {
    icon: BookOpen,
    title: "Prelims Foundation",
    duration: "6 Months",
    features: ["Complete syllabus coverage", "Weekly mock tests", "Current affairs integration", "Personal doubt sessions"],
  },
  {
    icon: FileText,
    title: "Mains Mastery",
    duration: "8 Months",
    features: ["Answer writing practice", "Essay workshops", "Optional subject guidance", "Peer discussion groups"],
  },
  {
    icon: Users,
    title: "Interview Guidance",
    duration: "2 Months",
    features: ["Mock interview panels", "Personality development", "DAF-based preparation", "1-on-1 mentoring"],
  },
];

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold">Programs</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 heading-gradient">
            Structured Path to Success
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass-card p-8 group hover:glow-purple transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="w-14 h-14 rounded-lg gradient-purple flex items-center justify-center mb-6">
                <course.icon size={28} className="text-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-1">{course.title}</h3>
              <p className="text-gold text-sm font-semibold mb-6">{course.duration}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {course.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-outline-gold text-sm text-center">
                Explore Program
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
