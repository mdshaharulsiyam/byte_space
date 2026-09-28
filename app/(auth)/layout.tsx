export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth-bg-wrapper min-h-screen flex flex-col items-center justify-center relative">
      <div className="auth-grid-lines" />
      <main className="relative z-10 w-full flex items-center justify-center p-4">
        {children}
      </main>
    </div>
  );
}
