export default function Divider({
  width = 'w-full',
  height = '2px',
}: {
  width?: string;
  height?: string;
}) {
  return <div className={`mx-auto h-[${height}] ${width} bg-border`} />;
}
