import HeroGraphic from '@/components/heroGraphic';
import LandingProfile from '@/components/landingProfile';

export default function Home() {
  return (
    <main className="mx-auto flex w-full flex-col items-center gap-2">
      <HeroGraphic />
      <LandingProfile />
    </main>
  );
}
