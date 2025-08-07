import Link from "next/link";
export default function Navbar(){
    return(
      <nav className="py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
        <Link href="/about">About</Link>
        <Link href="/experience/professional">Experience</Link>
        <Link href="/skills">Skills</Link>
        </div>
      </nav>
    )
}