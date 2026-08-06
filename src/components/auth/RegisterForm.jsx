import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  LockKeyhole,
  User,
  Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const RegisterForm = () => {
  return (
    <form className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>

          <div className="relative">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />

            <Input
              id="fullName"
              type="text"
              placeholder="John Doe"
              className="pl-10"
            />
          </div>
        </div>

        {/* Company */}
        <div className="space-y-2">
         <Label htmlFor="company">
  Company / Organization
</Label>

          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />

            <Input
              id="company"
              type="text"
              placeholder="ABC Technologies"
              className="pl-10"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />

            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="pl-10"
            />
          </div>
        </div>

        {/* Role */}
        <div className="space-y-2">
  <Label>Role</Label>

  <Select>
    <SelectTrigger className="w-full bg-background">
      <SelectValue placeholder="Select your role" />
    </SelectTrigger>

    <SelectContent className="bg-surface border-border">
      <SelectItem value="organizer">
        Organizer
      </SelectItem>

      <SelectItem value="exhibitor">
        Exhibitor
      </SelectItem>

      <SelectItem value="attendee">
        Attendee
      </SelectItem>
    </SelectContent>
  </Select>
</div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>

          <div className="relative">
            <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />

            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              className="pl-10"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>

          <div className="relative">
            <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />

            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <Button className="w-full bg-gold text-background hover:bg-gold/90">
        Create Account
      </Button>

      <p className="text-center text-sm text-muted">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-gold hover:underline"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;