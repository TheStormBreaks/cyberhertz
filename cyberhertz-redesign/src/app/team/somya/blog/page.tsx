import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Sample blog posts
const blogPosts = [
  {
    id: "cybersecurity-trends-2024",
    title: "Cybersecurity Trends to Watch in 2024",
    date: "April 5, 2024",
    excerpt: "As we navigate through 2024, the cybersecurity landscape continues to evolve rapidly with new threats and technologies emerging.",
    readTime: "6 min read"
  },
  {
    id: "ai-ethics-data-science",
    title: "Ethics in AI: Navigating the Data Science Frontier",
    date: "March 21, 2024",
    excerpt: "With the rapid advancement of artificial intelligence, ethical considerations become increasingly important in data science applications.",
    readTime: "8 min read"
  },
  {
    id: "policy-tech-governance",
    title: "Bridging the Gap: Technology Policy and Governance",
    date: "February 18, 2024",
    excerpt: "Technology governance frameworks are essential for balancing innovation with security and privacy concerns.",
    readTime: "5 min read"
  },
  {
    id: "security-remote-work",
    title: "Security Best Practices for Remote Work Environments",
    date: "January 10, 2024",
    excerpt: "Remote work has become the new normal, but it brings unique security challenges that organizations must address.",
    readTime: "7 min read"
  }
];

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">My Blog</h1>
          <p className="text-zinc-600 mt-2">Thoughts, insights, and explorations in cybersecurity and data science.</p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/team/somya/blog/${post.id}`}
              className="block border-b border-zinc-200 pb-8 last:border-0 group"
            >
              <article>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <p className="text-zinc-500 text-sm">{post.date}</p>
                  <p className="text-zinc-500 text-sm">{post.readTime}</p>
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-zinc-700">
                  {post.title}
                  <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
                </h2>
                <p className="text-zinc-600">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
