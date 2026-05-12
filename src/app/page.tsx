import { LinkButton } from "@/components/buttons/LinkButton";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
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

      <LinkButton href="/squads" icon={<ArrowRightIcon size={16} />}>
        Get started
      </LinkButton>
    </main>
  );
}
