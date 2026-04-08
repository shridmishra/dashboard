import { type StatCard as StatCardData } from "@/lib/data";
import { Sparkline } from "./sparkline";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  stat: StatCardData;
  locale: "en" | "ar";
}

export function StatCard({ stat, locale }: StatCardProps) {
  const isUp = stat.trendDirection === "up";
  const isReturnRate = stat.id === "return-rate";
  const trendIsPositive = isReturnRate ? !isUp : isUp;

  return (
    <Card className="group relative overflow-hidden border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/20 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/[0.05] active:scale-[0.98]">
      {/* Accent vibrant top line */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] opacity-30 group-hover:opacity-100 transition-all duration-500"
        style={{ backgroundColor: stat.accentHex }}
      />

      <CardContent className="p-6">
        {/* Label */}
        <p className="text-sm font-semibold tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">
          {locale === "ar" ? stat.labelAr : stat.labelEn}
        </p>

        {/* Value */}
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <h3 className="text-3xl font-black tracking-tighter text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
            {stat.value}
          </h3>
          
          <div className="shrink-0 transition-transform duration-500 group-hover:scale-110">
            <Sparkline
              data={stat.sparkline}
              color={stat.accentHex}
              width={60}
              height={28}
            />
          </div>
        </div>

        {/* Trend */}
        <div className="mt-6 flex items-center gap-2">
          <div className={cn(
            "flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110",
            trendIsPositive ? "bg-emerald-500/10" : "bg-red-500/10"
          )}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isUp ? "text-emerald-500" : "text-red-500 rotate-180"}
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span
              className={cn(
                "text-sm font-bold tracking-tight",
                trendIsPositive ? "text-emerald-500" : "text-red-500"
              )}
            >
              {stat.trend}%
            </span>
            <span className="text-[11px] font-medium text-muted-foreground/80">
              {locale === "ar" ? "مقابل الشهر الماضي" : "vs last month"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
