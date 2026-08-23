import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { to: "/home", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      setIsLight(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = isLight ? "dark" : "light";

    document.documentElement.classList.toggle(
      "light",
      nextTheme === "light"
    );

    localStorage.setItem("theme", nextTheme);
    setIsLight(nextTheme === "light");
  };

  return (
    <header className="relative sticky top-0 z-40 border-b border-border/70 bg-background/75 shadow-[0_1px_0_rgba(201,162,39,0.10)] backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3"
        >
          <span>
            <span className="block font-display text-xl font-semibold text-gold">
              EventSphere
            </span>
            <span className="block text-[11px] uppercase tracking-[0.3em] text-muted">
              Event Platform
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-border/80 bg-surface/70 px-3 py-2 md:flex">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:bg-background hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/70 text-muted transition-colors hover:border-gold/40 hover:text-foreground"
            aria-label="Toggle theme"
          >
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/70 text-muted transition-colors hover:border-gold/40 hover:text-foreground md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-t border-border bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2 rounded-3xl border border-border bg-surface/70 p-3">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-muted transition-colors hover:bg-background hover:text-foreground"
              >
                {label}
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className="mt-1 flex items-center justify-between rounded-2xl border border-border px-4 py-3 text-sm text-muted transition-colors hover:bg-background hover:text-foreground"
            >
              <span className="flex items-center gap-3">
                {isLight ? <Moon size={18} /> : <Sun size={18} />}
                {isLight ? "Dark Mode" : "Light Mode"}
              </span>
            </button>

            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-2xl bg-gold px-4 py-3 text-center text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Enter Dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
