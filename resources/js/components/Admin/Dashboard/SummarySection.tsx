import SummaryCard from '@/components/Admin/Dashboard/SummaryCard';
import { useSummaryData } from '@/hooks/Admin/useSummaryData';
const SummarySection = () => {
    const summaryList = useSummaryData();
    
    return(
        <div className="flex gap-8 px-6">
              {summaryList.map((item, index) => (
                <SummaryCard key={index} {...item} />
              ))}
        </div>
 
    )
}

export default SummarySection;