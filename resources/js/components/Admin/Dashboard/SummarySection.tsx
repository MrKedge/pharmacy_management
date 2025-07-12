import { BiDollar, BiShieldPlus, BiSolidError } from 'react-icons/bi';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { TbBoxOff } from "react-icons/tb";
import { LuBriefcaseMedical } from "react-icons/lu";
import SummaryCard from '@/components/Admin/Dashboard/SummaryCard';
const SummarySection = () => {

     const summaryList = [

    {
      icon: <BiShieldPlus className="text-[#01A768]" />,
      label: "Good",
      sublabel: "Inventory Status",
      linkLabel: "View Detailed Report",
      linkLabelIcon: <MdKeyboardDoubleArrowRight size="1.5em" />,
      borderColor: "#01A768",
      backgroundColor: "#01a76743",
    },
    {
      icon: <BiDollar className="text-[#FED600]" />,
      label: "₱120,000",
      sublabel: "Revenue This Month",
      linkLabel: "View Detailed Report",
      linkLabelIcon: <MdKeyboardDoubleArrowRight size="1.5em" />,
      borderColor: "#FED600",
      backgroundColor: "#fed60043",
    },
    {
      icon: <LuBriefcaseMedical  className="text-[#3B82F6]" />,
      label: "145",
      sublabel: "Medicines Available",
      linkLabel: "View Inventory",
      linkLabelIcon: <MdKeyboardDoubleArrowRight size="1.5em" />,
      borderColor: "#3B82F6",
      backgroundColor: "#3b82f643",
    },   
    {
      icon: <BiSolidError className="text-[#EF4444]" />,
      label: "5",
      sublabel: "Out of Stock",
      linkLabel: "Resolve Shortage",
      linkLabelIcon: <MdKeyboardDoubleArrowRight size="1.5em" />,
      borderColor: "#EF4444",
      backgroundColor: "#ef444443",
    },
  ];
    return(
        <div className="flex gap-4 p-6">
              {summaryList.map((item, index) => (
                <SummaryCard key={index} {...item} />
              ))}
            </div>
 
    )
}

export default SummarySection;