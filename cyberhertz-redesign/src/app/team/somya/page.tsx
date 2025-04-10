import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function SomyaPortfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
        <div className="flex flex-col items-center mb-12">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 bg-zinc-100 flex items-center justify-center text-zinc-400 text-4xl">
            {/* Placeholder for profile image - replace with actual image */}
            SJ
          </div>
          <h1 className="text-3xl font-bold text-center">Somya Jha</h1>
          <p className="text-zinc-600 mt-2 text-center">Founder & CEO at Cyberhertz Consultants</p>

          <div className="flex items-center gap-4 mt-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-zinc-600">
              I'm passionate about cybersecurity, data science, and policy advocacy. With expertise in these domains, I founded Cyberhertz Consultants to bridge the gap between technology and policy-making. My work focuses on creating sustainable, secure, and privacy-respecting technological solutions for various organizations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-zinc-200 pl-4 py-1">
                <h3 className="font-medium">Master's in Cybersecurity</h3>
                <p className="text-zinc-500 text-sm">University of Technology • 2019-2021</p>
              </div>
              <div className="border-l-2 border-zinc-200 pl-4 py-1">
                <h3 className="font-medium">Bachelor's in Computer Science</h3>
                <p className="text-zinc-500 text-sm">State University • 2015-2019</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-zinc-200 pl-4 py-1">
                <h3 className="font-medium">Founder & CEO</h3>
                <p className="text-zinc-500 text-sm">Cyberhertz Consultants • 2021-Present</p>
                <p className="text-zinc-600 text-sm mt-1">Leading a team of cybersecurity and policy experts, providing consultancy services to organizations.</p>
              </div>
              <div className="border-l-2 border-zinc-200 pl-4 py-1">
                <h3 className="font-medium">Cybersecurity Researcher</h3>
                <p className="text-zinc-500 text-sm">Tech Solutions Inc. • 2019-2021</p>
                <p className="text-zinc-600 text-sm mt-1">Conducted research on emerging threats and developed security frameworks.</p>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/team/somya/blog"
              className="group flex flex-col border rounded-lg p-6 transition-all hover:border-zinc-300 hover:bg-zinc-50"
            >
              <h3 className="text-xl font-semibold mb-2">
                My Blog
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
              </h3>
              <p className="text-zinc-600 text-sm">Read my latest thoughts and insights on cybersecurity, data science, and policy.</p>
            </Link>

            <Link
              href="/team/somya/projects"
              className="group flex flex-col border rounded-lg p-6 transition-all hover:border-zinc-300 hover:bg-zinc-50"
            >
              <h3 className="text-xl font-semibold mb-2">
                My Projects
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
              </h3>
              <p className="text-zinc-600 text-sm">Explore the projects I've worked on, including GitHub repositories and case studies.</p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
