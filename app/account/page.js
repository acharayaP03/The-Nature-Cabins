export const metadata = {
	title: 'Account',
	description: 'Manage your account',
};
export default function Page() {
	return (
		<div>
			<h2 className='font-semibold text-2xl text-accent-400 mb-7'>Welcome, %username%</h2>
		</div>
	);
}
