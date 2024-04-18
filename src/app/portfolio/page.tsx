import Profile from './components/profile';
import Skills from './components/skills';
import Career from './components/career';

export default function Portfolio() {
  return (
    <div className="mx-auto flex h-full w-full flex-col gap-4 rounded-xl shadow-xl sm:w-4/5">
      <Profile />
      <Skills />
      <Career />
    </div>
  );
}
