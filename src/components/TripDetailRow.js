/**
 * Created by Vermaas on 10/8/2017.
 */
import React from 'react';
import './TripDetailRow.css';
import PropTypes from 'prop-types';

class TripDetailsResultRow extends React.Component {
    render() {
        let url = "http://uilennest.net/owlsnest/hiking/tripdetails/" + this.props.id
        return (
            <div className="component-tripdetails-result-row">
                <a href={this.props.details_url}>

                <img
                    alt={this.props.title}
                    src={this.props.details_url}
                />
                </a>
                <span className="title">

                <a href = {url}>
                {this.props.title} - {this.props.description} - {this.props.kind}
                </a>
                </span>
            </div>
        );
    }
}
TripDetailsResultRow.propTypes = {
    title: PropTypes.string,
    place: PropTypes.string,
    hike_image_url: PropTypes.string,
};
export default TripDetailsResultRow;