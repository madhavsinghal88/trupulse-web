"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Button from "@/app/components/common/Button";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with", form);
  };

  return (
    <section className="min-h-screen bg-[#FFEFE6] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary-text">Welcome Back</h2>
          <p className="text-secondary-text mt-2">Login to your TruPulse dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
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

          <div className="text-right text-sm">
            <a href="#" className="text-orange-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <Button type="submit" text="Log In" className="w-full" />
        </form>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-orange-500 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
}
