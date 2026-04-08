export type StatCard = {
  id: string;
  labelEn: string;
  labelAr: string;
  value: string;
  trend: number; // percentage change, positive = up
  trendDirection: "up" | "down";
  sparkline: number[]; // 7 data points for mini chart
  accentColor: string; // tailwind color token
  accentHex: string; // hex for SVG rendering
};

export const stats: StatCard[] = [
  {
    id: "revenue",
    labelEn: "Revenue",
    labelAr: "الإيرادات",
    value: "$48.2K",
    trend: 18.4,
    trendDirection: "up",
    sparkline: [32, 41, 28, 52, 38, 61, 55],
    accentColor: "emerald",
    accentHex: "#10b981",
  },
  {
    id: "net-profit",
    labelEn: "Net Profit",
    labelAr: "صافي الربح",
    value: "$12.8K",
    trend: 22.1,
    trendDirection: "up",
    sparkline: [18, 30, 22, 45, 35, 58, 48],
    accentColor: "violet",
    accentHex: "#a855f7",
  },
  {
    id: "orders",
    labelEn: "Orders",
    labelAr: "الطلبات",
    value: "1,247",
    trend: 12.7,
    trendDirection: "up",
    sparkline: [28, 35, 20, 48, 32, 56, 48],
    accentColor: "blue",
    accentHex: "#3b82f6",
  },
  {
    id: "confirm-rate",
    labelEn: "Confirm Rate",
    labelAr: "معدل التأكيد",
    value: "67.3%",
    trend: 5.3,
    trendDirection: "up",
    sparkline: [18, 30, 20, 42, 35, 56, 52],
    accentColor: "amber",
    accentHex: "#f59e0b",
  },
  {
    id: "return-rate",
    labelEn: "Return Rate",
    labelAr: "معدل الإرجاع",
    value: "8.2%",
    trend: 2.3,
    trendDirection: "down",
    sparkline: [12, 18, 14, 28, 35, 42, 44],
    accentColor: "red",
    accentHex: "#ef4444",
  },
  {
    id: "delivery-rate",
    labelEn: "Delivery Rate",
    labelAr: "معدل التوصيل",
    value: "91.5%",
    trend: 3.2,
    trendDirection: "up",
    sparkline: [30, 40, 22, 48, 42, 56, 48],
    accentColor: "cyan",
    accentHex: "#06b6d4",
  },
];

export type OrderStatus = "new" | "processing" | "shipped" | "done" | "return";

export type Order = {
  id: string;
  associateEn: string;
  associateAr: string;
  amount: string;
  status: OrderStatus;
};

export const orders: Order[] = [
  { 
    id: "ORD-7291", 
    associateEn: "Ahmad Ali",
    associateAr: "أحمد علي", 
    amount: "$284.00", 
    status: "new" 
  },
  {
    id: "ORD-7290",
    associateEn: "Fatima Hassan",
    associateAr: "فاطمة حسن",
    amount: "$156.50",
    status: "processing",
  },
  {
    id: "ORD-7289",
    associateEn: "Mohammad Kamil",
    associateAr: "محمد كامل",
    amount: "$432.00",
    status: "shipped",
  },
  { 
    id: "ORD-7288", 
    associateEn: "Sarah Begum",
    associateAr: "سارة محمد", 
    amount: "$89.99", 
    status: "done" 
  },
  {
    id: "ORD-7287",
    associateEn: "Noor ul Haq",
    associateAr: "نور الدين",
    amount: "$215.00",
    status: "return",
  },
  {
    id: "ORD-7286",
    associateEn: "Khalid Mahmood",
    associateAr: "خالد إبراهيم",
    amount: "$178.25",
    status: "new",
  },
  {
    id: "ORD-7285",
    associateEn: "Layla Abdullah",
    associateAr: "ليلى عبد الله",
    amount: "$367.00",
    status: "done",
  },
  {
    id: "ORD-7284",
    associateEn: "Umar Khan",
    associateAr: "عمر الفاروق",
    amount: "$92.50",
    status: "processing",
  },
  {
    id: "ORD-7283",
    associateEn: "Huda Malik",
    associateAr: "هدى المنصور",
    amount: "$445.00",
    status: "shipped",
  },
  {
    id: "ORD-7282",
    associateEn: "Yusuf Hassan",
    associateAr: "يوسف الحربي",
    amount: "$128.75",
    status: "done",
  },
];

export const statusConfig: Record<
  OrderStatus,
  { labelEn: string; labelAr: string; color: string; bgClass: string; textClass: string; borderClass: string }
> = {
  new: {
    labelEn: "New",
    labelAr: "جديد",
    color: "#3b82f6",
    bgClass: "bg-blue-500/10",
    textClass: "text-blue-400",
    borderClass: "border-blue-500/20",
  },
  processing: {
    labelEn: "Processing",
    labelAr: "قيد المعالجة",
    color: "#f59e0b",
    bgClass: "bg-amber-500/10",
    textClass: "text-amber-400",
    borderClass: "border-amber-500/20",
  },
  shipped: {
    labelEn: "Shipped",
    labelAr: "تم الشحن",
    color: "#a855f7",
    bgClass: "bg-violet-500/10",
    textClass: "text-violet-400",
    borderClass: "border-violet-500/20",
  },
  done: {
    labelEn: "Done",
    labelAr: "مكتمل",
    color: "#10b981",
    bgClass: "bg-emerald-500/10",
    textClass: "text-emerald-400",
    borderClass: "border-emerald-500/20",
  },
  return: {
    labelEn: "Return",
    labelAr: "مرتجع",
    color: "#ef4444",
    bgClass: "bg-red-500/10",
    textClass: "text-red-400",
    borderClass: "border-red-500/20",
  },
};
