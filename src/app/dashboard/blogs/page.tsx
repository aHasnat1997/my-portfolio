"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DashboardTable } from "../components/DashboardTable";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown, Eye, FilePenLine, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function BlogPage() {
  const [data, setData] = useState<Record<string, any> | null>(null);
  // const [isLoading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    fetch(`/api/blog`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        // setLoading(false)
      })
  }, []);
  // console.log(data);


  const columns: ColumnDef<Record<string, any>>[] | any = [
    {
      accessorKey: "imageUrl",
      header: "Image",
      cell: ({ row }: { row: any }) => <div>
        <Image
          alt="blog image"
          src={row.original.imageUrl}
          width={100}
          height={100}
        />
      </div>
    },
    {
      accessorKey: "title",
      header: ({ column }: { column: any }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "summary",
      header: 'Summary',
      cell: ({ row }: { row: any }) => <div>
        <p>{(row.original.summary).slice(0, 100)}...</p>
      </div>

    },
    {
      accessorKey: "likes",
      header: 'Likes',
    },
    {
      id: "actions",
      cell: ({ row }: { row: any }) => {
        const blog = row.original

        return (
          <div className="flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0 text-right">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => router.push(`/blog/${blog.id}`)}
                  className="flex gap-4"
                >
                  <Eye /> View Blog
                </DropdownMenuItem>
                <DropdownMenuItem className="flex gap-4">
                  <FilePenLine /> Edit Blog
                </DropdownMenuItem>
                <DropdownMenuItem className="flex gap-4">
                  <Trash2 />
                  Delete Blog
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      },
    },
  ];

  return (
    <section className="space-y-12">
      <div className="flex items-center justify-between">
        <h1 className="text-6xl font-bold">Blogs Page</h1>
        <Link href={'/dashboard/blogs/create-blog'}>
          <Button>Create Blog</Button>
        </Link>
      </div>
      <div>
        {
          data ? <DashboardTable columns={columns} data={data.data} /> : <></>
        }
      </div>
    </section>
  );
}

export default BlogPage;