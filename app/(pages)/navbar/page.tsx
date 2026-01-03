"use client";
import { ModeToggle } from '@/components/ui/shared/toggle';
import Logo from "@/components/ui/logo";

export default function Navbar() {
    const handleWorksClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            const offset = 80; // Offset for fixed navbar
            const elementPosition = projectsSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleLogoClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <nav className="flex flex-row justify-between items-center px-6 py-2 border-b fixed w-full top-0 z-50 backdrop-blur-sm">
            <div>
                    <Logo onClick={handleLogoClick} />
            </div>
                <div className="flex flex-row gap-2 items-center">
                    <a 
                        href="#projects"
                        onClick={handleWorksClick}
                        className="border px-3 py-1 text-md rounded-md duration-300 transform-border ease-out
                        hover:border-green-300 hover:bg-green-700 hover:text-white font-inter">
                        Works
                    </a>
                    <ModeToggle/>
                </div>
        </nav>
    )
}