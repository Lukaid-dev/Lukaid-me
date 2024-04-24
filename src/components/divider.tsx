export default function Divider({ width = 'w-full' }: { width?: string }) {
  return <div className={`mx-auto h-[2px] ${width} bg-guide`} />;
}
