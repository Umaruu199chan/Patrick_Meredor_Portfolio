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
                    <h1 className="font-hero text-3xl md:text-5xl mb-4">
                        {project.title}
                    </h1>
                </section>

                <section className="leading-relaxed border-t border-b border-green-500 px-5 py-10 flex flex-col gap-5 lg:flex-row lg:justify-evenly">
                    <div className="lg:items-center flex flex-col">
                        <h3 className="text-muted-foreground">TIMELINE</h3>
                        <p>{project.date}</p>
                    </div>
                    <div className="lg:items-center flex flex-col">
                        <h3 className="text-muted-foreground">PLATFORM</h3>
                        <p>{project.platform}</p>
                    </div>
                    <div className="lg:items-center flex flex-col">
                        <h3 className="text-muted-foreground">MY ROLE</h3>
                        <p>{project.role}</p>
                    </div>
                </section>

                <section className="space-y-3 font-inter leading-relaxed">
                    <h2 className="text-2xl font-bold">Introduction</h2>
                    <p className="text-secondary-foreground/90 ">
                        {project.introduction}
                    </p>
                </section>

                <section className="space-y-3 font-inter leading-relaxed">
                    <h2 className="text-2xl font-bold">My Role</h2>
                    <p className="text-secondary-foreground/90">I am the {project.role} of this redesign project.</p>
                </section>

                <section className="space-y-3 font-inter leading-relaxed mb-5">
                    <h2 className="text-2xl font-bold">Problem</h2>
                    <p className="text-secondary-foreground/90">Here are the key problems on the homepage of Philhealth.</p>
                </section>

                {/* Problem #1 Section */}
                <section className="space-y-3 font-inter leading-relaxed flex-col">
                    <div className="space-y-7 px-6">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-3">
                                <h6 className="text-green-500 text-sm uppercase tracking-wider font-light">Problem #1</h6>
                                <h2 className="text-xl font-medium">
                                    {project.problems.problem1}
                                </h2>
                            </div>
                            <p className="space-y-2 text-secondary-foreground/90">{project.probDetails.desc1}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h6 className="text-muted-foreground text-sm uppercase tracking-wider">Example</h6>
                            <p className="space-y-2 text-secondary-foreground/90">{project.probDetails.example1}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h6 className="text-muted-foreground text-sm uppercase tracking-wider">Impact</h6>
                            <p className="space-y-2 text-secondary-foreground/90 ">{project.probDetails.impact1}</p>
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

                {/* Problem #2 Section */}
                <section className="space-y-6 font-inter leading-relaxed flex flex-col">
                    <div className="space-y-7 px-6">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-4">
                                <h6 className="text-green-500 text-sm uppercase tracking-wider font-light">Problem #2</h6>
                                <h2 className="text-xl font-medium">
                                    {project.problems.problem2}
                                </h2>
                            </div>
                            <p className="space-y-2 text-secondary-foreground/90">{project.probDetails.desc2}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h6 className="text-muted-foreground text-sm uppercase tracking-wider">Example</h6>
                            <p className="space-y-2 text-secondary-foreground/90">{project.probDetails.example2}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h6 className="text-muted-foreground text-sm uppercase tracking-wider">Impact</h6>
                            <p className="space-y-2 text-secondary-foreground/90">{project.probDetails.impact2}</p>
                        </div>
                    </div>
                    {project.problems.problem2 && (
                        <AnimatedImages
                            image1={project.images.prob2.image1}
                            image2={project.images.prob2.image2}
                        />
                    )}
                </section>

                {/* Problem #3 Section */}
                <section className="space-y-6 font-inter leading-relaxed flex flex-col">
                    <div className="space-y-7 px-6">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-4">
                                <h6 className="text-green-500 text-sm uppercase tracking-wider font-light">Problem #3</h6>
                                <h2 className="text-xl font-medium">
                                    {project.problems.problem3}
                                </h2>
                            </div>
                            <p className="space-y-2 text-secondary-foreground/90">{project.probDetails.desc3}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h6 className="text-muted-foreground text-sm uppercase tracking-wider">Example</h6>
                            <p className="space-y-2 text-secondary-foreground/90">{project.probDetails.example3}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h6 className="text-muted-foreground text-sm uppercase tracking-wider">Impact</h6>
                            <p className="space-y-2 text-secondary-foreground/90">{project.probDetails.impact3}</p>
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

                {/* Goals Section */}
                <section className="space-y-4 font-inter leading-relaxed pb-10">
                    <h2 className="text-2xl font-bold">Goals</h2>
                    <h6 className="text-muted-foreground text-sm uppercase tracking-wider">Service Goals</h6>
                    <div className="space-y-10 px-6 border-b pb-10 border-green-500">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-medium">
                                {project.goals.goal1.title}
                            </h2>
                            <p className="space-y-2 text-secondary-foreground/90">{project.goals.goal1.desc}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-medium">
                                {project.goals.goal2.title}
                            </h2>
                            <p className="space-y-2 text-secondary-foreground/90">{project.goals.goal2.desc}</p>
                        </div>
                    </div>
                    <h6 className="text-muted-foreground text-sm uppercase tracking-wider pt-3">Users Goals</h6>
                    <div className="space-y-10 px-6">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-medium">
                                {project.uxGoals.goal1.title}
                            </h2>
                            <p className="space-y-2 text-secondary-foreground/90">{project.uxGoals.goal1.desc}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-medium">
                                {project.uxGoals.goal2.title}
                            </h2>
                            <p className="space-y-2 text-secondary-foreground/90">{project.uxGoals.goal2.desc}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-medium">
                                {project.uxGoals.goal3.title}
                            </h2>
                            <p className="space-y-2 text-secondary-foreground/90">{project.uxGoals.goal3.desc}</p>
                        </div>
                    </div>
                </section>

                {/* Users Section */}
                <section className="space-y-4 font-inter leading-relaxed pb-10">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Our Users</h2>
                        <p className="text-secondary-foreground/90">{project.users.desc}</p>
                        <p className="text-secondary-foreground/90">{project.users.desc2}</p>
                        <p className="text-secondary-foreground/90">{project.users.desc3}</p>
                    </div>
                    <div className="px-6 pt-15 flex flex-row items-center justify-between">
                        <div className="w-300 h-100 rounded-xl border">
                            <Image
                                src={project.users.user1.img}
                                alt="man"
                                width={300}
                                height={100}
                                className="rounded-md w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-5 space-y-4">
                            <h2 className="text-xl font-medium">{project.users.user1.title}</h2>
                            <p className="space-y-2 text-secondary-foreground/90">{project.users.user1.desc}</p>
                            <h6 className="text-muted-foreground text-sm uppercase tracking-wider pt-3">Jobs-to-be-done</h6>
                            <p className="space-y-2 text-secondary-foreground/90">{project.users.user1.needs}</p>
                        </div>
                    </div>
                    <div className="px-6 pt-15 flex flex-row items-center justify-between">
                        <div className="w-300 h-100 rounded-xl border">
                            <Image
                                src={project.users.user2.img}
                                alt="man"
                                width={300}
                                height={100}
                                className="rounded-md w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-5 space-y-4">
                            <h2 className="text-xl font-medium">{project.users.user2.title}</h2>
                            <p className="space-y-2 text-secondary-foreground/90">{project.users.user2.desc}</p>
                            <h6 className="text-muted-foreground text-sm uppercase tracking-wider pt-3">Jobs-to-be-done</h6>
                            <p className="space-y-2 text-secondary-foreground/90">{project.users.user2.needs}</p>
                        </div>
                    </div>
                    <div className="px-6 pt-15 flex flex-row items-center justify-between">
                        <div className="w-300 h-100 rounded-xl border">
                            <Image
                                src={project.users.user3.img}
                                alt="man"
                                width={300}
                                height={100}
                                className="rounded-md w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-5 space-y-4">
                            <h2 className="text-xl font-medium">{project.users.user3.title}</h2>
                            <p className="space-y-2 text-secondary-foreground/90">{project.users.user3.desc}</p>
                            <h6 className="text-muted-foreground text-sm uppercase tracking-wider pt-3">Jobs-to-be-done</h6>
                            <p className="space-y-2 text-secondary-foreground/90">{project.users.user3.needs}</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4 font-inter leading-relaxed pb-10">
                    <h2 className="text-2xl font-bold">Process</h2>
                    <p className="space-y-2 text-secondary-foreground/90">The redesign followed a user-centered process focused on simplifying content and guiding users toward essential services.</p>
                    <div className="p-5 space-y-4">
                        <h2 className="text-xl font-medium">Content Prioritization & Structure</h2>
                        <p className="space-y-2 text-secondary-foreground/90">
                        To support the defined UX goals, the homepage content was 
                        reorganized to prioritize essential services and reduce cognitive load.
                        High-frequency user actions such as checking contributions, benefits, and membership
                        information were placed prominently on the homepage.
                        </p>

                        <p className="space-y-2 text-secondary-foreground/90">
                        Secondary and informational content was grouped and moved lower in the 
                        layout to prevent users from feeling overwhelmed.
                        </p>

                        <p className="space-y-2 text-secondary-foreground/90">
                        Navigation and footer links were simplified to improve 
                        scanability and help users quickly understand where to go next. 
                        The structure was designed with a mobile-first approach to ensure 
                        key services remain accessible across different devices.
                        </p>

                    </div>
                </section>

                <section className="space-y-4 font-inter leading-relaxed pb-10">
                    <h2 className="text-2xl font-bold">Wireframe</h2>
                        <p className="text-secondary-foreground/90">
                        The homepage wireframe was designed to 
                        improve clarity and accessibility by simplifying navigation, 
                        prioritizing essential services, and maintaining consistent layout 
                        patterns across all sections.</p>
                        <div className="pt-6 pb-6 px-6">
                            <Image src="/wireframe1.png"
                                alt="Wireframe"
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-md"
                                />
                        </div>
                </section>

                <section className="space-y-4 font-inter leading-relaxed pb-10">
                    <h2 className="text-2xl font-bold">High Fidelity Design</h2>
                    <p className="text-secondary-foreground/90">The high-fidelity designs translate the validated wireframe 
                        structure into a polished and accessible interface. Visual decisions 
                        were guided by usability, readability, and accessibility, while maintaining 
                        a clean and trustworthy look appropriate for a government healthcare platform.</p>
                        <div className="pt-6 pb-6 px-6">
                            <Image src="/high-fidelity.png"
                                alt="Wireframe"
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-md"
                                />
                        </div>
                    <div className="space-y-10 px-6">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-medium">
                                {project.uiDecision.decision1.title}
                            </h2>
                            <p className="space-y-2 text-secondary-foreground/90">{project.uiDecision.decision1.desc}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-medium">
                                {project.uiDecision.decision2.title}
                            </h2>
                            <p className="space-y-2 text-secondary-foreground/90">{project.uiDecision.decision2.desc}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-medium">
                                {project.uiDecision.decision3.title}
                            </h2>
                            <p className="space-y-2 text-secondary-foreground/90">{project.uiDecision.decision3.desc}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-medium">
                                {project.uiDecision.decision4.title}
                            </h2>
                            <p className="space-y-2 text-secondary-foreground/90">{project.uiDecision.decision4.desc}</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4 font-inter leading-relaxed pb-10">
                    <h2 className="text-2xl font-bold">What i learned</h2>
                        <p className="space-y-2 text-secondary-foreground/90"> {project.learning.learning1}</p>
                        <p className="space-y-2 text-secondary-foreground/90"> {project.learning.learning2}</p>
                </section>
                <section className="space-y-4 font-inter leading-relaxed pb-10">
                    <h2 className="text-2xl font-bold">Challenges</h2>
                    <p className="space-y-2 text-secondary-foreground/90"> {project.challenges.challenge1}</p>
                    <p className="space-y-2 text-secondary-foreground/90"> {project.challenges.challenge2}</p>
                </section>
                <section className="space-y-4 font-inter leading-relaxed pb-10">
                    <h2 className="text-2xl font-bold">Future</h2>
                    <p className="space-y-2 text-secondary-foreground/90"> {project.future.future1}</p>
                    <p className="space-y-2 text-secondary-foreground/90"> {project.future.future2}</p>
                </section>
            </main>
        </>
    );
}