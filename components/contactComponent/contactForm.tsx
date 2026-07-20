"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Name</label>
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-2xl border-border/70 bg-background/80"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Email</label>
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-2xl border-border/70 bg-background/80"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Subject</label>
          <Input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="rounded-2xl border-border/70 bg-background/80"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Message</label>
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
            className="rounded-2xl border-border/70 bg-background/80"
          />
        </div>

        <Button type="submit" className="w-full rounded-full">
          Send Message
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
