import Link from 'next/link';

export default async function Home() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return (
		<div>
			<h1>The Nature Cabin, your next destination where you can relax and revive.</h1>
			<Link href='/cabins'>Explore luxury cabins</Link>

			<h2>Users</h2>
			<ul>
				{data.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}
