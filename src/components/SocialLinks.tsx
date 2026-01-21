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
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10.5" />
            <circle cx="7.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            <line x1="7.5" y1="9" x2="7.5" y2="17.5" />
            <path d="M10.5 9h2.5c2.5 0 4 1.5 4 4s-1.5 4.5-4 4.5h-2.5V9z" />
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
                    <Icon size={16} />
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
