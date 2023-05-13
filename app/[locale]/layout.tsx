import { createTranslator, NextIntlClientProvider } from 'next-intl';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import Footer from '../components/footer';
import Header from '../components/header';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

const mplus = localFont({
  src: [
    {
      path: '../../public/fonts/MPLUSRounded1c-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MPLUSRounded1c-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MPLUSRounded1c-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MPLUSRounded1c-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MPLUSRounded1c-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MPLUSRounded1c-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MPLUSRounded1c-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-mplus',
});

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = (await import(`../../messages/${locale}.json`)).default;

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages });

  return {
    title: t('root.title'),
  };
}

const LocaleLayout = async ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
  params: { locale },
}: Props): Promise<React.ReactNode> => {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={mplus.variable}>
      <body className="bg-orange-50 dark:bg-zinc-800 dark:text-zinc-200">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
