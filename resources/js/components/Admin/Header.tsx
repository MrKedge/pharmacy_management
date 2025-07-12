interface Props {
    header?: string;
    subHeader?: string;
}

const Header = ({ header, subHeader }: Props) => {
    return (
        <div className="mb-4 flex flex-col items-start justify-between">
            <h1 className="text-2xl font-bold text-gray-800">{header}</h1>
            {subHeader && <p className="text-gray-600">{subHeader}</p>}
        </div>
    );
};

export default Header;
