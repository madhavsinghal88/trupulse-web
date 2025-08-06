"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Button from "@/app/components/common/Button";
import Link from "next/link";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup with", form);
  };

  return (
    <section className="min-h-screen bg-[#FFEFE6] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary-text">Create an Account</h2>
          <p className="text-secondary-text mt-2">Sign up for your TruPulse dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
              Full Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

          <Button type="submit" text="Sign Up" className="w-full" />
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-theme font-medium hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
}
