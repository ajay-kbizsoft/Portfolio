"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Send, MessageSquare, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:your.email@example.com",
    color: "from-red-500 to-orange-500",
  },
  {
    label: "GitHub",
    href: "https://github.com",
    color: "from-gray-600 to-gray-800",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "from-blue-600 to-blue-800",
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    color: "from-sky-500 to-blue-600",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;m always open to discussing new
            opportunities and innovative ideas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card delay={0.1}>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button variant="primary" className="w-full" type="submit">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </Card>

          {/* Social Links */}
          <div className="space-y-6">
            <Card delay={0.2}>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all group"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${link.color}`}>
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                          {link.label}
                        </div>
                        <div className="text-sm text-gray-500">{link.href}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </Card>

            <Card delay={0.3}>
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quick Response</h3>
                <p className="text-gray-400 mb-4">
                  I typically respond within 24 hours
                </p>
                <div className="text-sm text-blue-400">Available for freelance work</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
