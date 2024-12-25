"use client";

import { updateGuestProfile } from "@/app/_lib/guest.actions";
import { FormStatusButton } from "@/app/_sharedUI/FormStatusButton";
import FormInput from "@/app/_sharedUI/FormInput";

export default function UpdateProfileForm({ guest, children }) {
  const {
    full_name: fullName,
    email,
    national_id: nationalID,
    country_flag: countryFlag,
  } = guest;

  return (
    <form
      action={updateGuestProfile}
      className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg"
    >
      <div className="space-y-2">
        <FormInput
          label="Full name"
          type="text"
          defaultValue={fullName}
          disabled
          name="fullName"
        />
      </div>

      <div className="space-y-2">
        <FormInput
          label="Email address"
          type="email"
          defaultValue={email}
          disabled
          name="email"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-5 rounded-sm"
          />
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <FormInput
          label="National ID number"
          type="text"
          defaultValue={nationalID}
          name="nationalID"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <FormStatusButton label="Update profile" />
      </div>
    </form>
  );
}
