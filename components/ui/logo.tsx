import Image from "next/image";
export default function Logo() {    
    return (
        <div>
            <Image src="/Logo.svg" alt="logo" width={50} height={50} className="dark:invert"/>
        </div>
    )
}