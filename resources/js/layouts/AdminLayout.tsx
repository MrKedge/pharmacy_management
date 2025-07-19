import Sidebar from '@/components/Admin/Layout/Sidebar';
import Topbar from '@/components/Admin/Topbar';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
    return (
        <div className="flex min-h-screen bg-[#EDF1F5]">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-auto text-black">
                <Topbar />
                <main className="overflow-none flex-1 p-2">{children}</main>
            </div>
        </div>
    );
};

export default AdminLayout;
