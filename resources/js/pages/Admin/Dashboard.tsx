import AdminLayout from '@/layouts/AdminLayout';
import React from 'react'

const Dashboard = () => {
  return (
    <>
        <AdminLayout>
             <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
             <p>Welcome to the admin dashboard!</p>
        </AdminLayout>
    </>
  );
}


export default Dashboard;