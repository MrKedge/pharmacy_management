import { Link } from '@inertiajs/react';

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
    borderColor = '#01A768', // default border color
    backgroundColor = '#01a76743', // default bg for bottom
}: Props) => {
    return (
        <div className="flex w-[212px] flex-col overflow-hidden rounded bg-white shadow" style={{ border: `1px solid ${borderColor}` }}>
            {/* Top section */}
            <div className="flex flex-grow flex-col items-center justify-center gap-2 bg-white p-2">
                <div className="text-4xl font-bold text-gray-800">{icon}</div>
                <div className="text-center">
                    <h2 className="font-poppins text-lg font-semibold text-gray-800">{label}</h2>
                    <p className="text-sm text-gray-600">{sublabel}</p>
                </div>
            </div>

            {/* Bottom link section */}
            <div className="border-t" style={{ borderColor: borderColor, backgroundColor: backgroundColor }}>
                <Link href="" className="flex w-full items-center justify-center gap-1 py-2 text-sm font-medium text-[#1D242E]">
                    <span>{linkLabel}</span>
                    <span>{linkLabelIcon}</span>
                </Link>
            </div>
        </div>
    );
};

export default SummaryCard;
