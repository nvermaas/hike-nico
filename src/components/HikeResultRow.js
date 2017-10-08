/**
 * Created by Vermaas on 10/8/2017.
 */
import React from 'react';
import './HikeResultRow.css';
import PropTypes from 'prop-types';

class HikeResultRow extends React.Component {
    render() {

        return (
            <div className="component-hike-result-row">
                <img
                    alt={this.props.title}
                    src={this.props.hike_image_url}
                />
                <span
                    className="title"
                >
          {this.props.title}
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