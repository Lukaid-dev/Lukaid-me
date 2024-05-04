import Profile from '@/components/portfolio/profile';
import Skills from '@/components/portfolio/skills';
import Career from '@/components/portfolio/career';
import ProjectLukaidMe from '@/components/portfolio/ProjectLukaidMe';
import ProjectMobileInvitation from '@/components/portfolio/ProjectMobileInvitation';
import ProjectBaekjoonRooms from '@/components/portfolio/ProjectBaekjoonRooms';
import ProjectFourHours from '@/components/portfolio/ProjectFourHours';
import Research from '@/components/portfolio/research';
import Education from '@/components/portfolio/education';
import PersonalStatement from '@/components/portfolio/personalStatement';

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
