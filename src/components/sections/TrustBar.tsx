import { Shield, Droplets, Gem, MapPin } from "lucide-react";

const trustItems = [
  { icon: <Shield size={18} />, text: "California License #843484" },
  { icon: <Droplets size={18} />, text: "Waterproof Shower Specialists" },
  { icon: <Gem size={18} />, text: "Luxury Bathroom Experts" },
  { icon: <MapPin size={18} />, text: "Serving Palo Alto & Silicon Valley" },
];

export function TrustBar() {
  return (
    <section className="py-8 bg-cream border-b border-cream-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2.5">
              <span className="text-accent">{item.icon}</span>
              <span className="text-sm text-slate font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
