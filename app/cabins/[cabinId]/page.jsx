import Image from 'next/image';
import { EyeSlashIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/solid';
import {getBookedDatesByCabinId, getCabin, getCabins, getSettings} from '@/app/_lib/data-service';
import { DateSelector, ReservationForm, TextExpander, Reservation } from '@/app/_components/cabins';
import {Suspense} from "react";
import Spinner from "@/app/_components/Spinner.js";
import Cabin from "@/app/_components/cabins/Cabin.js";



// generate dynamic metadata
export async function generateMetadata({ params }) {
	const cabin = await getCabin(params.cabinId);
	return {
		title: `Cabin ${cabin.name} |`,
		description: cabin.description,
	};
}

/**
 * @description Generate static paths for all cabins
 * this will allow us to pre generate all the pages for each cabin in the cabins array
 * @returns
 */
export async function generateStaticParams() {
	const cabins = await getCabins();
	return cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
}
export default async function Page({ params }) {

	const cabin = await getCabin(params.cabinId);
	const { name, max_capacity: maxCapacity, description, image } = cabin;

	return (
		<div className=' mx-auto mt-8'>

			<Cabin description={description} image={image} maxCapacity={maxCapacity} name={name} />
			<div>
				<h2 className='text-5xl font-semibold text-center text-accent-400 mb-10'>
					Reserve {name} today. Pay on arrival.
				</h2>
				<Suspense fallback={<Spinner/>}>
					<Reservation cabin={cabin}/>
				</Suspense>
			</div>
		</div>
	);
}
