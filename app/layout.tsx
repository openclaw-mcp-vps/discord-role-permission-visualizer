import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Role Permission Visualizer",
  description: "Visual map of Discord server permissions and roles. Analyze role hierarchies, permission overlaps, and security gaps."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5546ef84-5558-4f91-b23d-8bbadd93d581"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
