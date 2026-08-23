import { LayoutGrid, Store, Mic2, Music, Wrench } from "lucide-react";

const categories = [
  { label: "All Events", value: "all", icon: LayoutGrid },
  { label: "Expos", value: "expo", icon: Store },
  { label: "Conferences", value: "conference", icon: Mic2 },
  { label: "Concerts", value: "concert", icon: Music },
  { label: "Workshops", value: "workshop", icon: Wrench },
];

const EventCategories = ({ activeCategory, setActiveCategory }) => {
  return (
    <section className="px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.value;

          return (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-colors duration-200 font-medium text-sm ${
                isActive
                  ? "bg-gold/10 border-gold text-gold"
                  : "bg-surface border-border text-muted hover:text-foreground hover:border-gold/50"
              }`}
            >
              <Icon size={16} />
              {cat.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default EventCategories;