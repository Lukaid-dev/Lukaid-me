import ProfileCard from './components/profileCard';
import SkillCard from './components/skillCard';

export default function Portfolio() {
  return (
    <div className="mx-auto flex h-full w-full flex-col gap-4 rounded-xl pt-4 shadow-xl sm:w-4/5">
      <ProfileCard />
      <SkillCard />
    </div>
  );
}
