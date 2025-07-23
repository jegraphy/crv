import ComingSoon from '@/components/ComingSoon';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #131825 0%, #17253e 100%)',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: 0,
        padding: 0
      }}
    >
      <ComingSoon />
      <Footer />
    </main>
  );
}
