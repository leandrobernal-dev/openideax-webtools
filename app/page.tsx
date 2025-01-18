"use client";

import { useState } from "react";
import { CollapsibleCategory } from "@/components/collapsible-category";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    FileText,
    Clock,
    Shuffle,
    Code,
    Image,
    FileCode,
    Video,
    Palette,
    Key,
    Ruler,
    Network,
    FileIcon as FileInvoice,
    Smile,
    User,
    Type,
    Zap,
    Table,
    FileArchive,
    Briefcase,
    PenTool,
    Wrench,
    DollarSign,
    Gamepad2,
    GraduationCap,
    PlusCircle,
} from "lucide-react";

const categories = [
    {
        name: "Productivity",
        icon: Briefcase,
        apps: [
            {
                name: "Resume Generator",
                href: "/resume-generator",
                isReady: true,
                icon: FileText,
                description: "Create professional resumes quickly",
            },
            {
                name: "Time Zone Converter",
                href: "/time-zone-converter",
                isReady: false,
                icon: Clock,
                description: "Convert times across different time zones",
            },
            {
                name: "Random Decision Maker",
                href: "/decision-maker",
                isReady: false,
                icon: Shuffle,
                description: "Get help making random decisions",
            },
            {
                name: "HTML Previewer",
                href: "/html-previewer",
                isReady: false,
                icon: Code,
                description: "Preview HTML code in real-time",
            },
        ],
    },
    {
        name: "Content Creation",
        icon: PenTool,
        apps: [
            {
                name: "Image Compressor",
                href: "/image-compressor",
                isReady: false,
                icon: Image,
                description: "Compress images without losing quality",
            },
            {
                name: "Markdown to HTML Converter",
                href: "/markdown-to-html",
                isReady: false,
                icon: FileCode,
                description: "Convert Markdown to HTML easily",
            },
            {
                name: "Video-to-GIF Converter",
                href: "/video-to-gif",
                isReady: false,
                icon: Video,
                description: "Convert video clips to GIF format",
            },
        ],
    },
    {
        name: "Developer Tools",
        icon: Wrench,
        apps: [
            {
                name: "CSS Gradient Generator",
                href: "/css-gradient",
                isReady: false,
                icon: Palette,
                description: "Create beautiful CSS gradients",
            },
            {
                name: "Password Generator",
                href: "/password-generator",
                isReady: true,
                icon: Key,
                description: "Generate secure passwords",
            },
            {
                name: "Unit Converter for Developers",
                href: "/unit-converter",
                isReady: false,
                icon: Ruler,
                description: "Convert between different units",
            },
            {
                name: "API Tester",
                href: "/api-tester",
                isReady: false,
                icon: Network,
                description: "Test API endpoints easily",
            },
        ],
    },
    {
        name: "Financial Tools",
        icon: DollarSign,
        apps: [
            {
                name: "Invoice Generator",
                href: "/invoice-generator",
                isReady: false,
                icon: FileInvoice,
                description: "Create professional invoices",
            },
        ],
    },
    {
        name: "Fun and Entertainment",
        icon: Gamepad2,
        apps: [
            {
                name: "Meme Generator",
                href: "/meme-generator",
                isReady: false,
                icon: Smile,
                description: "Create funny memes easily",
            },
            {
                name: "Random Name Generator",
                href: "/name-generator",
                isReady: false,
                icon: User,
                description: "Generate random names for characters",
            },
            {
                name: "ASCII Art Generator",
                href: "/ascii-art",
                isReady: false,
                icon: Type,
                description: "Convert images to ASCII art",
            },
            {
                name: "Horoscope Generator",
                href: "/horoscope",
                isReady: false,
                icon: Zap,
                description: "Get your daily horoscope",
            },
        ],
    },
    {
        name: "Educational",
        icon: GraduationCap,
        apps: [
            {
                name: "Typing Speed Test",
                href: "/typing-test",
                isReady: false,
                icon: Type,
                description: "Test and improve your typing speed",
            },
            {
                name: "Periodic Table Explorer",
                href: "/periodic-table",
                isReady: false,
                icon: Table,
                description: "Explore the periodic table interactively",
            },
        ],
    },
    {
        name: "Utility",
        icon: PenTool,
        apps: [
            {
                name: "ZIP Extractor (Virus Checker)",
                href: "/zip-extractor",
                isReady: false,
                icon: FileArchive,
                description: "Extract and check ZIP files for viruses",
            },
        ],
    },
];

export default function Dashboard() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCategories = categories
        .map((category) => ({
            ...category,
            apps: category.apps.filter(
                (app) =>
                    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    app.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
            ),
        }))
        .filter((category) => category.apps.length > 0);

    return (
        <div className="space-y-8 bg-gradient min-h-screen p-8">
            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                <Input
                    type="search"
                    placeholder="Search for tools or features..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-md mx-auto border-2 border-primary/20 focus:border-primary transition-colors duration-200"
                />
            </div>
            {filteredCategories.map((category) => (
                <CollapsibleCategory key={category.name} {...category} />
            ))}
            <div className="fixed bottom-4 right-4">
                <Button
                    variant="default"
                    size="lg"
                    className="rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Suggest a Tool
                </Button>
            </div>
        </div>
    );
}
