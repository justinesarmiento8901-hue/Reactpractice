import PricingCard from "../components/PricingCard";

const plans = [
	{
		plan: "Starter",
		price: "₱499",
		features: ["1 Project", "Basic Support", "5GB Storage"],
		highlighted: false,
	},
	{
		plan: "Pro",
		price: "₱999",
		features: ["5 Projects", "Priority Support", "50GB Storage"],
		highlighted: true,
	},
	{
		plan: "Business",
		price: "₱1999",
		features: ["Unlimited Projects", "24/7 Support", "500GB Storage"],
		highlighted: false,
	},
];

function Pricing() {
	return (
		<section id="pricing" className="px-6 py-20 max-w-5xl mx-auto">
			<h2 className="text-3xl font-bold text-center mb-12">
				Simple, Transparent Pricing
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
				{plans.map((p) => (
					<PricingCard key={p.plan} {...p} />
				))}
			</div>
		</section>
	);
}

export default Pricing;
