import { getCabins } from '@/app/_lib/data-service';
import CabinCard from './CabinCard';

export default async function CabinList({ filter }) {
	const cabins = await getCabins();
	if (!cabins.length) return null;

	let displayFilteredCabins;
	if (filter === 'all') {
		displayFilteredCabins = cabins;
	}
	if (filter === 'small') {
		displayFilteredCabins = cabins.filter((cabin) => cabin.max_capacity <= 3);
	}
	if (filter === 'medium') {
		displayFilteredCabins = cabins.filter(
			(cabin) => cabin.max_capacity >= 4 && cabin.max_capacity <= 7,
		);
	}
	if (filter === 'large') {
		displayFilteredCabins = cabins.filter((cabin) => cabin.max_capacity >= 8);
	}
	return (
		<div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
			{displayFilteredCabins.map((cabin) => (
				<CabinCard cabin={cabin} key={cabin.id} />
			))}
		</div>
	);
}
