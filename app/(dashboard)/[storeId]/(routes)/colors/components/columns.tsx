"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Settings } from "lucide-react";
import { CellAction } from "./cell-actions";
import toast from "react-hot-toast";

export type ColorColumn = {
  id: string;
  name: string;
  value: string;
  createdAt: string;
};

export const columns: ColumnDef<ColorColumn>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="pl-4">{row.original.name}</div>,
  },
  {
    accessorKey: "value",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Value
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center pl-4 gap-x-2">
        <div
          className="w-6 h-6 border rounded-full shadow-xl"
          style={{ backgroundColor: row.original.value }}
        />
        <p
          className="duration-300 cursor-pointer hover:underline active:scale-90"
          onClick={() => {
            navigator.clipboard.writeText(row.original.value);
            toast.success("Color Hex Code copied");
          }}
        >
          {row.original.value.toUpperCase()}
        </p>
      </div>
    ),
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
