import Header from '@/components/Admin/Header';
import AdminLayout from '@/layouts/AdminLayout';

const Inventory = () => {
    return (
        <AdminLayout>
            <Header header={'Inventory'} subHeader="A quick data overview of the inventory" />
        </AdminLayout>
    );
};

export default Inventory;
