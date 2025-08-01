import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb';

interface Crumb {
    label: string;
    href?: string; // Only last item (page) should not have href
}

interface Props {
    items: Crumb[];
}

const BreadcrumbSection = ({ items }: Props) => {
    const lastIndex = items.length - 1;

    return (
        <Breadcrumb className="text-[#1d242e53]">
            <BreadcrumbList>
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <BreadcrumbItem className="text-2xl font-bold">
                            {index === lastIndex ? (
                                <BreadcrumbPage className="font-bold text-[#1d242ed4]">{item.label}</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        {index !== lastIndex && <BreadcrumbSeparator className="text-[#1D242E]" />}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default BreadcrumbSection;
