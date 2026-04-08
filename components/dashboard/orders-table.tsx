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
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

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
        "rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-tight",
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
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={config.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    ),
    processing: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={config.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    shipped: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={config.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 6v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    ),
    done: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={config.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    ),
    return: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={config.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.86"/></svg>
    ),
  };

  return <span className="flex shrink-0 items-center">{icons[status]}</span>;
}

export function OrdersTable({ locale }: OrdersTableProps) {
  const isRtl = locale === "ar";

  return (
    <Card className="border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between border-b border-border/50 px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted text-muted-foreground">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></svg>
          </div>
          <CardTitle className="text-[13px] font-bold tracking-tight">
            {isRtl ? "الطلبات الأخيرة" : "Recent Orders"}
          </CardTitle>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground/60 transition-colors hover:text-muted-foreground cursor-default">
          {isRtl ? "عرض الكل" : "View all orders"}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={isRtl ? "rotate-180" : ""}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </CardHeader>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className={cn("h-10 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50", isRtl ? "text-right" : "text-left")}>
                {isRtl ? "رقم الطلب" : "ID"}
              </TableHead>
              <TableHead className={cn("h-10 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50", isRtl ? "text-right" : "text-left")}>
                {isRtl ? "العميل" : "Customer"}
              </TableHead>
              <TableHead className={cn("h-10 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50", isRtl ? "text-right" : "text-left")}>
                {isRtl ? "المبلغ" : "Amount"}
              </TableHead>
              <TableHead className={cn("h-10 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50", isRtl ? "text-right" : "text-left")}>
                {isRtl ? "الحالة" : "Status"}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                className="border-border/30 transition-colors hover:bg-muted/30"
              >
                <TableCell className="py-4">
                  <span className="font-mono text-[11.5px] font-semibold text-muted-foreground/80">
                    {order.id}
                  </span>
                </TableCell>
                <TableCell className="py-4">
                  <span className="text-[13px] font-semibold text-foreground/90">
                    {order.customer}
                  </span>
                </TableCell>
                <TableCell className="py-4">
                  <span className="font-mono text-[13px] font-bold tabular-nums text-foreground/70">
                    {order.amount}
                  </span>
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex items-center gap-2">
                    <StatusIcon status={order.status} />
                    <StatusBadge status={order.status} locale={locale} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
