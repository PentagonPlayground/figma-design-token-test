import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-primary h-16 w-full" />
      <div className="bg-secondary h-16 w-full" />
      <div className="bg-tertiary h-16 w-full" />
    </main>
  );
}
