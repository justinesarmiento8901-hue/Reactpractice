function Hero() {
	return (
		<section className="text-center px-6 py-24 max-w-3xl mx-auto">
			<h1 className="text-5xl font-extrabold leading-tight mb-6">
				Build Your Product Faster with{" "}
				<span className="text-blue-600">MyBrand</span>
			</h1>
			<p className="text-lg text-gray-600 mb-8">
				Ang pinakamadaling paraan para ilunsad ang iyong ideya — mabilis,
				maayos, at walang stress.
			</p>
			<div className="flex justify-center gap-4">
				<button
					type="button"
					className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
				>
					Get Started Free
				</button>
				<button
					type="button"
					className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50"
				>
					Learn More
				</button>
			</div>
		</section>
	);
}

export default Hero;
