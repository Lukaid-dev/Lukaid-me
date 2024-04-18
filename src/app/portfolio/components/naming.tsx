export default function Naming({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="ring-border text-text mx-4 flex flex-col rounded-xl p-4 outline-none ring">
      <div className="flex gap-4 pb-2">
        <span className="text-3xl font-semibold text-gray-950">Naming</span>
      </div>
    </div>
  );
}
