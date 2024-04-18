export default function Naming({
  name,
  description,
}: {
  name: string;
  description?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-second/15 shrink-0 px-2 py-1">
        <span className="text-primary text-lg font-bold">{name}</span>
      </div>
      <p className="text-text">{description}</p>
    </div>
  );
}
