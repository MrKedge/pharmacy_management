import Sidebar from '@/components/Admin/Layout/Sidebar';
import Topbar from '@/components/Admin/Topbar';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
    return (
        <div className="flex h-screen overflow-hidden bg-[#EDF1F5]">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden bg-white">
                <Topbar />
                <main className="flex-1 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
};

export default AdminLayout;
