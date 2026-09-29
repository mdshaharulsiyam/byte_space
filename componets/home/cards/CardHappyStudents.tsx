/**
 * CardHappyStudents — floating hero card
 * Matches Figma: 258×121, r:16, white fill
 * Shows: "Happy Students" title, "4.5 (240) ★" rating,
 *         row of overlapping avatar circles + "2K+" lime badge
 */

/* Avatar colours matching the real photo skin tones from the design image */
const AVATARS = [
  { bg: "#f3c89a", initials: "" }, // asian male
  { bg: "#c97b5a", initials: "" }, // bearded
  { bg: "#e8a87c", initials: "" }, // male
  { bg: "#7b5ea7", initials: "" }, // cyclist
  { bg: "#c97b5a", initials: "" }, // hat
  { bg: "#7ba7c9", initials: "" }, // glasses
];

export default function CardHappyStudents() {
  return (
    <div
      className="bg-white flex flex-col justify-between"
      style={{
        borderRadius: 16,
        padding: "14px 16px",
        width: 258,
        minHeight: 121,
        boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
        gap: 10,
      }}
    >
      {/* Top text */}
      <div className="flex flex-col gap-0.5">
        <p
          className="font-body font-semibold text-zinc-900 leading-tight"
          style={{ fontSize: 15 }}
        >
          Happy Students
        </p>
        <div className="flex items-center gap-1">
          <span
            className="font-body font-medium text-zinc-700 leading-tight"
            style={{ fontSize: 12 }}
          >
            4.5 (240)
          </span>
          {/* Gold star */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#F5C518" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>

      {/* Avatars row + 2K+ badge */}
      <div className="flex items-center">
        {/* Overlapping avatar circles */}
        <div className="flex" style={{ gap: -6 }}>
          {AVATARS.map((avatar, i) => (
            <div
              key={i}
              className="rounded-full border-2 border-white shrink-0"
              style={{
                width: 36,
                height: 36,
                backgroundColor: avatar.bg,
                marginLeft: i === 0 ? 0 : -10,
                position: "relative",
                zIndex: AVATARS.length - i,
                overflow: "hidden",
              }}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* 2K+ badge */}
        <div
          className="flex items-center justify-center font-body font-bold text-zinc-900 rounded-full shrink-0"
          style={{
            width: 44,
            height: 44,
            backgroundColor: "#cbfc01",
            fontSize: 12,
            marginLeft: 8,
          }}
        >
          2K+
        </div>
      </div>
    </div>
  );
}
