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
                    this.props.hikeData.map((hikeData) => {
                        return (
                            <HikeResultRow
                                id={hikeData.id}
                                place={hikeData.place}
                                title={hikeData.title}
                                country={hikeData.country}
                                date={hikeData.date}
                                duration={hikeData.duration}
                                year={hikeData.year}
                                hike_image_url={hikeData.hike_image_url}

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