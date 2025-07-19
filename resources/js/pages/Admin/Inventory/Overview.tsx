import SummarySection from '@/components/Admin/Dashboard/SummarySection';
import Header from '@/components/Admin/Header';
import { useSummaryData } from '@/hooks/Admin/useSummaryData';

const Overview = () => {
    const { inventorySummary } = useSummaryData();

    return (
        <>
            <Header
                header={'Inventory'}
                subHeader="A quick data overview of the inventory"
                actionLabel="Add New Item"
                onActionClick={() => console.log('Clicked')}
            />
            <div className="flex flex-1 flex-col overflow-auto">
                <SummarySection summaryList={inventorySummary} />
            </div>
        </>
    );
};

export default Overview;
