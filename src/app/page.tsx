import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from 'next/link'

export default function Home() {
  return (
      <div className={"border min-h-screen flex flex-col gap-2 justify-center items-center"}>
          <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
          />
              <Button asChild>
                  <Link href={'/dashboard'}>dashboard</Link>
              </Button>
          <Button asChild>
              <Link href={'/sign-in'}>Sign-in</Link>
          </Button>
      </div>
  );
}
