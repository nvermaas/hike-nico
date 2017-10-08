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
            hikeResults: filterHikeList('Sweden',20),
        };
    }

    handleSearchChange = (event) => {
        console.log(event.target.value)
        this.state = {
            hikeResults: filterHikeList(event.target.value, 20),
        };
    }

    render() {
        console.log("App.render()")
        return (
            <div>
                <Navbar inverse fixedTop>
                    <Grid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/">Nico-Hike</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                    </Grid>
                </Navbar>
                <Jumbotron>
                    <Header/>
                    <h2>{this.state.hikeResults.length}</h2>
                    <SearchInput
                        changeSearchText={this.handleSearchChange}
                    />
                    <HikeResults
                        hikesData={this.state.hikeResults}
                    />

                </Jumbotron>
            </div>
        );
    }
}

export default App;
