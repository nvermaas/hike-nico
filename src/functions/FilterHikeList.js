/**
 * Created by Vermaas on 10/8/2017.
 */
import myHikeList from '../assets/myHikeList.json';

export default function filterHikeList(searchText, maxResults) {
    return myHikeList.filter((hike) => {
        if (hike.title.includes(searchText)) {
            console.log(hike.title)
            return true;
        }
        if (hike.place.includes(searchText)) {
            return true;
        }
        if (hike.country.includes(searchText)) {
            return true;
        }
        return false;
    }).slice(0, maxResults);
}
