import { notFound } from "next/navigation";
import { projects } from "../projects-data";
import Navbar from "../../navbar/page";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <>
    <Navbar />
    <main className="min-h-screen px-6 py-20 max-w-3xl mx-auto flex flex-col gap-10">
      <section className="py-5">
            <h1 className="font-hero text-4xl md:text-5xl mb-4">
                {project.title}
            </h1>
      </section>
      <section className="border-t border-b border-green-500 px-5 py-10 flex flex-row justify-evenly">
        <div className="items-center flex flex-col">
            <h3 className="text-muted-foreground">TIMELINE</h3>
            <p>{project.date}</p>
        </div>
        <div className="items-center flex flex-col">
            <h3 className="text-muted-foreground">PLATFORM</h3>
            <p>{project.platform}</p>
        </div>
        <div className="items-center flex flex-col">
            <h3 className="text-muted-foreground">MY ROLE</h3>
            <p>{project.role}</p>
        </div>
      </section>
      <section className="space-y-6 font-inter leading-relaxed text-foreground">
        <h2 className="text-2xl font-medium">Introduction</h2>
        <p className="text-justify text-muted-foreground">
          {project.introduction}
        </p>
      </section>
      <section>
        
      </section>
    </main>
    </>
  );
}