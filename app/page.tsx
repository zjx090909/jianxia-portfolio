import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-white bg-brandBlue min-h-[80vh] p-8">
      <h1 className="text-5xl font-bold mb-4">Jianxia Zhang</h1>
      <p className="text-xl text-center max-w-xl">
        Building scalable cloud solutions with code and automation.
      </p>
    </div>
  );
}