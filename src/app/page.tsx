import ComingSoon from '@/components/ComingSoon';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen justify-between">
      <ComingSoon />
      <Footer />
    </main>
  );
}
