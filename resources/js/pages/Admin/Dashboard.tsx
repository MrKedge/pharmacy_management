import DetailSection from '@/components/Admin/Dashboard/DetailSection';
import SummarySection from '@/components/Admin/Dashboard/SummarySection';
import Header from '@/components/Admin/Header';

import { useSummaryData } from '@/hooks/Admin/useSummaryData';

const Dashboard = () => {
    const { dashboardSummary } = useSummaryData();

    return (
        <>
            <Header header={'Dashboard'} subHeader="A quick data overview of the inventory" />
            <div className="flex flex-1 flex-col overflow-auto">
                <SummarySection summaryList={dashboardSummary} />
                <DetailSection />
            </div>
        </>
    );
};
