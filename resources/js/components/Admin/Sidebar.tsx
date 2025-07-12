// import { Link } from "@inertiajs/react";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaBoxes, FaChartLine, FaCog } from "react-icons/fa";
import SidebarLink from "./SidebarLink";
 import { Link, usePage } from "@inertiajs/react";
const links = [
  { href: "/admin/dashboard", label: "Dashboard", icon: <MdOutlineSpaceDashboard size="1.6em" /> },
  { href: "/admin/inventory", label: "Inventory", icon: <FaBoxes size="1.6em" /> },
  { href: "/admin/reports", label: "Reports", icon: <FaChartLine size="1.6em" /> },
  { href: "/admin/configuration", label: "Configuration", icon: <FaCog size="1.6em" /> },
];
const Sidebar = () => {
  const { url } = usePage(); // ✅ Now it's valid and reactive

  return (
    <div className="h-screen w-64 text-white flex flex-col bg-[#283342]">
      {/* Brand/Header */}
      <div className="h-16 flex items-center justify-center font-bold bg-[#1D242E] border-b border-white/10">
        Pharmacy Management
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-4 p-4 border-b border-white/10">
        <div className="w-12 h-12 bg-white rounded" />
        <div className="flex-1">
          <h1 className="font-semibold">John Doe</h1>
          <p className="text-yellow-400 text-sm">Super Admin</p>
        </div>
        <Link href="/admin/profile">
          <HiDotsVertical size="1.5em" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4">
        <ul>
          {links.map((link) => (
            <SidebarLink
              key={link.href}
              {...link}
              isActive={url.startsWith(link.href)}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;