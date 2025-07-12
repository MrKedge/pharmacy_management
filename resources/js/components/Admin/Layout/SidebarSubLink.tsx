import { Link } from '@inertiajs/react';

interface SubLinkProps {
    href: string;
    label: string;
    isActive?: boolean;
}

const SidebarSubLink = ({ href, label, isActive }: SubLinkProps) => (
    <li className={`px-8 py-2 hover:bg-[#343C48] ${isActive ? 'bg-[#009099]' : ''} h-12`}>
        <Link href={href} className="flex h-full w-full items-center px-4 text-white">
            {label}
        </Link>
    </li>
);

export default SidebarSubLink;
