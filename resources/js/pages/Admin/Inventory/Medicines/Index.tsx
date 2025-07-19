import Header from '@/components/Admin/Header';
import { columns } from '@/components/DataTable/Columns';
import { DataTable } from '@/components/DataTable/Data-Table';

type Medicine = {
    medicineName: string;
    medicineId: string;
    groupName: string;
    stockInQty: number;
    action?: string; // This can be replaced with JSX buttons later
};

export const medicines: Medicine[] = [
    {
        medicineName: 'Paracetamol 500mg',
        medicineId: 'MED-001',
        groupName: 'Pain Relief',
        stockInQty: 120,
        action: 'Edit | Delete',
    },
    {
        medicineName: 'Amoxicillin 250mg',
        medicineId: 'MED-002',
        groupName: 'Antibiotics',
        stockInQty: 75,
        action: 'Edit | Delete',
    },
    {
        medicineName: 'Cetirizine 10mg',
        medicineId: 'MED-003',
        groupName: 'Antihistamines',
        stockInQty: 200,
        action: 'Edit | Delete',
    },
    {
        medicineName: 'Metformin 500mg',
        medicineId: 'MED-004',
        groupName: 'Diabetes Care',
        stockInQty: 50,
        action: 'Edit | Delete',
    },
    {
        medicineName: 'Ibuprofen 200mg',
        medicineId: 'MED-005',
        groupName: 'Pain Relief',
        stockInQty: 180,
        action: 'Edit | Delete',
    },
    {
        medicineName: 'Loratadine 10mg',
        medicineId: 'MED-006',
        groupName: 'Antihistamines',
        stockInQty: 90,
        action: 'Edit | Delete',
    },
    {
        medicineName: 'Azithromycin 500mg',
        medicineId: 'MED-007',
        groupName: 'Antibiotics',
        stockInQty: 60,
        action: 'Edit | Delete',
    },
    {
        medicineName: 'Aspirin 81mg',
        medicineId: 'MED-008',
        groupName: 'Pain Relief',
        stockInQty: 110,
        action: 'Edit | Delete',
    },
    {
        medicineName: 'Simvastatin 20mg',
        medicineId: 'MED-009',
        groupName: 'Cholesterol',
        stockInQty: 70,
        action: 'Edit | Delete',
    },
    {
        medicineName: 'Omeprazole 20mg',
        medicineId: 'MED-010',
        groupName: 'Digestive Health',
        stockInQty: 130,
        action: 'Edit | Delete',
    },
    {
        medicineName: 'Amlodipine 5mg',
        medicineId: 'MED-011',
        groupName: 'Blood Pressure',
        stockInQty: 95,
        action: 'Edit | Delete',
    },
    {
        medicineName: 'Atorvastatin 10mg',
        medicineId: 'MED-012',
        groupName: 'Cholesterol',
        stockInQty: 85,
        action: 'Edit | Delete',
    },
];

const Index = () => {
    return (
        <>
            <Header
                header={'Medicine List'}
                subHeader="Manage your medicines effectively"
                actionLabel="Add New Item"
                onActionClick={() => console.log('Clicked')}
            />
            <div className="flex flex-1 flex-col overflow-auto px-6">
                <DataTable columns={columns} data={medicines} />
            </div>
        </>
    );
};

export default Index;
