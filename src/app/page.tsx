import { HydrateClient } from "~/trpc/server";
import { Navbar } from "~/app/_components/navbar";
import { ThemeSwitcher } from "~/app/_components/theme-switcher";

export default async function Home() {

  return (
    <HydrateClient>
      <Navbar />
      <ThemeSwitcher />
      <main className="flex min-h-screen flex-col items-center justify-center text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Hi, I&apos;m Jonathan
          </h1>
        </div>
      </main>
    </HydrateClient>
  );
}
