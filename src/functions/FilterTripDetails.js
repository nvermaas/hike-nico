/**
 * Created by Vermaas on 10/8/2017.
 */

export default function filterTripDetails(searchText, fetchedTripDetails, maxResults) {
    console.log("filterTripDetails("+searchText+")")

    return fetchedTripDetails.filter((tripdetail) => {
        if (tripdetail.title.toUpperCase().includes(searchText)) {

            return true;
        }
        if (tripdetail.description.toUpperCase().includes(searchText)) {
            return true;
        }
        if (tripdetail.kind.toUpperCase().includes(searchText)) {
            return true;
        }
        return false;
    }).slice(0, maxResults);
}
