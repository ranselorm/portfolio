"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useSheet } from "@/context/SheetContext";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Icon } from "@iconify/react/dist/iconify.js";

const Contact = () => {
  const { isOpen, closeSheet } = useSheet();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    interest: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => ({ ...prev, interest }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message, interest } = formData;

    if (!name || !email || !message || !interest) {
      setError("All fields are required.");
      return;
    }
    setError("");
    console.log("Submitted Data:", formData);

    closeSheet();
  };

  return (
    <Sheet open={isOpen} onOpenChange={(state) => !state && closeSheet()}>
      <SheetContent className="w-full sm:w-[100vw] font-primary">
        <SheetHeader className="mt-6">
          <SheetTitle className="hidden">Lets get started</SheetTitle>
          <SheetDescription className="text-bold text-base">
            Please fill out the form below to get started.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-8 mt-4">
          {/* Left Section: Contact Info */}
          <div className="bg-primary text-white rounded-lg px-6 py-4 flex-1">
            <div className="space-y-4">
              <div className="flex items-center gap-x-2">
                <Icon icon="mdi-light:email" className="text-lg" />
                <p className="font-bold text-sm">selorm@berthengineering.com</p>
              </div>
              <div className="flex items-center gap-x-2">
                <Icon icon="mdi-light:phone" className="text-lg" />
                <p className="font-bold text-sm">+233 550 013 021</p>
              </div>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="flex-1">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Interest Selection */}
              {/* <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">
                  I’m interested in:
                </Label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "UX/UI design",
                    "Web design",
                    "Design system",
                    "Graphic design",
                    "Other",
                  ].map((interest) => (
                    <Button
                      key={interest}
                      type="button"
                      variant={
                        formData.interest === interest ? "default" : "outline"
                      }
                      onClick={() => handleInterestChange(interest)}
                    >
                      {interest}
                    </Button>
                  ))}
                </div>
              </div> */}

              {/* Name Field */}
              <div className="flex space-x-2">
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="border border-black"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@gmail.com"
                    required
                    className="border border-black"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  className="border border-black"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={4}
                  required
                  className="border border-black"
                />
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button type="submit" className="w-full md:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Contact;
