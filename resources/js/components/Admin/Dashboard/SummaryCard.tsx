import { Link } from "@inertiajs/react";

interface Props {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  linkLabel: string;
  linkLabelIcon: React.ReactNode;
  borderColor?: string; // optional
  backgroundColor?: string; // optional
}

const SummaryCard = ({
  icon,
  label,
  sublabel,
  linkLabel,
  linkLabelIcon,
  borderColor = "#01A768", // default border color
  backgroundColor = "#01a76743", // default bg for bottom
}: Props) => {
  return (
    <div
      className="bg-white w-[212px] rounded shadow flex flex-col overflow-hidden"
      style={{ border: `1px solid ${borderColor}` }}
    >
      {/* Top section */}
      <div className="flex flex-col items-center justify-center gap-2 p-2 py-4 bg-white flex-grow">
        <div className="text-4xl text-gray-800 font-bold">{icon}</div>
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-800 font-poppins">{label}</h2>
          <p className="text-gray-600 text-sm">{sublabel}</p>
        </div>
      </div>

      {/* Bottom link section */}
      <div
        className="border-t"
        style={{ borderColor: borderColor, backgroundColor: backgroundColor }}
      >
        <Link
          href=""
          className="py-2 flex justify-center items-center w-full text-sm text-[#1D242E] font-medium gap-1"
        >
          <span>{linkLabel}</span>
          <span>{linkLabelIcon}</span>
        </Link>
      </div>
    </div>
  );
};

export default SummaryCard;
