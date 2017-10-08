import React from 'react';
import HikeResultRow from './HikeResultRow';
import './HikeResults.css';
import PropTypes from 'prop-types';

class HikeResults extends React.Component {
    render() {
        console.log("HikeResults.render()")
        return (
            <div className="component-hike-results">
                {
                    this.props.hikesData.map((hikesData) => {
                        return (
                            <HikeResultRow
                                place={hikesData.place}
                                title={hikesData.title}
                                hike_image_url={hikesData.hike_image_url}

                            />
                        );
                    })
                }
            </div>
        );
    }
}
HikeResults.propTypes = {
    hikesData: PropTypes.array,
};
export default HikeResults;