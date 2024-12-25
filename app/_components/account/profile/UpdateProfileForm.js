'use client';

import { DefaultButton } from '@/app/_sharedUI/DefaultButton';
import FormInput from '@/app/_sharedUI/FormInput';

export default function UpdateProfileForm({ guest, children }) {
	console.log(guest);
	const { full_name: fullName, email, national_id: nationalID, country_flag: countryFlag } = guest;

	return (
		<form className='bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col'>
			<div className='space-y-2'>
				<FormInput label='Full name' type='text' defaultValue={fullName} disabled />
			</div>

			<div className='space-y-2'>
				<FormInput label='Email address' type='email' defaultValue={email} disabled />
			</div>

			<div className='space-y-2'>
				<div className='flex items-center justify-between'>
					<label htmlFor='nationality'>Where are you from?</label>
					<img src={countryFlag} alt='Country flag' className='h-5 rounded-sm' />
				</div>
				{children}
			</div>

			<div className='space-y-2'>
				<FormInput label='National ID number' type='text' defaultValue={nationalID} />
			</div>

			<div className='flex justify-end items-center gap-6'>
				<DefaultButton label='Update profile' />
			</div>
		</form>
	);
}
