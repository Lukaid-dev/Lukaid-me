import './portfolio.css';
import Profile from './components/profile';
import Skills from './components/skills';
import Career from './components/career';
import ProjectLukaidMe from './components/ProjectLukaidMe';
import ProjectMobileInvitation from './components/ProjectMobileInvitation';
import ProjectBaekjoonRooms from './components/ProjectBaekjoonRooms';
import ProjectFourHours from './components/ProjectFourHours';
import Research from './components/research';
import Education from './components/education';
import PersonalStatement from './components/personalStatement';

export const metadata = {
  title: 'Portfolio',
};

export default function Portfolio() {
  return (
    <div
      id="content"
      className="flex w-full flex-col gap-4 rounded-xl bg-back py-4 shadow-xl">
      <Profile />
      <Skills />
      <Career />
      <ProjectLukaidMe />
      <ProjectMobileInvitation />
      <ProjectBaekjoonRooms />
      <ProjectFourHours />
      <Research />
      <Education />
      <PersonalStatement />
    </div>
  );
}
