import { Star, Package, Pizza, Coffee } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const sections = [
    { id: 'destaques', label: 'Destaques', icon: Star },
    { id: 'combos', label: 'Combos', icon: Package },
    { id: 'pizza', label: 'Pizza', icon: Pizza },
    { id: 'bebidas', label: 'Bebidas', icon: Coffee },
  ];

  return (
    <nav className="bg-card border-b sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex space-x-8 overflow-x-auto scrollbar-hide py-4">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onSectionChange(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeSection === id
                    ? 'bg-pizzaria-red text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-pizzaria-red hover:bg-pizzaria-red-light'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};