
export default function CardTopCourses() {
  return (
    <div
      className="bg-white flex flex-col justify-center gap-1"
      style={{
        borderRadius: 16,
        padding: "12px 16px",
        width: 208,
        minHeight: 70,
        boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
      }}
    >
      <p
        className="font-body font-semibold text-zinc-900 leading-tight"
        style={{ fontSize: 15 }}
      >
        UI/UX Design
      </p>
      <p
        className="font-body font-normal text-zinc-400 leading-tight"
        style={{ fontSize: 12 }}
      >
        200 Courses&nbsp;&nbsp;•&nbsp;&nbsp;1000+ Students
      </p>
    </div>
  );
}
