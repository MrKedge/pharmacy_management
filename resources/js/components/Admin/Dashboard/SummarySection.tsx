import SummaryCard from '@/components/Admin/Dashboard/SummaryCard';
import { SummaryDataItem } from '@/types/SummaryData';

interface Props{
  summaryList: Array<SummaryDataItem>;
}
const SummarySection = ({summaryList}: Props) => {
    
    return(
        <div className="flex gap-8 px-6">
              {summaryList.map((item, index) => (
                <SummaryCard key={index} {...item} />
              ))}
        </div>
 
    )
}

export default SummarySection;