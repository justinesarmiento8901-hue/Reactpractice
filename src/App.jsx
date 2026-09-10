import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import CTA from "./sections/CTA";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";

function App() {
	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<Hero />
			<Features />
			<Pricing />
			<CTA />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
