import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-zinc-800 font-mono text-sm">
            Welcome to{" "}
            <span className="font-bold">Cyberhertz Consultants</span>
          </Link>
        </div>
        <div>
          <Link href="/team/somya" className="text-zinc-800 hover:text-zinc-600 font-mono text-sm">
            Somya Jha
          </Link>
        </div>
      </div>
    </header>
  );
}
