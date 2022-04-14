import { Reveal } from 'react-awesome-reveal';

const features = [
	{
		name: 'Competitive exchange rates',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
	},
	{
		name: 'No hidden fees',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
	},
	{
		name: 'Transfers are instant',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
	},
	{
		name: 'Mobile notifications',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
	},
];

export default function FeatureSection() {
	return (
		<div
			className="py-16 bg-gray-100 -mt-5 z-50 relative left-0 right-0 rounded-t-3xl rounded-b-3xl"
			style={{
				boxShadow: `0 -10px 25px 0 #444444547`,
			}}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:text-center">
					<h2 className="text-3xl text-green-400 font-semibold tracking-wide uppercase">
						What we do
					</h2>
					<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						A better way to communicate
					</p>
					<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
						Lorem ipsum dolor sit amet consect adipisicing elit.
						Possimus magnam voluptatum cupiditate veritatis in
						accusamus quisquam.
					</p>
				</div>

				<Reveal triggerOnce>
					<div className="mt-10">
						<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
							{features.map((feature) => (
								<div key={feature.name} className="relative">
									<dt>
										<div className="absolute shadow-md flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
											{/* <feature.icon
												className="h-6 w-6"
												aria-hidden="true"
											/> */}
										</div>
										<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
											{feature.name}
										</p>
									</dt>
									<dd className="mt-2 ml-16 text-base text-gray-500">
										{feature.description}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</Reveal>
			</div>
		</div>
	);
}
