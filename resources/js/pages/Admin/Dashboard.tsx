import Header from '@/components/Admin/Header';
import AdminLayout from '@/layouts/AdminLayout';
import SummarySection from '@/components/Admin/Dashboard/SummarySection';
import DetailSection from '@/components/Admin/Dashboard/DetailSection';

import { useSummaryData } from '@/hooks/Admin/useSummaryData';

const Dashboard = () => {
   const {dashboardSummary} = useSummaryData();

    return (
        <AdminLayout>
            <Header header={'Dashboard'} subHeader="A quick data overview of the inventory" />
             <div className="flex flex-col flex-1 overflow-auto">
                <SummarySection summaryList={dashboardSummary} />
                <DetailSection />
            </div>
        
        </AdminLayout>
    );
};

export default Dashboard;
