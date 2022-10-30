import '../styles/globals.scss'
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col justify-start h-screen w-screen">
          <Navbar/>
          <div className="flex flex-col pl-2 pr-2 mx-56 h-auto">
            {children}
          </div>
          <Footer/>
        </main>
      </body>
    </html>
  );
}
