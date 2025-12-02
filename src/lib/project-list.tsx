import {IoLogoElectron, IoLogoFirebase} from "react-icons/io5";
import {IconType} from "react-icons";
import {FaReact} from "react-icons/fa6";
import {SiExpo, SiMysql, SiSupabase, SiTypescript} from "react-icons/si";
import {RiNextjsLine, RiSupabaseLine, RiTailwindCssFill} from "react-icons/ri";
import {AiOutlineOpenAI} from "react-icons/ai";
import {CgCPlusPlus} from "react-icons/cg";
import {DiMongodb, DiMysql, DiPostgresql} from "react-icons/di";
import {FaGithub, FaJava, FaPython} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io";
import {BiLogoPostgresql} from "react-icons/bi";
import {TbBrandMysql} from "react-icons/tb";
import React from "react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

type TechStackItem = {
    name: string;
    icon: IconType;
}

export const TechStackItems = {
    electron: {name: 'Electron', icon: IoLogoElectron},
    react: {name: 'React', icon: FaReact},
    supabase: {name: 'Supabase', icon: RiSupabaseLine},
    openAi: {name: 'OpenAI', icon: AiOutlineOpenAI},
    tailwind: {name: 'TailwindCSS', icon: RiTailwindCssFill},
    reactNative: {name: 'React Native', icon: FaReact},
    firebase: {name: 'Firebase', icon: IoLogoFirebase },
    expoDev: {name: 'Expo.dev ', icon: SiExpo},
    pgsql: {name: 'PostgreSQL', icon: BiLogoPostgresql },
    mysql: {name: 'MySQL', icon: TbBrandMysql },
    github: {name: 'GitHub', icon: FaGithub},
    mongodb: {name: 'MongoDB', icon: DiMongodb},
    python: {name: 'Python', icon: FaPython},
    java: {name: 'Java', icon: FaJava},
    js: {name: 'TypeScript', icon: SiTypescript  },
    cpp: {name: 'C++', icon: CgCPlusPlus},
} as const;

export class Project {
    title: string;
    description: string;
    link?: string;
    youtubeEmbedUrl?: string;
    color: string;
    stack: TechStackItem[];

    constructor(title: string, description: string, link?: string, youtubeEmbedUrl?: string, color: string = "#5c6d76", stack: TechStackItem[] = []) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.youtubeEmbedUrl = youtubeEmbedUrl;
        this.color = color;
        this.stack = stack;
    }
}

export const TechStackComponent = ({techStackItem}: {techStackItem: TechStackItem}) => {
    return (
        <Tooltip>
            <TooltipContent>
                {techStackItem.name}
            </TooltipContent>
            <TooltipTrigger>
                {
                    React.createElement(techStackItem.icon, {
                        className: 'h-10 w-10 md:h-14 md:w-14 text-white/80 hover:scale-105 transition-transform hover:cursor-pointer hover:drop-shadow-2xl',
                        title: techStackItem.name
                    })
                }
            </TooltipTrigger>
        </Tooltip>
    )
};


export const projects: Project[] = [
    new Project(
        "Aether",
        "A word processor that leverages AI to help you write better and faster. It offers features like grammar correction, style suggestions, and content" +
        " generation to enhance your writing experience. It is the only writing tool available that can reliably mimic your unique writing style and" +
        " preserve the author's original voice without compromise. I led the development of the product, web-application, and the back-end systems over a" +
        " team of 4 engineers. I built the entire product from the ground up using Electron, React, Supabase, and OpenAI's GPT-5 API. I built the voice" +
        " analysis and replication system using a combination of deep learning (OpenAI), natural language processing (Wink NLP), and statistical analysis" +
        " techniques. It parses user documents to learn their writing style and turn it into data that could be used to condition GPT-5's outputs. Coming to" +
        " the public December 2025.",
        "https://aethereditor.com",
        "chKfaSTEaZA",
        '#785905',
        [TechStackItems.electron, TechStackItems.react, TechStackItems.supabase, TechStackItems.openAi, TechStackItems.tailwind]
    ),
    new Project(
        "Trainafy",
        "Trainafy is a cross-platform mobile app that creates workouts for users based on their schedule and access to equipment. It uses a proprietary holistic algorithm that compiles the best exercises and training structure to match any given user’s access to equipment and their goals. It was built using React Native on the Expo.dev platform for ease of development and deployment speed. The backend was handled by Google Firebase, using the Firestore database to handle user equipment, programs, and training progress.",
        undefined,
        "IDr4gIriWvg",
        '#123b6c',
        [TechStackItems.reactNative, TechStackItems.expoDev, TechStackItems.firebase, TechStackItems.tailwind]
    ),
];
