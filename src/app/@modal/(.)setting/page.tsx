export default function ModalSettingPage() {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-5">
        <h1 className="text-2xl">Modal</h1>
        <p className="text-lg">This is a modal</p>
      </div>
    </div>
  );
}

// close button만 따로 뺴서 use client and go back
