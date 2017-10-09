import React from 'react';

import './App.css';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import filterHikeList from './functions/FilterHikeList';
import filterTripDetails from './functions/FilterTripDetails';
import Hikes from './components/Hikes';
import TripDetails from './components/TripDetails';

const API_HIKELIST_URL = "http://uilennest.net/owlsnest/hiking/rest/"
const API_TRIPDETAILS_URL = "http://uilennest.net/owlsnest/hiking/tripdetails/"
const MAX_HIKES = 100
const MAX_DETAILS = 1000

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredHikeResults: filterHikeList('',[],MAX_HIKES),
            fetchedHikeList: [],
            filteredTripDetails: filterTripDetails('',[],MAX_DETAILS),
            fetchedTripDetails: [],
        };
    }

    // get the hike list from the rest api
    fetchHikeList = () => {
        fetch(API_HIKELIST_URL)
            .then(results => {
                return results.json();
            }).then(data => {
            let myData = data.results;
            this.setState({fetchedHikeList: myData})
            this.setState({
                filteredHikeResults: filterHikeList("", this.state.fetchedHikeList, MAX_HIKES),
            });
        })
    }

    // get the hike list from the rest api
    fetchTripDetails = () => {
        fetch(API_TRIPDETAILS_URL)
            .then(results => {
                return results.json();
            }).then(data => {
            let myData = data.results;
            this.setState({fetchedTripDetails: myData})
            this.setState({
                filteredTripDetails: filterTripDetails("", this.state.fetchedTripDetails, MAX_DETAILS),
            });
        })
    }

    handleSearchChangeHikes = (event) => {
        console.log(event.target.value)
        this.setState({
            filteredHikeResults: filterHikeList(event.target.value.toUpperCase(), this.state.fetchedHikeList, MAX_HIKES),
        });
    }

    handleSearchChangeTripDetails = (event) => {
        console.log(event.target.value)
        this.setState({
            filteredTripDetails: filterTripDetails(event.target.value.toUpperCase(), this.state.fetchedTripDetails, MAX_DETAILS),
        });
        console.log('handleSearchChangeTripDetails : '+this.state.filteredTripDetails.length)

    }

    // fetch the data from the hiking api
    componentWillMount() {
        console.log("componentWillMount()")
        this.fetchHikeList()
        this.fetchTripDetails()
    }

    render() {

        // removed from <div>
        // <SearchInput changeSearchText={this.handleSearchChangeTripDetails}/>
        // <TripDetails data={this.state.filteredTripDetails}/>
        console.log("App.render()")
        return (
            <div>
                <Jumbotron>
                    <Header/>
                    <SearchInput changeSearchText={this.handleSearchChangeHikes}/>
                    <Hikes data={this.state.filteredHikeResults}/>

                </Jumbotron>
            </div>
        );
    }
}

export default App;
