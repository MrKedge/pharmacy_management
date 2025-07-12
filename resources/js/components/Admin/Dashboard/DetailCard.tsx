import { Link } from "@inertiajs/react";

interface Metric {
  value: number | string;
  label: string;
}

interface Props {
  label: string;
  sublabel: string;
  href: string;
  linkLabel: string;
  linkLabelIcon: React.ReactNode;
  metrics: Metric[];
}

const DetailCard = ({
  label,
  href,
  linkLabel,
  linkLabelIcon,
  metrics,
}: Props) => {
  return (
    <div className="bg-white border border-[#1d242e4D]  rounded-lg">
      <div className="flex justify-between items-start mb-2 p-4">
        <div>
          <h2 className="text-xl font-semibold">{label}</h2>         
        </div>
        <Link href={href} className="text-blue-600 text-sm flex items-center gap-1">
          {linkLabel} <span>{linkLabelIcon}</span>
        </Link>
      </div>
      <div className="border-t border-[#1d242e4D] flex justify-between items-center pt-4 p-4">
        {metrics.map((metric, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold">{metric.value}</h3>
            <p className="text-sm text-gray-600">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailCard;
