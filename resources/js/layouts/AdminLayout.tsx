import Sidebar from '@/components/Admin/Sidebar';
import Topbar from '@/components/Admin/Topbar';
import React, { FC, ReactNode } from 'react'

interface Props{
    children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen bg-[#EDF1F5]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden text-black" >
        <Topbar />
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;