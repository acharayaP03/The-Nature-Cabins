import { formatDistance, parseISO } from "date-fns";
export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

export function errorHandler(message) {
  throw new Error(message);
}
