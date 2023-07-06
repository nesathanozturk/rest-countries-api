"use client";

import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => router.back()}
        className="bg-lmel dark:bg-dmel w-32 p-2 flex justify-center items-center gap-2 shadow-lg rounded-sm cursor-pointer"
      >
        <BsArrowLeft />
        <span>Back</span>
      </div>
    </>
  );
};

export default BackButton;
