import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Sample projects
const projects = [
  {
    title: "SecureAuth Framework",
    description: "A comprehensive authentication framework with multi-factor authentication and advanced threat detection.",
    technologies: ["TypeScript", "Node.js", "React", "GraphQL"],
    githubUrl: "https://github.com/somyajha/secure-auth"
  },
  {
    title: "Policy Analysis Toolkit",
    description: "Tools for analyzing cybersecurity policies and regulations across different jurisdictions.",
    technologies: ["Python", "TensorFlow", "NLP", "D3.js"],
    githubUrl: "https://github.com/somyajha/policy-analyzer"
  },
  {
    title: "ThreatIntel Dashboard",
    description: "Real-time cybersecurity threat intelligence dashboard with visualization and reporting capabilities.",
    technologies: ["JavaScript", "React", "Express", "MongoDB"],
    githubUrl: "https://github.com/somyajha/threat-intel"
  },
  {
    title: "IoT Security Scanner",
    description: "A lightweight security scanner for IoT devices to identify vulnerabilities and configuration issues.",
    technologies: ["Rust", "Python", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/somyajha/iot-scanner"
  }
];

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-zinc-600 mt-2">A collection of open-source projects and research work.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border rounded-lg p-6 transition-all hover:border-zinc-300 hover:bg-zinc-50"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold group-hover:text-zinc-700">
                  {project.title}
                </h2>
                <div className="flex items-center text-zinc-500 group-hover:text-zinc-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </div>
              </div>
              <p className="text-zinc-600 mt-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-zinc-100 text-zinc-600 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
