import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

type Props = {
  text: string;
  username: string;
  paragraph: string;
  footer: string;
  fallback: string;
  avatar: string;
  href: string;
};

const SomeCard = (props: Props) => (
  <HoverCard>
    <HoverCardTrigger asChild className="!delay-0">
      <a
        href={props.href}
        className="underline decoration-[#FFC799] underline-offset-4 hover:animate-pulse"
      >
        {props.text}
      </a>
    </HoverCardTrigger>
    <HoverCardContent className="dark:!bg-slate-gray w-80 rounded-lg">
      <div className="dark:bg-slate-gray flex justify-evenly space-x-4">
        <Avatar>
          <AvatarImage src={props.avatar} />
          <AvatarFallback>{props.fallback}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">{props.username}</h4>
          <p className="text-sm">{props.paragraph}</p>
          <div className="flex items-center gap-1 pt-2">
            <CalendarDaysIcon className="h-4 w-4" />
            <span className="text-muted-foreground text-xs">
              {props.footer}
            </span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export { SomeCard };
