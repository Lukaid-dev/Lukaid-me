export default function Naming({
  name,
  description,
}: {
  name: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
      <div className="mr-auto bg-accent/15 px-2 py-1 md:mr-0 md:shrink-0">
        <span className="text-lg font-bold text-accent">{name}</span>
      </div>
      {description && <p className="text-text">{description}</p>}
    </div>
  );
}
