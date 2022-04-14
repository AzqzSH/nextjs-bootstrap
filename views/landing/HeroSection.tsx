import React from 'react';
import { Background, Parallax } from 'react-parallax';
import { Reveal } from 'react-awesome-reveal';
import Link from 'next/link';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = ({}) => {
	return (
		<Parallax
			strength={400}
			className="h-128 md:h-screenX justify-center items-center pb-12 bg-gray-100"
		>
			<Background className="bg-hero-pattern bg-cover h-128 md:h-screenX">
				<div
					className="absolute top-0 -bottom-0 left-0 right-0 w-screen "
					style={{
						backgroundImage:
							'linear-gradient(rgba(0, 0, 0, 0.5), rgba(176, 248, 198, 0.3))',
						backgroundRepeat: 'no-repeat',
					}}
				/>
				<div className="w-screen h-screen pt-32 md:pt-12 px-4">
					<div className="max-w-7xl mx-auto ">
						<div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
							<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
								<Reveal triggerOnce>
									<div className="sm:text-center lg:text-left ">
										<h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
											<b className="block xl:inline">
												Ask The Pharmacist
											</b>{' '}
											<span className="block text-red-400 xl:inline">
												new startup
											</span>
										</h1>
										<p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
											Anim aute id magna aliqua ad ad non
											deserunt sunt. Qui irure qui lorem
											cupidatat commodo. Elit sunt amet
											fugiat veniam occaecat fugiat
											aliqua.
										</p>

										<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
											<div className="rounded-md shadow">
												<Link href="/login">
													<a className="shadow-lg w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-500 md:py-4 md:text-lg md:px-10">
														Get in touch
													</a>
												</Link>
											</div>
										</div>
									</div>
								</Reveal>
							</main>
						</div>
					</div>
				</div>
			</Background>
		</Parallax>
	);
};

export default HeroSection;
