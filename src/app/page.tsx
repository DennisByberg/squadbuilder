import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/squad-builder-logo-text.png"
          alt="Build your perfect squad"
          width={380}
          height={0}
          className="h-auto w-auto"
          loading="eager"
          priority
        />
      </div>

      <Button
        variant="outline"
        nativeButton={false}
        render={<Link href="/squads" />}
      >
        Get started
        <ArrowRightIcon size={16} />
      </Button>
    </div>
  );
}
