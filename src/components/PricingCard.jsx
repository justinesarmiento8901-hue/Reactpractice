function PricingCard({ plan, price, features, highlighted }) {
	return (
		<div
			className={`p-8 rounded-xl border ${
				highlighted ? "border-blue-600 shadow-lg scale-105" : "border-gray-200"
			}`}
		>
			{highlighted && (
				<span className="text-xs font-semibold text-blue-600 uppercase">
					Most Popular
				</span>
			)}
			<h3 className="text-xl font-bold mt-2">{plan}</h3>
			<p className="text-4xl font-extrabold my-4">
				{price}
				<span className="text-base font-normal text-gray-500">/mo</span>
			</p>
			<ul className="space-y-2 mb-6">
				{features.map((f) => (
					<li key={f} className="text-gray-600 flex items-center gap-2">
						<span className="text-blue-600">✓</span> {f}
					</li>
				))}
			</ul>
			<button
				type="button"
				className={`w-full py-3 rounded-lg font-semibold ${
					highlighted
						? "bg-blue-600 text-white hover:bg-blue-700"
						: "border border-gray-300 hover:bg-gray-50"
				}`}
			>
				Choose Plan
			</button>
		</div>
	);
}

export default PricingCard;
