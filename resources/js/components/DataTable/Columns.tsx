import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export type Medicine = {
  medicineName: string;
  medicinceId: string;
  groupName: string;
  stockInQty: number;
};

export const columns: ColumnDef<Medicine>[] = [
  {
    accessorKey: "medicineName",   
     header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:cursor-pointer"
        >
          Medicine Name
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "medicinceId",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:cursor-pointer"
        >
          Medicine ID
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "groupName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:cursor-pointer"
        >
          Group Name
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "stockInQty",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="hover:cursor-pointer outline-none"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        
      >
        Stock in Qty
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const qty = parseFloat(row.getValue("stockInQty"));
      const formatted = new Intl.NumberFormat("en-US").format(qty);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const medicine = row.original;

      return (
       <Link className="flex items-center" href="">View Full Detail<span><MdKeyboardDoubleArrowRight size="1.2em"/></span></Link>
      );
    },
  },
];
