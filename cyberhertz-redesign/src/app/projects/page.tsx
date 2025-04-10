import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Sample projects timeline data
const projectsTimeline = [
  {
    year: "2023",
    projects: [
      {
        title: "National Cybersecurity Framework",
        description: "Collaborated with government agencies to develop a comprehensive national cybersecurity framework for critical infrastructure protection.",
        client: "Government Agency"
      },
      {
        title: "Healthcare Data Protection System",
        description: "Designed and implemented a secure data protection system for a major healthcare provider, ensuring HIPAA compliance and patient data security.",
        client: "Healthcare Provider"
      }
    ]
  },
  {
    year: "2022",
    projects: [
      {
        title: "Financial Sector Threat Analysis",
        description: "Conducted in-depth threat analysis for financial institutions, providing insights on emerging cybersecurity risks and mitigation strategies.",
        client: "Banking Consortium"
      },
      {
        title: "Smart City Security Audit",
        description: "Performed comprehensive security audits for smart city infrastructure implementations, focusing on IoT device security and network protection.",
        client: "Municipal Corporation"
      },
      {
        title: "Data Privacy Policy Development",
        description: "Developed robust data privacy policies and compliance frameworks for a multinational corporation operating across multiple jurisdictions.",
        client: "Technology Corporation"
      }
    ]
  },
  {
    year: "2021",
    projects: [
      {
        title: "Work done 1",
        description: "A long description of the work done.",
        client: "CLIENT NAME"
      },
      {
        title: "Work done 2",
        description: "Desc of the work done",
        client: "CLIENT 2"
      }
    ]
  }
];

export default function CompanyProjects() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Our Projects</h1>
        <p className="text-zinc-600 mb-10">
          At Cyberhertz Consultants, we've worked on diverse cybersecurity and data science projects
          across various sectors. Below is a timeline of our notable work.
        </p>

        <div className="space-y-12">
          {projectsTimeline.map((timeframe, index) => (
            <div key={timeframe.year} className="relative">
              <div className="flex items-center mb-6">
                <div className="bg-zinc-800 text-white px-4 py-2 rounded-md font-bold text-lg">
                  {timeframe.year}
                </div>
                {index < projectsTimeline.length - 1 && (
                  <div className="ml-6 w-1/2 h-0.5 bg-zinc-200"></div>
                )}
              </div>

              <div className="space-y-6 ml-8 border-l-2 border-zinc-200 pl-6">
                {timeframe.projects.map((project, projectIndex) => (
                  <div
                    key={`${timeframe.year}-${projectIndex}`}
                    className="relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-zinc-400 before:rounded-full before:-left-[34px] before:top-2"
                  >
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-zinc-500 text-sm mt-1">Client: {project.client}</p>
                    <p className="text-zinc-600 mt-2">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
