"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { Eye, EyeOff } from "lucide-react"; // You can replace with other icons if needed
import { auth, logInWithEmailAndPassword } from "@/firebase";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Button from "@/app/components/common/Button";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (user) router.push("/blogs/dashboard");
  }, [user, loading, router]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    try {
      await logInWithEmailAndPassword(form.email, form.password);
    } catch (error) {
      alert("Login failed: " + error.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#FFEFE6] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary-text">Welcome Back</h2>
          <p className="text-secondary-text mt-2">
            Login to your TruPulse dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
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
            <Label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="absolute right-3 cursor-pointer top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            text={
              isLoggingIn ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin rounded-full h-4 w-4 border-2 border-t-transparent border-white"></span>
                  Logging In...
                </span>
              ) : (
                "Log In"
              )
            }
            disabled={isLoggingIn}
          />
        </form>
      </div>
    </section>
  );
}
