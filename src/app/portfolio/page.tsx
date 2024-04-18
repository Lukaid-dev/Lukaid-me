import Profile from './components/profile';
import Skills from './components/skills';
import Career from './components/career';
import Project_1 from './components/project_1';
import Project_2 from './components/project_2';
import Project_3 from './components/project_3';
import Research from './components/research';
import PersonalStatement from './components/personalStatement';

export default function Portfolio() {
  return (
    <div className="mx-auto flex h-full w-full flex-col gap-4 rounded-xl py-4 shadow-xl sm:w-4/5">
      <Profile />
      <Skills />
      <Career />
      <Project_1 />
      <Project_2 />
      <Project_3 />
      <Research />
      <PersonalStatement />
    </div>
  );
}
