// hooks/useSummaryData.ts
import React from 'react';
import { BiShieldPlus } from 'react-icons/bi';
import { MdKeyboardDoubleArrowRight, MdOutlineWarningAmber } from 'react-icons/md';
import { LuBriefcaseMedical } from 'react-icons/lu';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

type SummaryDataItem = {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  linkLabel: string;
  linkLabelIcon: React.ReactNode;
  borderColor: string;
  backgroundColor: string;
};

export const useSummaryData = (): SummaryDataItem[] => {
  return [
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
      icon: <FaRegMoneyBillAlt className="text-[#FED600]" />,
      label: "₱120,000",
      sublabel: "Revenue This Month",
      linkLabel: "View Detailed Report",
      linkLabelIcon: <MdKeyboardDoubleArrowRight size="1.5em" />,
      borderColor: "#FED600",
      backgroundColor: "#fed60043",
    },
    {
      icon: <LuBriefcaseMedical className="text-[#3B82F6]" />,
      label: "145",
      sublabel: "Medicines Available",
      linkLabel: "View Inventory",
      linkLabelIcon: <MdKeyboardDoubleArrowRight size="1.5em" />,
      borderColor: "#3B82F6",
      backgroundColor: "#3b82f643",
    },
    {
      icon: <MdOutlineWarningAmber className="text-[#EF4444]" />,
      label: "5",
      sublabel: "Medicine Shortage",
      linkLabel: "Resolve Shortage",
      linkLabelIcon: <MdKeyboardDoubleArrowRight size="1.5em" />,
      borderColor: "#EF4444",
      backgroundColor: "#ef444443",
    },
  ];
};
