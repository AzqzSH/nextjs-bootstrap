import React from 'react';
import SidebarWithNav from '../../../layout/SidebarWithNav';
import TextField from '../../../components/TextField';
import {
	BeakerIcon,
	ChatAltIcon,
	IdentificationIcon,
} from '@heroicons/react/solid';
import Button from '../../../components/Button';
import { Fade } from 'react-awesome-reveal';

const StartCase = () => {
	return (
		<SidebarWithNav routePath="doctorRoutes" showBack>
			<Fade className="w-full h-full">
				<div className="bg-gray-50 w-full min-h-full p-4 shadow-sm rounded-lg flex flex-col justify-between">
					<div>
						<div className="w-full px-4 py-2 overflow-hidden border-b border-gray-300">
							<h1 className="text-xl lg:text-2xl  font-semibold">
								Case Form
							</h1>
							<h3 className="text-md lg:text-lg font-normal text-gray-500 ">
								A Pharmacist Will Get In Touch As Soon As
								Possible!
							</h3>
						</div>
						<div className="flex flex-col gap-4 mt-4 w-full">
							<div className="flex flex-row gap-8 w-full">
								<TextField
									leftElement={
										<div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full ">
											<svg
												viewBox="0 0 24 24"
												width="24"
												height="24"
												stroke="currentColor"
												strokeWidth="2"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="h-5 w-5"
											>
												<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
												<circle
													cx="12"
													cy="7"
													r="4"
												></circle>
											</svg>
										</div>
									}
									value="Abdulaziz Houtari"
									disabled
									label="Patient Name"
								/>
								<TextField
									leftElement={
										<IdentificationIcon className="w-6 h-6 text-gray-600" />
									}
									value="17003"
									disabled
									label="Patient ID"
								/>
							</div>
							<TextField
								area
								rows={5}
								type="text"
								label="Case Description"
								placeholder="Describe Your Problem..."
							/>
							<TextField
								leftElement={
									<BeakerIcon className="w-6 h-6 text-gray-600" />
								}
								label="Medication In Question"
								placeholder="Enter The Medication Name..."
							/>
						</div>
					</div>

					<div className="flex flex-row justify-end">
						<Button
							text="Send Case"
							leftElement={<ChatAltIcon className="w-6 h-6" />}
							bg="red"
							className="w-full md:w-48"
						/>
					</div>
				</div>
			</Fade>
		</SidebarWithNav>
	);
};

export default StartCase;
