"use client";

/**
 * @description Delete a reservation
 * inorder to envoke deleteReservation function, we must make this component as a client side component
 * Since this is inside the server component, button click must be interactive and only  "use client" enabled
 * the component can be interactive.
 */
import { TrashIcon } from "@heroicons/react/24/solid";

export default function DeleteReservation({ bookingId }) {
  return (
    <button
      onClick={() => deleteReservation(bookingId)}
      className="group flex flex-grow items-center gap-2 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900"
    >
      <TrashIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
      <span className="mt-1">Delete</span>
    </button>
  );
}
