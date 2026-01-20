import { notFound } from "next/navigation";
import { projects } from "../projects-data";
import Navbar from "../../navbar/page";
import Image from "next/image";
import AnimatedImages from "@/components/ui/shared/animated-images";

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

                <section className="space-y-3 font-inter leading-relaxed text-foreground">
                    <h2 className="text-2xl font-bold">Introduction</h2>
                    <p className="text-justify text-secondary-foreground/90">
                        {project.introduction}
                    </p>
                </section>

                <section className="space-y-3 font-inter leading-relaxed text-foreground">
                    <h2 className="text-2xl font-bold">My Role</h2>
                    <p className="text-justify text-secondary-foreground/90">I am the {project.role} of this redesign project.</p>
                </section>

                <section className="space-y-3 font-inter leading-relaxed text-foreground mb-5">
                    <h2 className="text-2xl font-bold">Problem</h2>
                    <p className="text-justify text-secondary-foreground/90">Here are the key problems on the homepage of Philhealth.</p>
                </section>

                <section className="space-y-3 font-inter leading-relaxed text-foreground flex flex-col">
                    <div className="space-y-7 px-6">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <h6 className="text-green-500 text-sm uppercase tracking-wider font-light">Problem #1</h6>
                                    <h2 className="text-2xl lg:text-2xl font-semibold">
                                        {project.problems.problem1}
                                    </h2>
                                </div>
                                <p className="space-y-2">{project.probDetails.desc1}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h6 className="text-muted-foreground text-sm uppercase tracking-wider">Example</h6>
                                <p className="space-y-2">{project.probDetails.example1}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h6 className="text-muted-foreground text-sm uppercase tracking-wider">Impact</h6>
                                <p className="space-y-2">{project.probDetails.impact1}</p>
                            </div>
                    </div>
                    {project.problems.problem1 && (
                        <div className="pt-6 pb-6 px-6">
                            <Image src={project.images.prob1} 
                            alt="Navigation Bar" 
                            width={1000} 
                            height={1000} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform ease-out duration-300 rounded-md"
                            />
                        </div>
                    )}
                </section>

                <section className="space-y-6 font-inter leading-relaxed text-foreground flex flex-col">
                <div className="space-y-7 px-6">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-4">
                                    <h6 className="text-green-500 text-sm uppercase tracking-wider font-light">Problem #2</h6>
                                    <h2 className="text-2xl lg:text-2xl font-semibold">
                                        {project.problems.problem2}
                                    </h2>
                                </div>
                                <p className="space-y-2">{project.probDetails.desc2}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h6 className="text-muted-foreground text-sm uppercase tracking-wider">Example</h6>
                                <p className="space-y-2">{project.probDetails.example2}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h6 className="text-muted-foreground text-sm uppercase tracking-wider">Impact</h6>
                                <p className="space-y-2">{project.probDetails.impact2}</p>
                            </div>
                    </div>
                    {project.problems.problem2 && (
                        <AnimatedImages 
                            image1={project.images.prob2.image1}
                            image2={project.images.prob2.image2}
                        />
                    )}
                </section>
                
                <section className="space-y-6 font-inter leading-relaxed text-foreground flex flex-col">
                    <div className="space-y-7 px-6">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-4">
                                    <h6 className="text-green-500 text-sm uppercase tracking-wider font-light">Problem #3</h6>
                                    <h2 className="text-2xl lg:text-2xl font-semibold">
                                        {project.problems.problem3}
                                    </h2>
                                </div>
                                <p className="space-y-2">{project.probDetails.desc3}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h6 className="text-muted-foreground text-sm uppercase tracking-wider">Example</h6>
                                <p className="space-y-2">{project.probDetails.example3}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h6 className="text-muted-foreground text-sm uppercase tracking-wider">Impact</h6>
                                <p className="space-y-2">{project.probDetails.impact3}</p>
                            </div>
                    </div>
                    {project.problems.problem3 && (
                        <div className="pt-6 pb-6 px-6">
                            <Image src={project.images.prob3} 
                            alt="Navigation Bar" 
                            width={1000} 
                            height={1000} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform ease-out duration-300 rounded-md"
                            />
                        </div>
                    )}
                </section>
                

                <section className="space-y-4 font-inter leading-relaxed text-foreground">
                    <h2 className="text-2xl font-bold">Goals</h2>
                    <h6 className="text-muted-foreground text-sm uppercase tracking-wider">Service Goals</h6>
                        <div className="space-y-15 border-b pb-10 border-green-500">
                            <div className="flex flex-col gap-3">
                                <h2 className="text-xl font-semibold">
                                    {project.goals.goal1.title}
                                </h2>
                                <p className="space-y-2 text-secondary-foreground/90">{project.goals.goal1.desc}</p>
                            </div>
                            <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-semibold">
                                    {project.goals.goal2.title}
                                </h2>
                                <p className="space-y-2 text-secondary-foreground/90">{project.goals.goal2.desc}</p>
                            </div>
                        </div>
                    <h6 className="text-muted-foreground text-sm uppercase tracking-wider pt-3">Users Goals</h6>
                    <div className="space-y-15">
                            <div className="flex flex-col gap-3">
                                <h2 className="text-xl font-semibold">
                                    {project.uxGoals.goal1.title}
                                </h2>
                                <p className="space-y-2 text-secondary-foreground/90">{project.uxGoals.goal1.desc}</p>
                            </div>
                            <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-semibold">
                                    {project.uxGoals.goal2.title}
                                </h2>
                                <p className="space-y-2 text-secondary-foreground/90">{project.uxGoals.goal2.desc}</p>
                            </div>
                            <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-semibold">
                                    {project.uxGoals.goal3.title}
                                </h2>
                                <p className="space-y-2 text-secondary-foreground/90">{project.uxGoals.goal3.desc}</p>
                            </div>
                        </div>
                </section>
            </main>
        </>
    );
}