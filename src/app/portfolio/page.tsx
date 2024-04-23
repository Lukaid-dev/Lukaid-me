import './portfolio.css';
import Profile from './components/profile';
import Skills from './components/skills';
import Career from './components/career';
import Project_1 from './components/project_1';
import Project_2 from './components/project_2';
import Project_3 from './components/project_3';
import Research from './components/research';
import Education from './components/education';
import PersonalStatement from './components/personalStatement';

export default function Portfolio() {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl py-4 shadow-xl">
      <Profile />
      <Skills />
      <Career />
      <Project_1 />
      <Project_2 />
      <Project_3 />
      <Research />
      <Education />
      <PersonalStatement />
    </div>
  );
}
