import { Link } from "@inertiajs/react";

interface Props{
    href: string;
    icon: React.ReactNode;
    label: string;
    isActive?: boolean;
}

const SidebarLink = ({ href, icon, label, isActive = false }: Props) => {
    return(
         <li
            className={`h-12 flex items-center px-4 ${
                isActive ? "bg-[#009099]" : "hover:bg-[#1D242E]"
            }`}
            >
            <Link href={href} className="flex items-center text-white w-full h-full">
                <span className="mr-2">{icon}</span>
                <span>{label}</span>
            </Link>
        </li>
    )

}

export default SidebarLink;