'use client';

import { LanguageIcon } from '@heroicons/react/24/outline';
import * as Select from '@radix-ui/react-select';
import { useLocale } from 'next-intl';
import { usePathname } from 'next-intl/client';
import { useRouter } from 'next/navigation';
import React, { Ref } from 'react';

const Language = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const onValueChange = (value: string) => {
    router.push(`/${value}/${pathname}`);
  };

  return (
    <Select.Root onValueChange={onValueChange}>
      <Select.Trigger className="cursor-pointer rounded p-1 leading-none outline-none" aria-label="Language">
        <Select.Icon>
          <div className="flex items-center gap-1 hover:animate-pulse">
            <LanguageIcon className="h-6 w-6" />
            <span className="text-sm uppercase">{locale}</span>
          </div>
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={5}
          className="z-20 overflow-hidden rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] dark:bg-zinc-600"
        >
          <Select.Viewport className="p-1">
            <Select.Group>
              <Select.Label className="px-6 text-xs leading-6">Language</Select.Label>
              <SelectItem className="cursor-pointer px-6 text-sm leading-6 outline-none" value="en">
                English
              </SelectItem>
              <SelectItem className="cursor-pointer px-6 text-sm leading-6 outline-none" value="es">
                Spanish
              </SelectItem>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef(
  (
    { children, className, value, ...props }: { children: any; value: string; className: string },
    forwardedRef: Ref<HTMLDivElement> | null,
  ) => {
    return (
      <Select.Item className={className} value={value} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  },
);

export default Language;
