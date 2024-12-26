"use server";

import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import supabase from "./supabase";
import { errorHandler } from "./utils";

export async function updateGuestProfile(formData) {
  const session = await auth();

  if (!session) errorHandler("You must be logged in to update your profile.");

  const [nationality, countryFlag] = formData.get("nationality").split("%");

  const nationalID = formData.get("nationalID");
  if (!/^[a-zA-Z-0-9]{6,12}$/.test(nationalID))
    errorHandler(
      "Invalid national ID number. Please provide a valid ID number.",
    );
  const updateData = {
    nationality,
    country_flag: countryFlag,
    national_id: nationalID,
  };

  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    console.error(error);
    errorHandler("Guest could not be updated");
  }

  // revalidate cache after updating the guest profile
  revalidatePath("/account/profile");
}
