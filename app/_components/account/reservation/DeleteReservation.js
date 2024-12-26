"use client";

/**
 * @description Delete a reservation
 * inorder to envoke deleteReservation function, we must make this component as a client side component
 * Since this is inside the server component, button click must be interactive and only  "use client" enabled
 * the component can be interactive.
 *
 * for loading state trnasition, we will use useTransition hook
 * which will allow us to show a loading spinner while the reservation is being deleted
 * caustion only user it when there is state heavy operation
 */
import { useTransition } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteReservation } from "@/app/_lib/guest.actions";
import SpinnerMini from "@/app/_components/SpinnerMini";

export default function DeleteReservation({ bookingId }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?")) {
      startTransition(() => {
        deleteReservation(bookingId);
      });
    }
  }
  return (
    <button
      onClick={handleDelete}
      className="group flex flex-grow items-center gap-2 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900"
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
          <span className="mt-1">Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}
