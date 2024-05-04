'use client';

import Divider from '@/components/divider';
import ToggleThemeButton from '@/components/setting/toggleThemeButton';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ModalSettingPage() {
  const router = useRouter();
  const onCloseClick = () => {
    router.back();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      <div className="mx-2 flex max-w-screen-md flex-1 flex-col gap-4 rounded-lg bg-back p-4 text-text">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-text">Settings</div>
          <button onClick={onCloseClick} className="text-text">
            <XMarkIcon className="size-8" />
          </button>
        </div>
        <Divider />
        <ToggleThemeButton />
      </div>
    </div>
  );
}
