import { summary } from '@/app/types/summary';
import Summary from './summary';

export default function SummaryCard({ summaries }: { summaries: summary[] }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-third px-8 py-4">
      {summaries.map((summary) => (
        <Summary key={summary.key} summary={summary} />
      ))}
    </div>
  );
}
