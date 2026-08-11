import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border px-8 py-12">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
      <div>
        <span className="font-display text-lg font-semibold text-gold">
          EventSphere
        </span>

        <p className="mt-1 text-sm text-muted">
          Expo & trade show management, on one floor.
        </p>
      </div>

      <nav className="flex items-center gap-6">
        <Link
          to="/home"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          Home
        </Link>

        <Link
          to="/events"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          Events
        </Link>

        <Link
          to="/#gallery"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          Gallery
        </Link>

        <Link
          to="/about"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          About
        </Link>
      </nav>

      <p className="text-xs text-muted">
        © {new Date().getFullYear()} EventSphere Management. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;