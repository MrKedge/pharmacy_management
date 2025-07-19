import { ReactNode } from 'react';
import { MdAdd } from 'react-icons/md';
import { Button } from '../ui/button';
import BreadcrumbSection from './BreadcrumbSection';

interface Crumb {
    label: string;
    href?: string;
}

interface Props {
    breadcrumbs?: Crumb[];
    header?: string;
    subHeader?: string;
    actionLabel?: string;
    onActionClick?: () => void;
    actionIcon?: ReactNode;
}

const Header = ({ breadcrumbs = [], header, subHeader, actionLabel, onActionClick, actionIcon = <MdAdd /> }: Props) => {
    const hasAction = actionLabel && onActionClick;
    const showBreadcrumbs = breadcrumbs.length > 0;

    return (
        <div className="space-y-2 bg-white px-6 py-4">
            {showBreadcrumbs && <BreadcrumbSection items={breadcrumbs} />}

            {(header || subHeader || hasAction) && (
                <div className={`flex ${hasAction ? 'flex-wrap items-center justify-between' : 'flex-col items-start'} gap-4`}>
                    <div>
                        {!showBreadcrumbs && header && <h1 className="text-2xl font-bold text-gray-800">{header}</h1>}
                        {subHeader && <p className="text-gray-600">{subHeader}</p>}
                    </div>

                    {hasAction && (
                        <Button variant="default" className="h-11 px-4" onClick={onActionClick}>
                            {actionIcon && <span className="mr-2">{actionIcon}</span>}
                            {actionLabel}
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Header;
