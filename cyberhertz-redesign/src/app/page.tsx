import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-between p-6 md:p-24">
        <div className="relative w-full max-w-[300px] h-[200px] my-12">
          <Image
            src="/logo.png"
            alt="Cyberhertz Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <div className="w-full max-w-5xl grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/team"
            className="group p-6 border rounded-lg transition-all hover:border-zinc-300 hover:bg-zinc-50"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Our Team{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </h2>
            <p className="text-sm text-zinc-500">
              Find out more about our leaders and their journey.
            </p>
          </Link>

          <Link
            href="/projects"
            className="group p-6 border rounded-lg transition-all hover:border-zinc-300 hover:bg-zinc-50"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Projects{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </h2>
            <p className="text-sm text-zinc-500">
              Look at our work and ongoing projects in Research, Consultancy and Policy Advocacy
            </p>
          </Link>

          <Link
            href="/team/somya/blog"
            className="group p-6 border rounded-lg transition-all hover:border-zinc-300 hover:bg-zinc-50"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Blog{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </h2>
            <p className="text-sm text-zinc-500">
              Check out our latest endeavours and our social media sites
            </p>
          </Link>

          <Link
            href="/contact"
            className="group p-6 border rounded-lg transition-all hover:border-zinc-300 hover:bg-zinc-50"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Contact Us{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </h2>
            <p className="text-sm text-zinc-500">
              Our Contact info.
            </p>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
