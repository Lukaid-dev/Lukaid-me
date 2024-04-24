import Image from 'next/image';
import NoImage from './noImage';

export default function Thumbnail({ thumbnail }: { thumbnail?: string }) {
  return (
    // TODO: Image size 반응형으로 변경
    <div className="relative flex h-48 w-full overflow-hidden rounded-xl bg-accent/20 sm:h-32 md:h-40 lg:h-48 xl:h-64">
      {thumbnail ? (
        <Image fill src={thumbnail} alt="thumbnail" className="object-cover" />
      ) : (
        <NoImage />
      )}
    </div>
  );
}
