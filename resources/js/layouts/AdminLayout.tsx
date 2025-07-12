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
            <div className="flex-1 overflow-auto flex flex-col text-black">
                <Topbar />
                <main className="flex-1 overflow-auto">{children}</main>
            </div>
        </div>
    );
};

export default AdminLayout;
