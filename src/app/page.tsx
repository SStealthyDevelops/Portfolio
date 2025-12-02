"use client"

import { Inria_Serif } from "next/font/google";
import ProjectSection from "@/components/ProjectSection";
import {projects} from "@/lib/project-list";
import {ArrowDown} from "lucide-react";
import AboutMeSection from "@/components/AboutMeSection";
import BackToTop from "@/components/BackToTop";

const inria = Inria_Serif({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function Home() {
    return (
        <main className={`${inria.className} h-screen bg-[#111111] text-white overflow-y-scroll snap-y snap-mandatory scroll-smooth`}>
            <BackToTop />
            <section className="snap-start relative h-screen bg-[#131313] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl md:text-8xl tracking-[0.35em] uppercase">
                        SATVIK MATHUR
                    </h1>
                    <p className="mt-4 text-sm md:text-3xl tracking-[0.25em] lowercase">
                        software engineer
                    </p>
                </div>

                <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                    <div className="flex flex-col items-center">
                        <div className="w-px h-20 bg-white/70" />

                        <svg
                            className="w-6 h-6 text-white/80 -mt-1 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </section>
            <AboutMeSection />
            {projects.map(project => (
                <ProjectSection
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    youtubeEmbedUrl={project.youtubeEmbedUrl || ""}
                    color={project.color}
                    stack={project.stack}
                />
            ))}
        </main>
    );
}
