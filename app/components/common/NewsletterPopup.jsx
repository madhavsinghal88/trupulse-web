"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Mail, CheckCircle, Phone } from "lucide-react";

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already subscribed or dismissed the popup
    const hasSubscribed = localStorage.getItem('trupulse-newsletter-subscribed');
    const hasDismissed = localStorage.getItem('trupulse-newsletter-dismissed');
    
    if (hasSubscribed || hasDismissed) {
      return; // Don't show popup if already subscribed or dismissed permanently
    }

    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && isAgreed) {
      // Save subscription data to localStorage
      const subscriptionData = {
        email: email,
        phone: phone || null,
        subscribedAt: new Date().toISOString(),
        agreed: isAgreed
      };
      
      localStorage.setItem('trupulse-newsletter-subscribed', JSON.stringify(subscriptionData));
      
      setIsSubscribed(true);
      setShowToast(true);
      
      // Hide popup after 2 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
      
      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDontShowAgain = () => {
    // Save dismissal preference to localStorage
    localStorage.setItem('trupulse-newsletter-dismissed', 'true');
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" />
      
      {/* Popup - centered at bottom with elegant positioning */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] md:w-[420px] z-50 animate-in slide-in-from-bottom-8 duration-500">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-xl">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-1 rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-br from-[#FF5900] via-[#FF7700] to-[#FF9000] px-6  py-2 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Stay in the Loop!</h3>
            </div>
            <p className="relative text-white/95 text-sm font-medium">
              Get exclusive insights, product updates & industry trends delivered to your inbox
            </p>
          </div>

          {/* Content */}
          <div className="p-6 bg-gradient-to-b from-gray-50/50 to-white">
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-4">
                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address <span className="text-[#FF5900]">*</span>
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#FF5900]" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 border-gray-200 focus:border-[#FF5900] focus:ring-[#FF5900]"
                      required
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                    Phone Number <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#FF5900]" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 border-gray-200 focus:border-[#FF5900] focus:ring-[#FF5900]"
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreement"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[#FF5900] bg-gray-100 border-gray-300 rounded focus:ring-[#FF5900] focus:ring-2"
                  />
                  <Label 
                    htmlFor="agreement" 
                    className="text-xs text-gray-600 leading-relaxed cursor-pointer"
                  >
                    I agree to receive promotional text messages from TruPulse about product updates, webinars, events, and insights.
                  </Label>
                </div>

                {/* Subscribe Button */}
                <button
                  type="submit"
                  disabled={!email || !isAgreed}
                  className="w-full cursor-pointer relative overflow-hidden px-6 py-3.5 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {/* Animated Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF9000] via-[#FF5900] to-[#FF9000] bg-[length:200%_200%] animate-gradient" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Subscribe Now
                  </span>
                </button>

                {/* Don't Show Again Button */}
                <div className="pt-2 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={handleDontShowAgain}
                    className="w-full text-center text-xs text-gray-400 hover:text-gray-600 transition-colors cursor-pointer flex items-center justify-center gap-1.5 group"
                  >
                    <X className="w-3 h-3 group-hover:rotate-90 transition-transform duration-200" />
                    <span>No thanks, don&apos;t show me this again</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Success State */
              <div className="text-center py-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Thank you for subscribing!
                </h4>
                <p className="text-sm text-gray-600">
                  You'll receive our latest updates soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-right-4 duration-300">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">Successfully subscribed!</p>
              <p className="text-sm text-gray-600">Welcome to our newsletter</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
