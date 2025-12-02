"use client"

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import {LinkIcon} from "lucide-react";
import {Project, TechStackComponent} from "@/lib/project-list";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import React from "react";
import {Tooltip} from "next/dist/next-devtools/dev-overlay/components/tooltip/tooltip";


const ProjectSection = ({title, description, link, youtubeEmbedUrl, color, stack}: Project) => {
    return (
        <section id={`${title.toLowerCase()}`} className="snap-start px-8 h-screen md:px-40 py-44 relative" style={{backgroundColor: color}}>
            <div className="flex items-center gap-4">
                {link ?
                    <a href={link} target='_blank' className='flex flex-row items-center gap-4 hover:cursor-pointer group'>
                        <h1 className="text-base md:text-5xl tracking-[0.18em] uppercase group-hover:scale-[1.02] transition-transform">
                            {title}
                        </h1>
                        <LinkIcon className='group-hover:scale-[1.1] transition-transform' />
                    </a> :
                    <h1 className="text-base md:text-5xl tracking-[0.18em] uppercase">
                        {title}
                    </h1>
                }
                <div className="h-px flex-1 bg-white/40" />
            </div>

            <div className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] ">
                <div className="bg-[#e5e7eb] text-gray-800 flex items-center justify-center aspect-[16/9]">
                    <LiteYouTubeEmbed style={{
                        width: '100%',
                        height: '100%',
                    }} id={youtubeEmbedUrl || ''} title='Demo' />
                </div>

                <div className="flex flex-col justify-between">
                    <p className="text-sm mx-14 md:text-2xl leading-relaxed text-white/90">
                        {description}
                    </p>
                </div>
                <div className="absolute bottom-24">
                    <p className="text-2xl tracking-[0.25em] uppercase">
                        Tech Stack:
                    </p>
                    <div className="mt-3 flex gap-10 border p-4 drop-shadow-2xl">
                        {stack.length > 0 && stack.map(stackItem => (
                            <TechStackComponent techStackItem={stackItem} key={stackItem.name} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;