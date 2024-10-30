import { Suspense } from 'react';
import CabinList from '@/app/_components/cabins/CabinList';
import CabinFilter from '@/app/_components/cabins/CabinFilter';
import Spinner from '@/app/_components/Spinner';

export const metadata = {
	title: 'Cabins',
	description: 'Explore luxury cabins',
};

/**
 *
 * @param {searchParams} params passed in from the URL query, only available in pages
 * @returns
 */
export default async function Page({ searchParams }) {
	const filter = searchParams?.capacity ?? 'all';
	return (
		<div>
			<h1 className='text-4xl mb-5 text-accent-400 font-medium'>Our Luxury Cabins</h1>
			<p className='text-primary-200 text-lg mb-10'>
				Cozy yet luxurious cabins, located right in the heart of the Italian Dolomites. Imagine
				waking up to beautiful mountain views, spending your days exploring the dark forests around,
				or just relaxing in your private hot tub under the stars. Enjoy nature&apos;s beauty in your
				own little home away from home. The perfect spot for a peaceful, calm vacation. Welcome to
				paradise.
			</p>
			<div className='flex justify-end mb-8'>
				<CabinFilter />
			</div>
			<Suspense fallback={<Spinner />} key={filter}>
				<CabinList filter={filter} />
			</Suspense>
		</div>
	);
}
