import SummarySection from '@/components/Admin/Dashboard/SummarySection';
import Header from '@/components/Admin/Header';
import { useSummaryData } from '@/hooks/Admin/useSummaryData';
import AdminLayout from '@/layouts/AdminLayout';

const Inventory = () => {
    const { inventorySummary } = useSummaryData();

    return (
        <AdminLayout>
            <Header header={'Inventory'} subHeader="A quick data overview of the inventory" />
             <div className="flex flex-col flex-1 overflow-auto">
                <SummarySection summaryList={inventorySummary} />
               
            </div>
        </AdminLayout>
    );
};

export default Inventory;
