import { STAT_ITEMS, StatItem } from "./growth.data";

interface GrowthStatsProps {
  stats?: StatItem[];
}

export default function GrowthStats({ stats = STAT_ITEMS }: GrowthStatsProps) {
  return (
    <div className="flex items-center gap-8 sm:gap-12 md:gap-16 pt-2">
      {stats.map((stat) => (
        <div key={stat.id} className="flex flex-col">
          <span className="font-heading font-bold text-[#003be2] text-3xl sm:text-4xl md:text-[42px] leading-tight tracking-tight">
            {stat.value}
          </span>
          <span className="font-body text-zinc-500 text-[14px] sm:text-[15px] mt-1 font-normal">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
