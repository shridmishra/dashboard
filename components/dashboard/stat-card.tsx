import { type StatCard as StatCardData } from "@/lib/data";
import { Sparkline } from "./sparkline";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  stat: StatCardData;
  locale: "en" | "ar";
}

export function StatCard({ stat, locale }: StatCardProps) {
  const isUp = stat.trendDirection === "up";
  const isReturnRate = stat.id === "return-rate";
  const trendIsPositive = isReturnRate ? !isUp : isUp;

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-card/50 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5">
      {/* Accent subtle top line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] opacity-40 group-hover:opacity-70 transition-opacity"
        style={{ backgroundColor: stat.accentHex }}
      />

      <CardContent className="p-5">
        {/* Label */}
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 transition-colors group-hover:text-muted-foreground">
          {locale === "ar" ? stat.labelAr : stat.labelEn}
        </p>

        {/* Value */}
        <div className="mt-3 flex items-baseline justify-between">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            {stat.value}
          </h3>
          
          <div className="shrink-0 transition-transform duration-500 group-hover:scale-105">
            <Sparkline
              data={stat.sparkline}
              color={stat.accentHex}
              width={56}
              height={22}
            />
          </div>
        </div>

        {/* Trend */}
        <div className="mt-4 flex items-center gap-1.5">
          <div className={`p-0.5 rounded-full ${trendIsPositive ? "bg-emerald-500/10" : "bg-red-500/10"}`}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isUp ? "text-emerald-500" : "text-red-500 rotate-180"}
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <span
            className={`text-[11px] font-bold ${
              trendIsPositive ? "text-emerald-500" : "text-red-500"
            }`}
          >
            {stat.trend}%
          </span>
          <span className="text-[10px] font-medium text-muted-foreground/40">vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
}
