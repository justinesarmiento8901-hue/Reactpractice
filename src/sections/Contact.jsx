import { useState } from "react";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log("Form submitted:", formData);
		alert("Salamat! Makokontak ka namin sa lalong madaling panahon.");
		setFormData({ name: "", email: "", message: "" });
	}

	return (
		<section id="contact" className="px-6 py-20 max-w-2xl mx-auto">
			<h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
			<p className="text-gray-600 text-center mb-10">
				May tanong ka ba? Mag-iwan ng message at makokontak ka namin agad.
			</p>

			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label for="name" className="block text-sm font-medium mb-1">
						Pangalan
					</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
					/>
				</div>

				<div>
					<label for="email" className="block text-sm font-medium mb-1">
						Email
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
					/>
				</div>

				<div>
					<label for="message" className="block text-sm font-medium mb-1">
						Message
					</label>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						rows="4"
						className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
				>
					Send Message
				</button>
			</form>
		</section>
	);
}

export default Contact;
