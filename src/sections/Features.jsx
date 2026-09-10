import FeatureCard from "../components/FeatureCard";

const features = [
	{
		icon: "⚡",
		title: "Mabilis",
		description: "Optimized para sa performance mula umpisa pa lang.",
	},
	{
		icon: "🔒",
		title: "Secure",
		description: "Enterprise-grade security sa bawat account.",
	},
	{
		icon: "📈",
		title: "Scalable",
		description: "Lumalaki kasabay ng negosyo mo, walang hassle.",
	},
];

function Features() {
	return (
		<section id="features" className="px-6 py-20 max-w-5xl mx-auto">
			<h2 className="text-3xl font-bold text-center mb-12">
				Bakit Piliin ang MyBrand
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{features.map((feature) => (
					<FeatureCard
						key={feature.title}
						icon={feature.icon}
						title={feature.title}
						description={feature.description}
					/>
				))}
			</div>
		</section>
	);
}

export default Features;
