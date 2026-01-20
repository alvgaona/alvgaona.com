import { GithubLogo, XLogo, LinkedinLogo } from "@phosphor-icons/react";

const socials = [
    { icon: GithubLogo, href: "https://github.com/alvgaona", label: "GitHub" },
    { icon: XLogo, href: "https://x.com/alvgaona", label: "X" },
    { icon: LinkedinLogo, href: "https://linkedin.com/in/alvgaona", label: "LinkedIn" },
];

function OrcidIcon({ size = 16 }: { size?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="currentColor"
        >
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
        </svg>
    );
}

export default function SocialLinks() {
    return (
        <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white light:text-black hover:opacity-70 transition-opacity"
                >
                    <Icon size={16} weight="fill" />
                </a>
            ))}
            <a
                href="https://orcid.org/0009-0003-4967-4444"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ORCID"
                className="text-white light:text-black hover:opacity-70 transition-opacity"
            >
                <OrcidIcon size={16} />
            </a>
        </div>
    );
}
