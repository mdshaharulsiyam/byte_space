/**
 * CardLearningProgress — floating hero card
 * Matches Figma: 232×131, r:16, white fill
 * Shows: "Learning Progress" label, "55%" large bold, lime progress bar (55% filled)
 */
export default function CardLearningProgress() {
  const progress = 55;

  return (
    <div
      className="bg-white flex flex-col justify-between"
      style={{
        borderRadius: 16,
        padding: "14px 16px 14px 16px",
        width: 232,
        minHeight: 131,
        boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
        gap: 6,
      }}
    >
      {/* Label */}
      <p
        className="font-body font-medium text-zinc-500 leading-tight"
        style={{ fontSize: 12 }}
      >
        Learning Progress
      </p>

      {/* Big percentage */}
      <p
        className="font-body font-bold text-zinc-900 leading-none"
        style={{ fontSize: 42 }}
      >
        {progress}%
      </p>

      {/* Progress bar */}
      <div
        className="w-full rounded-full overflow-hidden"
        style={{ height: 8, backgroundColor: "#e5e7eb" }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${progress}%`,
            backgroundColor: "#cbfc01",
          }}
        />
      </div>
    </div>
  );
}
