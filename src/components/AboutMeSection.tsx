import {LinkIcon} from "lucide-react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import React from "react";
import {TechStackComponent, TechStackItems} from "@/lib/project-list";

const AboutMeSection = () => {
    return (
        <section
            data-snap
            className="h-screen bg-emerald-900 text-white px-8 md:px-24 lg:px-40 pt-16 pb-24 relative flex flex-col snap-start"
        >
            {/* Main content */}
            <div className="flex-1 grid gap-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                {/* Left column */}
                <div className="space-y-12">
                    {/* About Me */}
                    <div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl md:text-4xl tracking-[0.20em] uppercase">
                                About Me
                            </h2>
                            <div className="h-px w-48 bg-white/70" />
                        </div>

                        <p className="mt-6 text-lg leading-relaxed text-white/90 max-w-2xl">
                            I’m a software engineer and builder with a deep interest in creating tools, systems, and experiences that blend engineering precision with real-world usability. My work spans full-stack development, desktop application architecture, and applied mechanical engineering—reflecting a mindset rooted in both creativity and technical rigor.

                            I’ve led and contributed to projects across several domains: developing full-scale Flutter applications for real-world medical workflows, architecting a high-performance Electron + React document editor with local/remote sync and integrated AI tooling, and building production-ready systems using TypeScript, Supabase, and custom offline database logic. I enjoy solving complex, multi-layered challenges—whether debugging distributed state, designing TipTap extensions, or building pipelines for large context models.
                        </p>
                    </div>

                    {/* Technical Skills */}
                    <div>
                        <h3 className="text-lg md:text-2xl mb-4">Technical Skills</h3>
                        <p className="text-lg leading-relaxed text-white/90 max-w-2xl">
                            I bring a strong software engineering background with experience across full-stack development, backend systems, and modern frontend architectures. My core skillset includes TypeScript, React, Next.js, Electron, Tailwind, Vite, and Supabase, complemented by backend development in Java, SQLite, and REST-based services. I’ve built production-ready applications featuring real-time sync, robust state management, custom editor extensions, and integrated AI workflows using local LLMs. I’m comfortable designing scalable systems, troubleshooting complex interactions, and delivering polished, user-focused features from backend logic through frontend experience.
                        </p>
                    </div>
                </div>

                {/* Right column – Skills grid */}
                <div className="mt-4 lg:mt-10">
                   <div className='mb-10'>
                       <p className="md:text-2xl mb-10">Programming Languages</p>
                       <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                           {
                               [TechStackItems.java, TechStackItems.python, TechStackItems.cpp, TechStackItems.js].map(stackItem => (
                                    <TechStackComponent techStackItem={stackItem} key={stackItem.name} />
                               ))
                           }
                       </div>
                   </div>
                   <div>
                       <p className="md:text-2xl mb-10">Technical Skills</p>
                       <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                           {
                               [TechStackItems.electron, TechStackItems.react, TechStackItems.supabase, TechStackItems.openAi, TechStackItems.tailwind, TechStackItems.reactNative, TechStackItems.expoDev, TechStackItems.firebase,
                                   TechStackItems.mysql, TechStackItems.pgsql, TechStackItems.mongodb, TechStackItems.github ].map(stackItem => (
                                   <TechStackComponent techStackItem={stackItem} key={stackItem.name} />
                               ))
                           }
                       </div>
                   </div>
                </div>
            </div>

            {/* Bottom "Projects" label + arrow */}
            <div className="absolute inset-x-0 bottom-10 flex flex-col items-center">
                <p className="text-base md:text-2xl tracking-[0.25em] uppercase">
                    Projects
                </p>
                <span className="mt-2 text-xl md:text-2xl">↓</span>
            </div>
        </section>
    );
}

export default AboutMeSection;