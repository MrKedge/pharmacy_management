import Header from '@/components/Admin/Header';
import AdminLayout from '@/layouts/AdminLayout';
import SummarySection from '@/components/Admin/Dashboard/SummarySection';
import DetailCard from '@/components/Admin/Dashboard/DetailCard';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import DetailSection from '@/components/Admin/Dashboard/DetailSection';

const Dashboard = () => {
   
    return (
        <AdminLayout>
            <Header header={'Dashboard'} subHeader="A quick data overview of the inventory" />
             <div className="flex flex-col flex-1 overflow-auto">
                <SummarySection />
                <DetailSection />
            </div>
        
        </AdminLayout>
    );
};

export default Dashboard;
