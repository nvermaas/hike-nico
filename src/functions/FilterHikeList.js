/**
 * Created by Vermaas on 10/8/2017.
 */
import myHikeList from '../assets/myHikeList.json';

export default function filterHikeList(searchText, maxResults) {
    console.log("filterHikeList("+searchText+")")
    return myHikeList.filter((hike) => {
        if (hike.title.toUpperCase().includes(searchText)) {

            return true;
        }
        if (hike.place.toUpperCase().includes(searchText)) {
            return true;
        }
        if (hike.country.toUpperCase().includes(searchText)) {
            return true;
        }
        if (hike.year.toString().includes(searchText)) {
            return true;
        }
        return false;
    }).slice(0, maxResults);
}
