// import { Link } from "@inertiajs/react";
import SidebarLink from '@/components/Admin/Layout/SidebarLink';
import SidebarSubLink from '@/components/Admin/Layout/SidebarSubLink';
import { Link, usePage } from '@inertiajs/react';
import { FaAddressBook, FaBell, FaBoxes, FaChartLine, FaCog, FaCogs, FaComments } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

const links = [
    {
        href: '/admin/dashboard',
        label: 'Dashboard',
        icon: <MdOutlineSpaceDashboard size="1.6em" />,
    },
    {
        label: 'Inventory',
        icon: <FaBoxes size="1.6em" />,
        href: '/admin/inventory',
        children: [
            { href: '/admin/inventory/medicines', label: 'List of Medicines' },
            { href: '/admin/inventory/groups', label: 'Medicine Groups' },
        ],
    },
    {
        label: 'Reports',
        icon: <FaChartLine size="1.6em" />,
        children: [
            { href: '/admin/reports/sales', label: 'Sales Report' },
            { href: '/admin/reports/stock', label: 'Payments Report' },
        ],
    },
    {
        href: '/admin/configuration',
        label: 'Configuration',
        icon: <FaCog size="1.6em" />,
        className: 'border-b border-white/10 pb-2',
    },
    {
        href: '/admin/contact-management',
        label: 'Contact Management',
        icon: <FaAddressBook size="1.6em" />,
        className: 'pt-2',
    },
    {
        href: '/admin/notifications',
        label: 'Notifications',
        icon: <FaBell size="1.6em" />,
        className: '',
    },
    {
        href: '/admin/ChatWithVisitors',
        label: 'Chat with Visitors',
        icon: <FaComments size="1.6em" />,
        className: 'border-b border-white/10 pb-2',
    },
    {
        href: '/admin/AppSettings',
        label: 'App Settings',
        icon: <FaCogs size="1.6em" />,
        className: 'pt-2',
    },
];

const Sidebar = () => {
    const { url } = usePage();

    return (
        <div className="flex h-screen w-64 flex-col overflow-hidden bg-[#283342] text-white">
            {/* Brand/Header */}
            <div className="flex h-16 items-center justify-center border-b border-white/10 bg-[#1D242E] font-bold">Pharmacy Management</div>

            {/* Profile Section */}
            <div className="flex items-center gap-4 border-b border-white/10 p-4">
                <div className="h-12 w-12 rounded bg-white" />
                <div className="flex-1">
                    <h1 className="font-semibold">John Doe</h1>
                    <p className="text-sm text-yellow-400">Super Admin</p>
                </div>
                <Link href="/admin/profile">
                    <HiDotsVertical size="1.5em" />
                </Link>
            </div>

            {/* Navigation */}
            <nav className="mt-4 flex-1">
                <ul>
                    {links.map((link) => {
                        if (link.children) {
                            return (
                                <SidebarLink href={link.href} key={link.label} label={link.label} icon={link.icon}>
                                    {link.children.map((sub) => (
                                        <SidebarSubLink key={sub.href} href={sub.href} label={sub.label} isActive={url.startsWith(sub.href)} />
                                    ))}
                                </SidebarLink>
                            );
                        }

                        return (
                            <SidebarLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                                icon={link.icon}
                                className={link.className}
                                isActive={url.startsWith(link.href)}
                            />
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};
export default Sidebar;
