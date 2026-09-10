function FeatureCard({ icon, title, description }) {
	return (
		<div className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
			<div className="text-3xl mb-4">{icon}</div>
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	);
}

export default FeatureCard;
