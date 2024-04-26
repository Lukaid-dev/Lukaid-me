import Divider from '@/components/divider';
import ToggleThemeButton from '@/components/toggleThemeButton';

export const metadata = {
  title: 'Settings',
};

export default function ModalSettingPage() {
  return (
    <div className="flex w-full flex-col rounded-xl bg-back py-4 shadow-xl">
      <div className="mx-2 flex flex-col gap-4 rounded-lg p-4 text-text">
        <div className="text-2xl font-bold text-text">Settings</div>
        <Divider />
        <ToggleThemeButton />
      </div>
    </div>
  );
}
