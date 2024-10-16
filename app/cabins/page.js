'use Client';
import Counter from '../_components/Counter';

export default async function Cabins() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	return (
		<div>
			<h1>the Nature Cabin</h1>

			<hr />
			<p>Client Component...</p>

			<Counter users={data} />
		</div>
	);
}
