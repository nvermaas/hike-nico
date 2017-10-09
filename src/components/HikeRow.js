/**
 * Created by Vermaas on 10/8/2017.
 */
import React from 'react';
import './HikeRow.css';
import PropTypes from 'prop-types';

class HikeResultRow extends React.Component {
    render() {
        let url = "http://uilennest.net/owlsnest/hiking/" + this.props.id
        return (
            <div className="component-hike-result-row">
                <a href={this.props.hike_image_url}>

                <img
                    alt={this.props.title}
                    src={this.props.hike_image_url}
                />
                </a>
                <span className="title">

                <a href = {url}>
                {this.props.title} - {this.props.year} - {this.props.place} - {this.props.date} - {this.props.duration}
                </a>
                </span>
            </div>
        );
    }
}
HikeResultRow.propTypes = {
    title: PropTypes.string,
    place: PropTypes.string,
    hike_image_url: PropTypes.string,
};
export default HikeResultRow;