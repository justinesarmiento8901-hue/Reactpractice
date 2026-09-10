function Navbar() {
	return (
		<nav className="flex items-center justify-between px-8 py-4 shadow-sm">
			<span className="text-xl font-bold">MyBrand</span>
			<div className="flex gap-6">
				<a href="#features" className="hover:text-blue-600">
					Features
				</a>
				<a href="#pricing" className="hover:text-blue-600">
					Pricing
				</a>
				<a href="#contact" className="hover:text-blue-600">
					Contact
				</a>
			</div>
			<button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
				Get Started
			</button>
		</nav>
	);
}

export default Navbar;
