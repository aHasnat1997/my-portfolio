"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DashboardTable } from "../components/DashboardTable";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown, } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function BlogPage() {
  type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
  };

  const columns: ColumnDef<Payment>[] | any = [
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "email",
      header: ({ column }: { column: any }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }: { row: any }) => {
        const amount = parseFloat(row.getValue("amount"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)

        return <div className="text-right font-medium">{formatted}</div>
      },
    },
    {
      id: "actions",
      cell: ({ row }: { row: any }) => {
        const payment = row.original

        return (
          <div className="flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0 text-right">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      },
    },
  ];


  const data = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "my@example.com",
    },
    {
      id: "728ed52k",
      amount: 140,
      status: "processing",
      email: "me@example.com",
    },
    {
      id: "728ed52v",
      amount: 50,
      status: "pending",
      email: "cy@example.com",
    },
    {
      id: "728ed53a",
      amount: 200,
      status: "completed",
      email: "user1@example.com",
    },
    {
      id: "728ed53b",
      amount: 75,
      status: "processing",
      email: "user2@example.com",
    },
    {
      id: "728ed53c",
      amount: 300,
      status: "pending",
      email: "user3@example.com",
    },
    {
      id: "728ed53d",
      amount: 120,
      status: "completed",
      email: "user4@example.com",
    },
    {
      id: "728ed53e",
      amount: 95,
      status: "processing",
      email: "user5@example.com",
    },
    {
      id: "728ed53f",
      amount: 45,
      status: "pending",
      email: "user6@example.com",
    },
    {
      id: "728ed53g",
      amount: 110,
      status: "completed",
      email: "user7@example.com",
    },
    {
      id: "728ed53h",
      amount: 85,
      status: "processing",
      email: "user8@example.com",
    },
    {
      id: "728ed53i",
      amount: 260,
      status: "pending",
      email: "user9@example.com",
    },
    {
      id: "728ed53j",
      amount: 180,
      status: "completed",
      email: "user10@example.com",
    },
    {
      id: "728ed53k",
      amount: 130,
      status: "processing",
      email: "user11@example.com",
    },
    {
      id: "728ed53l",
      amount: 70,
      status: "pending",
      email: "user12@example.com",
    },
    {
      id: "728ed53m",
      amount: 220,
      status: "completed",
      email: "user13@example.com",
    },
    {
      id: "728ed53n",
      amount: 90,
      status: "processing",
      email: "user14@example.com",
    },
    {
      id: "728ed53o",
      amount: 150,
      status: "pending",
      email: "user15@example.com",
    },
    {
      id: "728ed53p",
      amount: 250,
      status: "completed",
      email: "user16@example.com",
    },
    {
      id: "728ed53q",
      amount: 80,
      status: "processing",
      email: "user17@example.com",
    },
    {
      id: "728ed53r",
      amount: 160,
      status: "pending",
      email: "user18@example.com",
    },
    {
      id: "728ed53s",
      amount: 190,
      status: "completed",
      email: "user19@example.com",
    },
    {
      id: "728ed53t",
      amount: 55,
      status: "processing",
      email: "user20@example.com",
    },
    {
      id: "728ed53u",
      amount: 230,
      status: "pending",
      email: "user21@example.com",
    },
    {
      id: "728ed53v",
      amount: 100,
      status: "completed",
      email: "user22@example.com",
    },
    {
      id: "728ed53w",
      amount: 140,
      status: "processing",
      email: "user23@example.com",
    },
    {
      id: "728ed53x",
      amount: 50,
      status: "pending",
      email: "user24@example.com",
    },
    {
      id: "728ed53y",
      amount: 200,
      status: "completed",
      email: "user25@example.com",
    },
    {
      id: "728ed53z",
      amount: 75,
      status: "processing",
      email: "user26@example.com",
    },
    {
      id: "728ed54a",
      amount: 300,
      status: "pending",
      email: "user27@example.com",
    }
  ];


  return (
    <section className="space-y-12">
      <div className="flex items-center justify-between">
        <h1 className="text-6xl font-bold">Blog Page</h1>
        <Link href={'/dashboard/blogs/create-blog'}>
          <Button>Create Blog</Button>
        </Link>
      </div>
      <div>
        <DashboardTable columns={columns} data={data} />
      </div>
    </section>
  );
}

export default BlogPage;