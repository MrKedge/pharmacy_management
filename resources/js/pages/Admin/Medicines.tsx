import Header from "@/components/Admin/Header"
import { columns } from "@/components/DataTable/Columns";
import { DataTable } from "@/components/DataTable/Data-Table"
import AdminLayout from "@/layouts/AdminLayout"

type Medicine = {
  medicineName: string;
  medicinceId: string;
  groupName: string;
  stockInQty: number;
  action?: string; // This can be replaced with JSX buttons later
};

export const medicines: Medicine[] = [
  {
    medicineName: "Paracetamol 500mg",
    medicinceId: "MED-001",
    groupName: "Pain Relief",
    stockInQty: 120,
    action: "Edit | Delete",
  },
  {
    medicineName: "Amoxicillin 250mg",
    medicinceId: "MED-002",
    groupName: "Antibiotics",
    stockInQty: 75,
    action: "Edit | Delete",
  },
  {
    medicineName: "Cetirizine 10mg",
    medicinceId: "MED-003",
    groupName: "Antihistamines",
    stockInQty: 200,
    action: "Edit | Delete",
  },
  {
    medicineName: "Metformin 500mg",
    medicinceId: "MED-004",
    groupName: "Diabetes Care",
    stockInQty: 50,
    action: "Edit | Delete",
  },
  {
    medicineName: "Metformin 500mg",
    medicinceId: "MED-004",
    groupName: "Diabetes Care",
    stockInQty: 50,
    action: "Edit | Delete",
  },
  {
    medicineName: "Metformin 500mg",
    medicinceId: "MED-004",
    groupName: "Diabetes Care",
    stockInQty: 50,
    action: "Edit | Delete",
  },
  {
    medicineName: "Metformin 500mg",
    medicinceId: "MED-004",
    groupName: "Diabetes Care",
    stockInQty: 50,
    action: "Edit | Delete",
  },
  {
    medicineName: "Metformin 500mg",
    medicinceId: "MED-004",
    groupName: "Diabetes Care",
    stockInQty: 50,
    action: "Edit | Delete",
  },
  {
    medicineName: "Metformin 500mg",
    medicinceId: "MED-004",
    groupName: "Diabetes Care",
    stockInQty: 50,
    action: "Edit | Delete",
  },
  {
    medicineName: "Metformin 500mg",
    medicinceId: "MED-004",
    groupName: "Diabetes Care",
    stockInQty: 50,
    action: "Edit | Delete",
  },
  {
    medicineName: "Metformin 500mg",
    medicinceId: "MED-004",
    groupName: "Diabetes Care",
    stockInQty: 50,
    action: "Edit | Delete",
  },
  {
    medicineName: "Metformin 500mg",
    medicinceId: "MED-004",
    groupName: "Diabetes Care",
    stockInQty: 50,
    action: "Edit | Delete",
  },
];



const Medicines = () => {
    return (
        <AdminLayout>
            <Header header={'Medicine List'} subHeader="Manage your medicines effectively" />
            <div className="flex flex-col flex-1 overflow-auto px-6">
              <DataTable columns={columns} data={medicines} />
            </div>
        </AdminLayout>
    )
}

export default Medicines