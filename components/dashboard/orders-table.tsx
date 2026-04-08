import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { orders, statusConfig, type OrderStatus } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowUpRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrdersTableProps {
  locale: "en" | "ar";
}

function StatusBadge({
  status,
  locale,
}: {
  status: OrderStatus;
  locale: "en" | "ar";
}) {
  const config = statusConfig[status];
  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-md border px-2 py-0.5 text-[10px] font-bold capitalize tracking-normal",
        config.bgClass,
        config.textClass,
        config.borderClass,
      )}
    >
      {locale === "ar" ? config.labelAr : config.labelEn}
    </Badge>
  );
}

function StatusIcon({ status }: { status: OrderStatus }) {
  const config = statusConfig[status];

  const icons: Record<OrderStatus, React.ReactNode> = {
    new: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={config.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
    ),
    processing: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={config.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    ),
    shipped: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={config.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 6v3h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
    ),
    done: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={config.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
    ),
    return: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={config.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-3.86" /></svg>
    ),
  };

  return <span className="flex shrink-0 items-center">{icons[status]}</span>;
}

export function OrdersTable({ locale }: OrdersTableProps) {
  const isRtl = locale === "ar";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-black tracking-tighter text-foreground">
            {isRtl ? "الطلبات الأخيرة" : "Recent Orders"}
          </h2>
          <p className="text-sm font-medium text-muted-foreground/50">
            {isRtl ? "مراقبة وتتبع حالة أحدث معاملاتك." : "Monitor and track the status of your most recent transactions."}
          </p>
        </div>
        <div className="group flex items-center gap-2 text-xs font-bold text-muted-foreground/40 transition-colors hover:text-foreground cursor-pointer">
          <span className="tracking-widest uppercase">{isRtl ? "عرض الكل" : "View all assignments"}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-card/10 backdrop-blur-sm overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-muted/20">
            <TableRow className="hover:bg-transparent border-border/70">
              <TableHead className="h-14 ps-8 text-start text-[11px] font-bold tracking-widest uppercase text-muted-foreground/50 w-[20%]">
                {isRtl ? "معرف الطلب" : "Assignment ID"}
              </TableHead>
              <TableHead className="h-14 text-start text-[11px] font-bold tracking-widest uppercase text-muted-foreground/50 w-[25%]">
                {isRtl ? "العميل" : "Associate"}
              </TableHead>
              <TableHead className="h-14 text-start text-[11px] font-bold tracking-widest uppercase text-muted-foreground/50 w-[25%]">
                {isRtl ? "الحالة" : "Current Status"}
              </TableHead>
              <TableHead className="h-14 text-start text-[11px] font-bold tracking-widest uppercase text-muted-foreground/50 w-[20%]">
                {isRtl ? "المجموع" : "Total Value"}
              </TableHead>
              <TableHead className="h-14 pe-8 text-end text-[11px] font-bold tracking-widest uppercase text-muted-foreground/50 w-[0%]">
                {isRtl ? "تفاصيل" : "Details"}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                className="group border-border/10 transition-all duration-300 hover:bg-primary/[0.02] active:bg-primary/[0.04]"
              >
                <TableCell className="py-4 ps-8 text-start">
                  <span className="font-bold text-[13px] tracking-tighter text-foreground/80 transition-colors group-hover:text-primary">
                    {order.id}
                  </span>
                </TableCell>
                <TableCell className="py-4 text-start">
                  <span className="text-sm font-semibold tracking-tight text-foreground/80 transition-colors group-hover:text-foreground">
                    {locale === "ar" ? order.associateAr : order.associateEn}
                  </span>
                </TableCell>
                <TableCell className="py-4 text-start">
                  <div className="flex items-center gap-3 opacity-70 transition-all group-hover:opacity-100 group-hover:translate-x-0.5">
                    <StatusIcon status={order.status} />
                    <StatusBadge status={order.status} locale={locale} />
                  </div>
                </TableCell>
                <TableCell className="py-4 text-start font-black text-sm tracking-tight text-foreground/80 tabular-nums transition-colors group-hover:text-foreground">
                  {order.amount}
                </TableCell>
                <TableCell className="py-4 pe-8 text-end">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-muted-foreground/40 hover:text-white hover:bg-primary/[0.04]">
                    <MoreHorizontal className="h-4 w-4 text-white" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
