import { summary } from '@/app/types/summary';
import Summary from './summary';

export default function SummaryCard({ summaries }: { summaries: summary[] }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-third px-4 py-4 md:px-8">
      {summaries.map((summary) => (
        <Summary key={summary.key} summary={summary} />
      ))}
    </div>
  );
}
