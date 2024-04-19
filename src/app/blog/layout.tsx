export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto bg-slate-200">{children}</div>;
}
