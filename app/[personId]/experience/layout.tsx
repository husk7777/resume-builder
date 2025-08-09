import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ExperienceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <nav className="py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
        <Link href="/experience/professional">Professional</Link>
        <Link href="/experience/volunteer">Volunteer</Link>
        </div>
      </nav>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}