import Header from '@/components/Admin/Header';
import DynamicForm from '@/components/Shared/DynamicForm';
import { Field } from '@/lib/schema';
import axios from 'axios';

const fieldConfig: Field[] = [
    {
        name: 'name',
        label: 'Medicine Name',
        type: 'text',
        required: true,
    },
    {
        name: 'brand',
        label: 'Brand',
        type: 'text',
    },
    {
        name: 'medicineGroup',
        label: 'Medicine Group',
        type: 'dropdown', // e.g., Antibiotic, Analgesic, etc.
    },
    {
        name: 'categoryId',
        label: 'Category',
        type: 'dropdown', // dynamic from backend categories
        required: true,
    },
    {
        name: 'price',
        label: 'Selling Price',
        type: 'number',
        required: true,
    },
    {
        name: 'cost',
        label: 'Cost Price',
        type: 'number',
    },
    {
        name: 'quantity',
        label: 'Quantity in Stock',
        type: 'number',
        required: true,
    },
    {
        name: 'expiryDate',
        label: 'Expiry Date',
        type: 'date',
    },
    {
        name: 'howToUse',
        label: 'How to Use',
        type: 'textarea',
        fullWidth: true,
    },
    {
        name: 'sideEffects',
        label: 'Side Effects',
        type: 'textarea',
        fullWidth: true,
    },
    {
        name: 'description',
        label: 'Description',
        type: 'textarea',
        fullWidth: true,
    },
];

const Create = () => {
    const handleSubmit = async (data: any) => {
        try {
            const response = await axios.post('/api/products', data, {
                headers: {
                    'Content-Type': 'application/json',
                    // Include this if you're using Sanctum or need CSRF:
                    // 'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
                },
                withCredentials: true, // Needed if you're using Sanctum + cookies
            });
        } catch (error: any) {
            if (error.response?.status === 422) {
                console.error('Validation errors:', error.response.data.errors);
            } else {
                console.error('API Error:', error);
            }
        }
    };

    return (
        <>
            <Header
                breadcrumbs={[
                    { label: 'Inventory', href: '/admin/inventory' },
                    { label: 'Medicines', href: '/admin/inventory/medicines' },
                    { label: 'Add New Medicine' },
                ]}
                subHeader="Manage your inventory stock and item details"
            />

            <div className="max-w-4xl">
                <DynamicForm fields={fieldConfig} onSubmit={handleSubmit} />
            </div>
        </>
    );
};

export default Create;
