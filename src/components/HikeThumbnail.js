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
            <Col xs={6} md={4}>

                <Thumbnail src={this.props.hike_image_url} alt="242x200">
                 <h3>{this.props.title} {this.props.year}</h3>
                  <p>{this.props.place} - {this.props.date} - {this.props.duration}</p>
                  <p>
                      <a href={url}><Button bsStyle="primary">Details</Button>&nbsp;</a>
                    <Button bsStyle="default">Button</Button>
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