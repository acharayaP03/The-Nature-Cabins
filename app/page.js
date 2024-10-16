import Link from 'next/link';

export default async function Home() {
	return (
		<div>
			<h1>The Nature Cabin, your next destination where you can relax and revive.</h1>
			<Link href='/cabins'>Explore luxury cabins</Link>
		</div>
	);
}
