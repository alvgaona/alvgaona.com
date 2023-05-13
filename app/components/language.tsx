'use client';

import { CheckIcon, LanguageIcon } from '@heroicons/react/24/outline';
import * as Select from '@radix-ui/react-select';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next-intl/client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

const Language = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations('language');

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
          className="z-20 overflow-hidden rounded-md bg-orange-200 dark:bg-zinc-600"
        >
          <Select.Viewport className="p-1">
            <Select.Group>
              <Select.Label className="px-6 text-xs leading-6 text-slate-400">{t('title')}</Select.Label>
              <SelectItem value="en">{t('english')}</SelectItem>
              <SelectItem value="es">{t('spanish')}</SelectItem>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = ({ children, value }: { children: any; value: string }) => {
  const locale = useLocale();
  const iconRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (locale == value) {
      iconRef.current?.classList.remove('hidden');
    } else {
      iconRef.current?.classList.add('hidden');
    }
  }, [locale, value]);

  return (
    <Select.Item className="flex cursor-pointer items-center px-6 text-sm leading-6 outline-none" value={value}>
      <Select.ItemText>{children}</Select.ItemText>
      <div ref={iconRef} className="absolute left-0 inline-flex w-[25px] items-center justify-center">
        <CheckIcon className="h-4 w-4" />
      </div>{' '}
    </Select.Item>
  );
};

export default Language;
