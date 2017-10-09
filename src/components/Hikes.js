import React from 'react';
import HikeThumbnail from './HikeThumbnail';
import './Hikes.css';
import PropTypes from 'prop-types';

class HikeResults extends React.Component {
    render() {
        console.log("HikeResults.render()")
        return (
            <div className="component-hike-results">
                {
                    this.props.data.map((hike) => {
                        return (
                            <HikeThumbnail
                                id={hike.id}
                                place={hike.place}
                                title={hike.title}
                                country={hike.country}
                                date={hike.date}
                                duration={hike.duration}
                                year={hike.year}
                                hike_image_url={hike.hike_image_url}
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