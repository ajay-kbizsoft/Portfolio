"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Brain,
  Database,
  Smartphone,
  Cloud,
  Palette,
  Cpu,
  GitBranch,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    color: "from-blue-500 to-cyan-500",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    icon: Database,
    title: "Backend Development",
    color: "from-green-500 to-emerald-500",
    skills: ["Node.js", "Python", "Express", "REST API", "GraphQL"],
  },
  {
    icon: Brain,
    title: "Database & Storage",
    color: "from-purple-500 to-pink-500",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "from-orange-500 to-red-500",
    skills: ["AWS", "Docker", "CI/CD", "Nginx", "Linux"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    color: "from-indigo-500 to-blue-500",
    skills: ["React Native", "Responsive Design", "PWA", "Mobile UI", "Cross-Platform"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    color: "from-pink-500 to-rose-500",
    skills: ["Figma", "Responsive Design", "User Experience", "Prototyping", "Wireframing"],
  },
  {
    icon: Cpu,
    title: "Programming Languages",
    color: "from-yellow-500 to-amber-500",
    skills: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL"],
  },
  {
    icon: GitBranch,
    title: "Tools & Workflow",
    color: "from-teal-500 to-cyan-500",
    skills: ["Git", "GitHub", "VS Code", "Agile", "Testing"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and intelligent applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="p-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
