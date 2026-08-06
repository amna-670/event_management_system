import React from "react";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="font-display text-4xl font-bold text-gold">
            EventSphere
          </h1>

          <div className="mt-8 mb-6 text-center">
  <h2 className="text-2xl font-semibold text-foreground">
    {title}
  </h2>

  <p className="mt-2 text-sm text-muted">
    {subtitle}
  </p>
</div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;