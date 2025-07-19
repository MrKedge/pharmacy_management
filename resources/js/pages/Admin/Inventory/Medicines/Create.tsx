import Header from '@/components/Admin/Header';

const Create = () => {
    return (
        <>
            <Header
                breadcrumbs={[
                    { label: 'Inventory', href: '/admin/inventory' },
                    { label: 'Medicines', href: '/admin/inventory/medicines' },
                    { label: 'TEst Medicine' },
                ]}
                subHeader="Manage your inventory stock and item details"
            />
        </>
    );
};

export default Create;
