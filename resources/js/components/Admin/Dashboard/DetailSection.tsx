import DetailCard from "@/components/Admin/Dashboard/DetailCard";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const detailCardList = [
  {
    label: "Inventory",
    sublabel: "Real-time Medicine Count",
    href: "/inventory",
    linkLabel: "Go to configuration",
    linkLabelIcon: <MdKeyboardDoubleArrowRight />,
    metrics: [
      { value: 298, label: "Total Medicines" },
      { value: 24, label: "Medicine Groups" },
    ],
  },
  {
    label: "Quick Report",
    sublabel: "This Month's Performance",
    href: "/reports",
    linkLabel: "View Reports",
    linkLabelIcon: <MdKeyboardDoubleArrowRight />,
    metrics: [
      { value: 450, label: "Invoices Generated" },
      { value: 1220, label: "Qty of Medicines Sold" },
    ],
  },
  {
    label: "My Pharmacy",
    sublabel: "Branch & Staff Overview",
    href: "/pharmacy",
    linkLabel: "Go to configuration",
    linkLabelIcon: <MdKeyboardDoubleArrowRight />,
    metrics: [
      { value: 12, label: "Total Suppliers" },
      { value: 8, label: "Registered Users" },
    ],
  },
  {
    label: "Customers",
    sublabel: "Engagement Summary",
    href: "/customers",
    linkLabel: "Go to Customer Page",
    linkLabelIcon: <MdKeyboardDoubleArrowRight />,
    metrics: [
      { value: 1200, label: "Total Customers" },
      { value: "Paracetamol", label: "Most Bought" },
    ],
  },
];

const DetailSection = () => {
  return (
    <div className="h-full bg-white mt-4">
      <div className="h-full grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
        {detailCardList.map((card, index) => (
          <DetailCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};


export default DetailSection;
