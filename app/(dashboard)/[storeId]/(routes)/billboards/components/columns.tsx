"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Settings } from "lucide-react";
import { CellAction } from "./cell-actions";

export type BillboardColumn = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Label
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="pl-4">{row.original.label}</div>,
  },
  {
    accessorKey: "createdAt",
    header: "Datetime",
  },
  {
    id: "actions",
    header: () => <Settings className="w-4 h-4 mx-auto" />,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
