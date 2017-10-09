import React from 'react';
import TripDetailRow from './TripDetailRow';

import PropTypes from 'prop-types';

class TripDetailsResults extends React.Component {
    render() {
        console.log("TripDetailsResults.render()")
        return (
            <div className="component-hike-results">
                {
                    this.props.data.map((tripDetail) => {
                        return (
                            <TripDetailRow
                                id={tripDetail.id}
                                title={tripDetail.title}
                                description={tripDetail.description}
                                kind={tripDetail.kind}
                                details_url={tripDetail.details_url}
                            />
                        );
                    })
                }
            </div>
        );
    }
}
TripDetailsResults.propTypes = {
    tripDetails: PropTypes.array,
};
export default TripDetailsResults;