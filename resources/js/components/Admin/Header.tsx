import { ReactNode } from 'react';
import { MdAdd } from 'react-icons/md';
import { Button } from '../ui/button';

interface Props {
    header?: string;
    subHeader?: string;
    actionLabel?: string; // Label for the button
    onActionClick?: () => void; // Optional onClick
    actionIcon?: ReactNode; // Optional icon
}
const Header = ({ header, subHeader, actionLabel, onActionClick, actionIcon = <MdAdd /> }: Props) => {
    const hasAction = actionLabel && onActionClick;
    const headerBlock = (
        <div>
            <h1 className="text-2xl font-bold text-gray-800">{header}</h1>
            {subHeader && <p className="text-gray-600">{subHeader}</p>}
        </div>
    );

    return hasAction ? (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 px-6 py-4">
            {headerBlock}
            <Button variant="default" className="h-11 px-4" onClick={onActionClick}>
                {actionIcon && <span>{actionIcon}</span>}
                {actionLabel}
            </Button>
        </div>
    ) : (
        <div className="mb-4 flex flex-col items-start px-6 py-4">{headerBlock}</div>
    );
};

export default Header;
