import { Popover } from '@headlessui/react';

import { Fade } from 'react-awesome-reveal';

export default function Header() {
	return (
		<Popover className="absolute top-0 left-0 right-0 z-50 ">
			<Fade triggerOnce>
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="flex justify-between items-center  py-6 md:space-x-10">
						<div className="flex justify-start lg:w-0 lg:flex-1">
							<a href="#">
								<span className="sr-only">Workflow</span>
								<img
									className="h-8 w-auto sm:h-10"
									src="https://cdn.pixabay.com/photo/2020/05/01/18/59/medicine-5118692_960_720.png"
									alt=""
								/>
							</a>
						</div>
						<div className="flex justify-center lg:w-0 lg:flex-1 gap-4">
							<a href="#">
								<span className="opacity-80 hover:opacity-50  text-white font-bold">
									Workflow
								</span>
							</a>
							<a href="#">
								<span className="opacity-80 hover:opacity-50  text-white font-bold">
									Workflow
								</span>
							</a>
							<a href="#">
								<span className="opacity-80 hover:opacity-50  text-white font-bold">
									Workflow
								</span>
							</a>
						</div>
					</div>
				</div>
			</Fade>
		</Popover>
	);
}
