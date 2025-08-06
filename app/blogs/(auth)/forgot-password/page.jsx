"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Button from "@/app/components/common/Button";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Send reset link to:", email);
    // Add API logic here to trigger reset email
  };

  return (
    <section className="min-h-screen bg-[#FFEFE6] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary-text">Forgot Password?</h2>
          <p className="text-secondary-text mt-2">
            Enter your email to receive a password reset link.
          </p>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
            />
          </div>

          <Button type="submit" text="Send Reset Link" className="w-full" />
        </form>

        <p className="text-center text-sm text-gray-600">
          Remembered your password?{" "}
          <Link href="/auth/login" className="text-theme font-medium hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
}
