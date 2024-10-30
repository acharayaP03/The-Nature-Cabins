'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const filtersLabels = [
	{
		label: 'All cabins',
		value: 'all',
	},
	{
		label: 'Small',
		value: 'small',
	},
	{
		label: 'Medium',
		value: 'medium',
	},
	{
		label: 'Large',
		value: 'large',
	},
];
export default function CabinFilter() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const activeFilter = searchParams.get('capacity') ?? 'all';

	function handleFilterClick(filter) {
		const params = new URLSearchParams(searchParams);
		params.set('capacity', filter.toLowerCase());
		router.replace(`${pathname}?${params.toString()}`);
		console.log('Filter clicked');
	}
	return (
		<div className='border border-primary-800 flex'>
			{filtersLabels.map(({ label, value }) => (
				<Button
					key={value}
					value={value}
					label={label}
					handelFilter={handleFilterClick}
					activeFilter={activeFilter}
				>
					{label}
				</Button>
			))}
		</div>
	);
}
function Button({ value, activeFilter, handelFilter, children }) {
	return (
		<button
			key={value}
			className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors font-semibold text-primary-200 ${
				value === activeFilter ? 'bg-primary-700 text-primary-50' : ''
			}`}
			onClick={() => handelFilter(value)}
		>
			{children}
		</button>
	);
}
