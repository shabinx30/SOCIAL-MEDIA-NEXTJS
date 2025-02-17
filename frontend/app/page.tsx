import Link from "next/link";

export default function Home() {
  return (
    <div>
      Project starts now....
      <Link href={"/Login"}>Login</Link>
    </div>
  );
}
