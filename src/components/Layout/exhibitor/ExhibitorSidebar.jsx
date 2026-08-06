import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {LayoutDashboard,ClipboardList,Store,MessageSquare,User, LogOut} from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "@/features/auth/authSlice";
import { toast } from "sonner";

const navItems = [
  { label: "Dashboard", path: "/exhibitor", icon: LayoutDashboard },
  { label: "Registration", path: "/exhibitor/registration", icon: ClipboardList },
  { label: "My Booth", path: "/exhibitor/booth", icon: Store },
  { label: "Messages", path: "/exhibitor/messages", icon: MessageSquare },
  { label: "Profile", path: "/exhibitor/profile", icon: User },
];

const linkClasses = ({ isActive }) =>
  `mb-2 flex items-center gap-3 rounded-lg border-l-4 px-4 py-3 transition-all duration-200 ${
    isActive
      ? "border-gold bg-gold/10 text-gold"
      : "border-transparent text-muted hover:border-gold hover:bg-background hover:text-foreground"
  }`;

const ExhibitorSidebar = () => {
    const dispatch = useDispatch();
const navigate = useNavigate();

const handleLogout = () => {
  dispatch(logout());

  toast.success("Logged out successfully.");

  navigate("/login");
};
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-border bg-surface">
      <div className="border-b border-border p-6">
        <h1 className="font-display text-2xl font-bold text-gold">
          EventSphere
        </h1>

        <p className="mt-1 text-sm text-muted">
          Exhibitor Portal
        </p>
      </div>

      <nav className="flex-1 p-4">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/exhibitor"}
            className={linkClasses}
          >
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-border p-4">
  <button
    onClick={handleLogout}
    className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-muted transition-colors hover:bg-background hover:text-red-400"
  >
    <LogOut size={20} />
    <span>Logout</span>
  </button>
</div>
    </aside>
  );
};

export default ExhibitorSidebar;