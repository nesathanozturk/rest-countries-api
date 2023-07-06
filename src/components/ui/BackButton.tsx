"use client";

import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-lmel dark:bg-dmel w-32 p-2 flex justify-center items-center gap-2 shadow-lg rounded-sm cursor-pointer">
        <BsArrowLeft />
        <span onClick={() => router.back()}>Back</span>
      </div>
    </>
  );
};

export default BackButton;
