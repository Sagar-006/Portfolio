"use client";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/Ui/Button";
import { Input } from "@/components/Ui/input";
import { Textarea } from "@/components/Ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";

export  function Cpage() {
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { name, phone, email, message } = formData;
    setLoading(true);

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("I will contact you soon")

    setFormData({
      name: "",
      phone: "",
      message: "",
      email: "",
    });

    setLoading(false);
  }

  return (
    <div className="min-h-screen md:p-0 p-6 bg-background text-foreground">
      <Container className="py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Contact
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Get in touch with me. I will get back to you as soon as possible.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8 sm:mb-12" />

        {/* Form Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Send me a message
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
            Fill out the form below and I will get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (123) xxx-xxxx"
                  required
                  className="w-full"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hello..."
                rows={6}
                required
                className="w-full resize-none"
              />
            </div>

            {/* Button */}
            <Button
              type="submit"
              disabled={loading}
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              <Send className="w-4 h-4 mr-2" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
