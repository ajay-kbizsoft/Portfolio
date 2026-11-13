"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, Code } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with product management, shopping cart, payment integration, and order tracking for seamless user experience.",
    image: "from-blue-500 to-cyan-500",
    tags: ["Next.js", "Stripe", "TypeScript", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    title: "Real-time Analytics Dashboard",
    description:
      "A comprehensive analytics platform with real-time data visualization, interactive charts, and customizable reporting for business insights.",
    image: "from-purple-500 to-pink-500",
    tags: ["React", "D3.js", "WebSocket", "Node.js"],
    demo: "#",
    github: "#",
  },
  {
    title: "Social Media Application",
    description:
      "Modern social networking platform with user profiles, post sharing, real-time messaging, and content discovery features.",
    image: "from-green-500 to-emerald-500",
    tags: ["React", "Firebase", "Node.js", "Socket.io"],
    demo: "#",
    github: "#",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative project management tool with kanban boards, team collaboration, deadline tracking, and productivity analytics.",
    image: "from-orange-500 to-red-500",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind"],
    demo: "#",
    github: "#",
  },
  {
    title: "Fitness Tracking App",
    description:
      "Cross-platform mobile application for tracking workouts, nutrition plans, progress monitoring, and achieving fitness goals.",
    image: "from-indigo-500 to-purple-500",
    tags: ["React Native", "Firebase", "Redux", "Charts"],
    demo: "#",
    github: "#",
  },
  {
    title: "Restaurant Booking System",
    description:
      "Online reservation platform with table booking, menu browsing, customer reviews, and integrated payment processing.",
    image: "from-teal-500 to-cyan-500",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    demo: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Recent Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing a selection of projects built with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="h-full flex flex-col">
                {/* Project Image/Gradient */}
                <div className={`project-art h-48 bg-gradient-to-br ${project.image} relative overflow-hidden rounded-t-2xl`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="project-window" aria-hidden="true">
                    <div className="window-toolbar"><i /><i /><i /><span>{project.tags[0]}</span></div>
                    <div className={`window-preview preview-${index % 3}`}>
                      <div className="preview-sidebar"><i /><i /><i /></div>
                      <div className="preview-content"><div className="preview-heading" /><div className="preview-tiles"><i /><i /><i /></div><div className="preview-line" /><div className="preview-line short" /></div>
                    </div>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="primary" href={project.demo} className="flex-1 py-2 px-4 text-sm">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button variant="secondary" href={project.github} className="py-2 px-4 text-sm">
                      <Code className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
