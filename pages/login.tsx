import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

const Login: React.FC<{}> = ({}) => {
	return (
		<>
			<div className="bg-hero-pattern bg-cover h-screen  absolute top-0 left-0 right-0" />
			<div
				className="absolute top-0 -bottom-0 left-0 right-0 w-screen "
				style={{
					backgroundImage:
						'linear-gradient(rgba(0, 0, 0, 0.5), rgba(176, 248, 198, 0.3))',
					backgroundRepeat: 'no-repeat',
				}}
			/>
			<Fade triggerOnce>
				<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 z-50">
					<div className="max-w-md w-full space-y-8 z-50">
						<div>
							<img
								className="mx-auto h-12 w-auto"
								src="https://cdn.pixabay.com/photo/2020/05/01/18/59/medicine-5118692_960_720.png"
								alt="Workflow"
							/>
							<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
								Sign in to your account
							</h2>
						</div>
						<form
							className="mt-8 space-y-6"
							action="#"
							method="POST"
						>
							<input
								type="hidden"
								name="remember"
								defaultValue="true"
							/>
							<div className="rounded-md shadow-sm -space-y-px">
								<div>
									<label
										htmlFor="email-address"
										className="sr-only"
									>
										Email address
									</label>
									<input
										id="email-address"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-400 focus:border-green-400  focus:z-10 sm:text-sm"
										placeholder="Email address"
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="sr-only"
									>
										Password
									</label>
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										required
										className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-400 focus:border-green-400 focus:z-10 sm:text-sm"
										placeholder="Password"
									/>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex px-1 items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 text-green-400 focus:ring-green-500 border-gray-300 rounded-full "
									/>
									<label
										htmlFor="remember-me"
										className="ml-2 block text-sm text-gray-100"
									>
										Remember me
									</label>
								</div>

								<div className="text-sm">
									<a
										href="#"
										className="font-medium text-red-400 hover:text-red-500"
									>
										Forgot your password?
									</a>
								</div>
							</div>

							<div>
								<Link href="/admin">
									<button
										type="submit"
										className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition ease-in "
									>
										<span className="absolute left-0 inset-y-0 flex items-center pl-3">
											<LockClosedIcon
												className="h-5 w-5 text-red-600 group-hover:text-red-700"
												aria-hidden="true"
											/>
										</span>
										Sign in
									</button>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</Fade>
		</>
	);
};

export default Login;
