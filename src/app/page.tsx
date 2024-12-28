import Link from "next/link";
import NewList from "./_components/NewList.tsx"
export default function HomePage() {
  return (
  <main className="flex flex-col items-center justify-center min-h-svh">
    <NewList/>
  </main>
  );
}
