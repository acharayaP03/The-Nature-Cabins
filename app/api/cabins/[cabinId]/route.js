import {getBookedDatesByCabinId, getCabin} from "@/app/_lib/data-service.js";

/**
 * inorder to create an api route, you need to export a function named `GET` or `POST`, this really needs to be http verb
 * @param request
 * @param params
 * @returns {Promise<Response>}
 * @constructor
 */
export async function GET(request, { params }) {

    const { cabinId } = params;

    try {
        const [cabin, bookedDates] = await Promise.all([
            getCabin(cabinId),
            getBookedDatesByCabinId(cabinId),
        ])

        return Response.json({cabin, bookedDates})
    } catch (error) {
        return Response.json({error: error.message}, {status: 500})
    }
}