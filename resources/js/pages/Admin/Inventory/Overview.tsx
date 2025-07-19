import SummarySection from '@/components/Admin/Dashboard/SummarySection';
import Header from '@/components/Admin/Header';
import { useSummaryData } from '@/hooks/Admin/useSummaryData';
import { router } from '@inertiajs/react';
const Overview = () => {
    const { inventorySummary } = useSummaryData();

    const onClick = () => {
        router.visit('/admin/inventory/medicines/create');
    };

    return (
        <>
            <Header
                header={'Inventory'}
                subHeader="A quick data overview of the inventory"
                actionLabel="Add New Item"
                onActionClick={() => onClick()}
            />
            <div className="flex flex-1 flex-col overflow-auto">
                <SummarySection summaryList={inventorySummary} />
            </div>
        </>
    );
};

export default Overview;
