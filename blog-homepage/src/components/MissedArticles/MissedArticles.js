import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import '../Articles.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import AuthorInfo from "../AuthorInfo/AuthorInfo";
import PropTypes from 'prop-types';

const MissedArticles = props => {
  const {image, hasAudioAvailable, memberPreview, title, description, link} = {...props.data};

  return (

    <Container className='article'>
      <Row>
        <Col>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={image}
            alt="Generic placeholder"
            height={200}
            width={325}/>
          </a>

        </Col>
      </Row>
      <Row>
        <div style={{display:"inline-block"}}>
          {hasAudioAvailable ?
            <p style={{textAlign: 'left', fontSize:'12px'}}>
              <FontAwesomeIcon icon={faVolumeUp} fa-sm='true' fontSize='0.5rem'/>
              Audio available
            </p>
            : <p> </p>}
          {memberPreview ?
            <p style={{textAlign: 'right', fontSize:'12px'}}>
            <FontAwesomeIcon icon={faStar}/>Member Preview</p>
            : <p> </p>}
          <h5>{title}</h5>
          <p>{description}</p>
          <AuthorInfo postedDate={props.data.postedDate}
                      author={props.data.author}
                      minutesToRead={props.data.minutesToRead}/>
        </div>
      </Row>
    </Container>

  )


}

MissedArticles.propTypes = {
  image: PropTypes.any,
  memberPreview: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string
};

export default MissedArticles;
