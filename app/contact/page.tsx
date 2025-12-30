'use client'
import { Container } from "@/components/common/Container";
import React, { useState } from "react";

export default function contact() {
  const [loading,setLoading]= useState<boolean>(false);
  
  const [formData,setFormData] = useState({
    name:"",
    phone:"",
    email:"",
    message:"",
  });

  function handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const {name,value} = e.target;

    setFormData(prev => ({
      ...prev,
      [name]:value,
    }))
  }

   async function handleSubmit(e:React.FormEvent){
    e.preventDefault();
    const {name,phone,email,message}= formData;
    setLoading(true);

    await fetch("/api/contact",{method:'POST',headers:{"Content-Type":"application/json"}, body:JSON.stringify(formData)});

    setFormData({
      name:'',
      phone:'',
      message:'',
      email:'',
    })

    setLoading(false);

    

  };


  return (
    <Container className="min-h-screen py-10   flex  pl-16   bg-white    text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800">
      <section className="w-full bg-white dark:bg-black text-black dark:text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* HEADER */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold">Contact</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Get in touch with me. I will get back to you as soon as possible.
            </p>
          </div>

          <hr className="border-gray-200 dark:border-gray-800 mb-12" />

          {/* FORM */}
          <div>
            <h2 className="text-xl font-semibold mb-1">Send me a message</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Fill out the form below and I will get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME + PHONE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.name}
                    name="name"
                    required
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-md border border-gray-200 dark:border-gray-800
                  px-4 py-2 bg-white dark:bg-black outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.phone}
                    name="phone"
                    required
                    type="text"
                    placeholder="+1 (123) xxx-xxxx"
                    className="w-full rounded-md border border-gray-200 dark:border-gray-800
                  px-4 py-2 bg-white dark:bg-black outline-none"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  required
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full rounded-md border border-gray-200 dark:border-gray-800
                px-4 py-2 bg-white dark:bg-black outline-none"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  onChange={handleChange}
                  value={formData.message}
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full rounded-md border border-gray-200 dark:border-gray-800
                px-4 py-2 bg-white dark:bg-black outline-none resize-none"
                />
              </div>

              {/* BUTTON */}
              <button
                disabled={loading}
                type="submit"
                className="inline-flex items-center gap-2
              rounded-md bg-black text-white dark:bg-white dark:text-black
              px-6 py-2 text-sm hover:opacity-90 transition"
              >
                {loading ? "sending..." : "✈ Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
}
