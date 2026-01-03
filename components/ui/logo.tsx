"use client";
import Image from "next/image";

interface LogoProps {
    onClick?: () => void;
}

export default function Logo({ onClick }: LogoProps) {    
    return (
        <div 
            onClick={onClick}
            className={onClick ? "cursor-pointer transition-opacity hover:opacity-80" : ""}
        >
            <Image src="/Logo.svg" alt="logo" width={50} height={50} className="dark:invert"/>
        </div>
    )
}