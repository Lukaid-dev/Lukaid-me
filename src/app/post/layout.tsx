export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full justify-center bg-slate-200">{children}</div>
  );
}
