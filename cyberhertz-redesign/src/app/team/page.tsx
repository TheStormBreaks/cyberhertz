import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Sample team data
const teamMembers = [
  {
    id: "somya",
    name: "Somya Jha",
    title: "Founder & CEO",
    bio: "Leading our vision and strategy with expertise in cybersecurity and policy advocacy.",
    image: "/team/placeholder-1.jpg"
  },
  {
    id: "member2",
    name: "Alex Johnson",
    title: "Chief Technology Officer",
    bio: "Driving our technological innovations with over 10 years of experience in data science.",
    image: "/team/placeholder-2.jpg"
  },
  {
    id: "member3",
    name: "Taylor Lee",
    title: "Lead Consultant",
    bio: "Specializing in policy research and analysis with a background in government relations.",
    image: "/team/placeholder-3.jpg"
  },
  {
    id: "member4",
    name: "Jordan Smith",
    title: "Security Analyst",
    bio: "Expert in threat detection and penetration testing with a focus on critical infrastructure.",
    image: "/team/placeholder-4.jpg"
  }
];

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Our Team</h1>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {teamMembers.map((member) => (
            <Link
              key={member.id}
              href={`/team/${member.id}`}
              className="group flex flex-col border rounded-lg p-6 transition-all hover:border-zinc-300 hover:bg-zinc-50"
            >
              <div className="mb-4 relative w-full h-[200px] bg-zinc-100 rounded-md overflow-hidden">
                {/* Placeholder image div - replace with actual images later */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              <h2 className="text-xl font-semibold group-hover:text-zinc-700">
                {member.name}
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
              </h2>
              <p className="text-zinc-600 font-medium mt-1">{member.title}</p>
              <p className="text-zinc-500 mt-2 text-sm">{member.bio}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
