import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Chart from '../components/Chart';

export default function Home() {
  return (
    <div className="font-sans text-white">
      {/* About Section */}
      <About />

      {/* Chart Section */}
      <Chart />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
