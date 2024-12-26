"use server";

import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import supabase from "./supabase";
import { getBookings } from "./data-service";
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

/**
 * @description Delete a reservation
 */

export async function deleteReservation(bookingId) {
  // Ensure the user is authenticated
  const session = await auth();
  if (!session) errorHandler("You must be logged in to delete a reservation.");

  // prevent unauthorized users from deleting reservations
  // only allow the guest who made the reservation to delete it
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId)) {
    errorHandler("You are not authorized to delete this reservation.");
  }

  const { data, error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    errorHandler("Reservation could not be deleted");
  }

  // revalidate cache after deleting the reservation
  revalidatePath("/account/reservations");
}
