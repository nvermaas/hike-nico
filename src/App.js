import React from 'react';

import './App.css';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import filterHikeList from './functions/FilterHikeList';
import HikeResults from './components/HikeResults';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hikeResults: filterHikeList('2017',20),
        };
    }

    handleSearchChange = (event) => {
        console.log(event.target.value)
        this.setState({
            hikeResults: filterHikeList(event.target.value.toUpperCase(), 20),
        });
        console.log('handleSearchChange : '+this.state.hikeResults.length)

    }

    render() {
        console.log("App.render()")
        return (
            <div>
                <Jumbotron>
                    <Header/>
                    <SearchInput
                        changeSearchText={this.handleSearchChange}
                    />
                    <HikeResults
                        hikeData={this.state.hikeResults}
                    />

                </Jumbotron>
            </div>
        );
    }
}

export default App;
