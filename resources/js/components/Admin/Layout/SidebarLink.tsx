import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
interface Props {
    label: string;
    icon: React.ReactNode;
    href?: string;
    isActive?: boolean;
    children?: React.ReactNode;
    className?: string; // for subitems
}

const SidebarLink = ({ label, icon, href, isActive, children, className }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = !!children;

    const toggleDropdown = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(prev => !prev);
    };
    useEffect(() => {
        if(href && window.location.pathname.startsWith(href)) {
            setIsOpen(true);
        }
    }, []);
    return (
        <li className={className}>
            <div className={`flex h-12 items-center justify-between px-4 ${isActive ? 'bg-[#009099]' : 'hover:bg-[#343C48]'}`}>
                <Link href={href ?? '#'} className="flex h-full w-full items-center text-white">
                    <span className="mr-2">{icon}</span>
                    <span>{label}</span>
                </Link>

                {hasChildren && (
                    <button onClick={toggleDropdown} className="ml-2 text-white focus:outline-none hover:cursor-pointer">
                        <svg
                            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}
            </div>

            {hasChildren && isOpen && <ul className="bg-[#1D242E] text-sm text-white">{children}</ul>}
        </li>
    );
};

export default SidebarLink;