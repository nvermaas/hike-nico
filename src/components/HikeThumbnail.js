/**
 * Created by Vermaas on 10/8/2017.
 */
import React from 'react';
import './HikeRow.css';
import PropTypes from 'prop-types';
import {Col, Thumbnail, Button} from 'react-bootstrap'

class HikeResultRow extends React.Component {
    render() {
        let url = "http://uilennest.net/owlsnest/hiking/" + this.props.id
        return (
            <Col xs={4} md={3}>

                <Thumbnail src={this.props.hike_image_url} alt="242x200">
                    <h4>{this.props.title} {this.props.year}</h4>
                    <h5>{this.props.place}</h5>
                    <p>
                      <a href={url}><Button bsStyle="primary">Details</Button></a>&nbsp;
                    </p>
                </Thumbnail>
            </Col>
        );
    }
}
HikeResultRow.propTypes = {
    title: PropTypes.string,
    place: PropTypes.string,
    hike_image_url: PropTypes.string,
};
export default HikeResultRow;