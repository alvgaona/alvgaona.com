import { GithubLogo } from "@phosphor-icons/react";

export default function GithubLink() {
  return (
    <a
      href="https://github.com/alvgaona/alvgaona.com"
      className="flex items-center gap-1 text-white light:text-black decoration-[#FFC799] hover:underline hover:underline-offset-4"
    >
      <GithubLogo size={16} weight="fill" />
      <span>Source</span>
    </a>
  );
}
