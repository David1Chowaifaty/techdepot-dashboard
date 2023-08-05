import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Chart from "@/components/charts";
import KpiCard from "@/components/kpi-cards";

export default function Home() {
  return (
    <main className="min-h-screen px-4 grid gap-5  py-10 md:px-6 lg:px-10">
      {/*analytics*/}
      <section className="flex flex-col items-center w-full gap-5 md:items-start ">
        <h1 className="text-lg font-semibold">Analytics</h1>
        <div className="flex flex-col  lg:items-center gap-8 shrink-0 w-full md:flex-row">
          <KpiCard />
          <KpiCard />
          <KpiCard />
        </div>
        <Chart />
        <Chart />
      </section>
      {/*orders*/}
      <section className="rounded-lg shadow-md p-2 w-full">
        <div className="inline-flex items-center w-full justify-between py-3 px-1.5">
          <h2>Orders</h2>
          <Link
            href={"/dashboard/orders"}
            className={cn(buttonVariants({ variant: "link" }), "gap-2")}
          >
            view all orders <ArrowRightIcon />
          </Link>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Client</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Order Status</TableHead>
              <TableHead className="text-right">View Order</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">David</TableCell>
              <TableCell>Kousba</TableCell>
              <TableCell className="text-orange-500">Pending</TableCell>
              <TableCell className="text-right">View</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Georgio</TableCell>
              <TableCell>Kafraaka</TableCell>
              <TableCell className="text-green-500">Delivered</TableCell>
              <TableCell className="text-right">View</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Khalil</TableCell>
              <TableCell>Metrit</TableCell>
              <TableCell className="text-green-500">Delivered</TableCell>
              <TableCell className="text-right">View</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
