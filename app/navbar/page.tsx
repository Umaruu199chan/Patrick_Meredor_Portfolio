import Link from "next/link";
import { ModeToggle } from './../../components/ui/shared/toggle';
import Logo from "@/components/ui/logo";

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between items-center p-3">
            <div>
                <Logo />
            </div>
                <div className="flex flex-row gap-2 items-center">
                    <Link href="/" className="border px-3 py-1 rounded-md">Works</Link>
                    <ModeToggle/>
                </div>
        </nav>
    )
}