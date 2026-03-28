import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-serif font-bold text-gold">Ravindra</span>
              <span className="text-2xl font-serif font-bold text-foreground">IAS</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Shaping India's future leaders through structured mentorship, expert guidance, and an unwavering commitment to excellence.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Courses", "Results", "Resources", "About", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={14} className="text-gold shrink-0" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={14} className="text-gold shrink-0" /> info@ravindraias.com
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" /> New Delhi, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ravindra IAS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
