import { Disclosure, Transition } from '@headlessui/react';
import {
	ChevronDownIcon,
	ChevronRightIcon,
	LocationMarkerIcon,
	LogoutIcon,
	XIcon,
} from '@heroicons/react/outline';
import { ActionIcon, Burger, Divider } from '@mantine/core';
import { Route } from '@utils/types/Route';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

const RouteLink: React.FC<{
	route: Route;
	size?: 'normal' | 'sm';
}> = ({ route, size = 'normal' }) => {
	const router = useRouter();

	const inPath = useCallback(() => {
		if (!route.href) {
			return router.pathname
				.split('/')
				.filter((a) => a !== '')
				.includes(route.key);
		}

		if (route.href === '/') return router.pathname === route.href;

		const _route = route.href.split('/');

		return router.pathname
			.split('/')
			.filter((a) => a !== '')
			.includes(_route[_route.length - 1]);
	}, [router]);

	const routeContent = (
		<li
			className={`pl-6 flex w-full px-4 py-4 justify-between ${
				inPath()
					? 'text-gray-100 bg-gray-900 bg-opacity-40'
					: 'text-gray-400 hover:text-gray-300'
			} transition duration-200 ease-in-out cursor-pointer items-center text-sm lg:text-base`}
		>
			{inPath() && (
				<span className="h-12 absolute left-0 bg-yellow-500 w-0.5 rounded-lg" />
			)}

			<div className="flex items-center gap-2">
				{route.Icon && (
					<route.Icon
						className={`h-7 w-7  ${inPath() && 'text-yellow-500'}`}
					/>
				)}

				{size === 'normal' ? (
					<span className=" text-md font-medium">{route.label}</span>
				) : (
					<span className=" text-sm ">{route.label}</span>
				)}
			</div>
		</li>
	);

	const renderRoute = route.default ? (
		<Link href={route.href} key={route.href}>
			{routeContent}
		</Link>
	) : (
		<>
			<Disclosure defaultOpen={inPath()}>
				{({ open }) => (
					<>
						<Disclosure.Button
							className={`${
								(open || inPath()) && 'text-white'
							}  pl-6 flex w-full px-4 py-4 justify-between 
							transition-all duration-200 ease-in-out ${
								!open &&
								!inPath() &&
								'text-gray-500 hover:text-gray-100'
							} cursor-pointer items-center text-sm `}
						>
							<div className="flex items-center gap-2">
								{route.Icon && (
									<route.Icon
										className={`h-7 w-7  ${
											inPath() && 'text-yellow-500'
										}`}
									/>
								)}

								<span className={`text-md font-medium`}>
									{route.label}
								</span>
							</div>

							{open ? (
								<ChevronDownIcon className="w-6 h-6 " />
							) : (
								<ChevronRightIcon className="w-6 h-6" />
							)}
						</Disclosure.Button>

						<Transition
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
						>
							<Disclosure.Panel className="">
								<ul
									aria-orientation="vertical"
									className="z-50"
								>
									{route.subRoutes.map((route) => (
										<RouteLink
											route={route}
											key={route.href}
											size="sm"
										/>
									))}
								</ul>
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>
		</>
	);

	return <React.Fragment key={route.href}> {renderRoute} </React.Fragment>;
};

interface SidebarLayoutProps {
	routes: Route[];
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children, routes }) => {
	const [show, setShow] = useState(false);

	const signOut = async () => {};

	return (
		<>
			<div className="bg-gray-200 pb-10 min-h-screen">
				{/* Sidebar */}
				<aside className="fixed z-50 left-0 top-0 w-48 h-screen  bg-gray-800 hidden xl:block ">
					<div className="h-16 w-full flex items-center gap-1 px-4 text-yellow-500">
						<span className="font-bold text-lg">Name</span>
					</div>
					<ul aria-orientation="vertical" className=" py-6 z-50">
						{routes.map((route) => (
							<RouteLink route={route} />
						))}

						<Divider className="my-1 " />

						<li
							onClick={() => signOut()}
							className={`pl-6 flex w-full px-4 py-4 justify-between text-gray-500 hover:text-gray-400 transition duration-200 ease-in-out  cursor-pointer items-center text-sm lg:text-base`}
						>
							<div className="flex items-center gap-2 text-gray-400 hover:text-gray-300">
								<LogoutIcon className="h-7 w-7 lg:h-5 lg:w-5" />

								<span className=" text-md font-medium">
									Logout
								</span>
							</div>
						</li>
					</ul>
				</aside>

				{/* Mobile Side Bar */}
				<div
					className={`
							${
								show
									? ' w-64 xl:w-96 h-full fixed z-50  transform  translate-x-0 '
									: ' w-full h-full fixed z-40  transform -translate-x-full'
							} transition ease-in-out duration-500 xl:-translate-x-full `}
				>
					<div className="absolute z-40 sm:relative w-64 md:w-80  shadow pb-4 bg-gray-800 xl:hidden transition duration-150 ease-in-out h-full">
						<div className="flex flex-col justify-between h-full w-full pb-0">
							<div>
								<div className="flex items-center justify-between px-2 pr-4">
									<div className="h-16 w-full flex items-center gap-1 text-orange-500">
										<LocationMarkerIcon className="w-8 h-8 " />
										<span className="font-bold text-lg">
											Inn Stop
										</span>
									</div>
									<div className="flex items-center justify-center">
										<ActionIcon
											onClick={() => setShow(false)}
										>
											<XIcon className="text-gray-800 w-6 h-6" />
										</ActionIcon>
									</div>
								</div>
								<ul
									aria-orientation="vertical"
									className=" py-6"
								>
									{routes.map((route) => (
										<RouteLink
											route={route}
											key={route.href}
										/>
									))}

									<Divider className="my-2" />

									<li
										onClick={() => signOut()}
										className={`pl-6 flex w-full px-4 py-4 justify-between text-gray-500 hover:text-gray-400 transition duration-200 ease-in-out  cursor-pointer items-center text-sm lg:text-base`}
									>
										<div className="flex items-center gap-2">
											<LogoutIcon className="h-7 w-7 lg:h-5 lg:w-5" />

											<span className=" text-md font-medium">
												Sign Out
											</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Mobile Side Bar Overlay */}
				<div
					className={`xl:hidden  z-40 xl:invisible bg-gray-800 transition-opacity ease-linear duration-300 opacity-${
						show ? '50' : '0'
					}  w-${show ? 'full' : '0'} min-h-screen fixed`}
					onClick={() => setShow(false)}
				/>

				{/* Page title starts */}
				<div className="bg-gray-800 pt-8 pb-16 relative ">
					<div className="container px-8 mx-auto flex flex-row items-center justify-between">
						<div className="flex-col flex lg:flex-row items-start lg:items-center">
							<div className="flex items-center px-12"></div>
							<div className="ml-0 lg:ml-20 my-6 lg:my-0">
								<h4 className="text-2xl font-bold leading-tight text-white mb-2">
									<span className="ml-0 flex flex-col items-start justify-center">
										<span className="text-sm font-normal">
											Logged in as
										</span>
										<b className="text-gray-200 text-sm ">
											Username
										</b>
									</span>
								</h4>
							</div>
						</div>

						<span className="block xl:hidden">
							<Burger
								color={'white'}
								onClick={() => setShow(!show)}
								opened={show}
							/>
						</span>
					</div>
				</div>

				{/* Page title ends */}
				<div className="container px-4 mx-auto xl:mx-0 xl:ml-64">
					<div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full p-2">
						{children}
					</div>
				</div>
			</div>
		</>
	);
};

export default SidebarLayout;
