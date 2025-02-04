"use server";

import { redirect } from "next/navigation";
import supabase from "./supabase";
import { auth } from "./auth";
import { getBookings } from "./data-service";
import { errorHandler } from "./utils";
import { revalidatePath } from "next/cache";

export async function updateReservation(formData) {
  // Ensure the user is authenticated
  const session = await auth();
  if (!session) errorHandler("You must be logged in to delete a reservation.");

  // prevent unauthorized users from deleting reservations
  // only allow the guest who made the reservation to delete it
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  const updateReservationData = {
    num_guests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };
  const bookingId = Number(formData.get("bookingId"));
  if (!guestBookingIds.includes(bookingId)) {
    errorHandler("You are not authorized to update this reservation.");
  }

  const { data, error } = await supabase
    .from("bookings")
    .update(updateReservationData)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) {
    console.error(error);
    errorHandler(
      "Reservation could not be updated at this time, please try again later.",
    );
  }

  // revalidate all path including the child route.
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}
