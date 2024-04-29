import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "10+ Personal Projects Completed",
    "Contributed as Django Developer at TATA Motors",
    "3 years of coding experience",
    "Technology Enthusiast",
    "Codroidhub Blockchain Workshop Certification",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
