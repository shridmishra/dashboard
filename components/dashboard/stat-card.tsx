import { type StatCard as StatCardData } from "@/lib/data";
import { Sparkline } from "./sparkline";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  DollarSign,
  TrendingUp,
  ShoppingBag,
  CheckCircle,
  RefreshCw,
  Truck,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

interface StatCardProps {
  stat: StatCardData;
  locale: "en" | "ar";
}

const iconMap: Record<string, any> = {
  "revenue": DollarSign,
  "net-profit": TrendingUp,
  "orders": ShoppingBag,
  "confirm-rate": CheckCircle,
  "return-rate": RefreshCw,
  "delivery-rate": Truck,
};

export function StatCard({ stat, locale }: StatCardProps) {
  const isUp = stat.trendDirection === "up";
  const Icon = iconMap[stat.id] || DollarSign;

  return (
    <Card className="group relative overflow-hidden border-border/60 bg-card/40 backdrop-blur-2xl">
      {/* Glossy overlay for separation */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      <div className="px-5 pb-5 flex flex-col h-full relative z-10">
        {/* Top Header: Icon & Trend */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-2xl shadow-sm saturate-[0.8] brightness-[1.1]"
            style={{ backgroundColor: `${stat.accentHex}10`, color: stat.accentHex, border: `1px solid ${stat.accentHex}20` }}
          >
            <Icon size={20} strokeWidth={2} />
          </div>

          <div className={cn(
            "flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-tight transition-all duration-300 saturate-[0.7]",
            isUp ? "bg-emerald-500/10 text-emerald-600/90" : "bg-red-500/10 text-red-600/90"
          )}>
            {isUp ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
            {stat.trend}%
          </div>
        </div>

        {/* Content Side: Label & Value */}
        <div className="space-y-0.5">
          <p className="text-[11px] font-bold text-muted-foreground/50 uppercase tracking-widest">
            {locale === "ar" ? stat.labelAr : stat.labelEn}
          </p>
          <div className={cn(
            "flex items-baseline gap-2",
            locale === "ar" ? "pb-6" : "pb-0 md:pb-0"
          )}>
            <h3 className="text-3xl pt-2 font-bold tracking-tight text-foreground/90 transition-all duration-500 group-hover:text-foreground ">
              {stat.value}
            </h3>
          </div>
        </div>

        {/* Bottom Visualization: Sparkline Area */}
        <div className="mt-auto pt-5 -mx-5 -mb-5 relative h-16 overflow-hidden saturate-[0.5] opacity-50 group-hover:opacity-100 group-hover:saturate-[0.9] transition-all duration-700">
          <div className="absolute inset-0">
            <Sparkline
              data={stat.sparkline}
              color={stat.accentHex}
              width={320}
              height={64}
              id={stat.id}
            />
          </div>

          {/* Edge fade */}
          <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-card/40 to-transparent pointer-events-none" />
        </div>
      </div>
    </Card>
  );
}
