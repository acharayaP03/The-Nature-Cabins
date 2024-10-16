'use client';
import { useState } from 'react';

export default function Counter({ users }) {
	const [count, setCount] = useState(0);

	console.log('users:', users);
	return (
		<div>
			<p>Client Component...</p>
			<p>There are {users.length} user availabel.. </p>
			<button onClick={() => setCount((c) => c + 1)}>{count}</button>
		</div>
	);
}
