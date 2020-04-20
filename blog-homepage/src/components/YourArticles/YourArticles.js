import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Media from 'react-bootstrap/Media';
import '../Articles.css'
import {faStar, faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import AuthorInfo from '../AuthorInfo/AuthorInfo';
import PropTypes from 'prop-types';

const YourArticles = props => {
  const {image, hasAudioAvailable, memberPreview, title, description } = {...props.data};

  return (

      <Media className='article'>
        <img
          width='170px'
          height='225px'
          className="align-self-start mr-3"
          src={image}
          alt="Generic placeholder"
        />

        <div>
          {hasAudioAvailable ?
            <p style={{display:"inline-block", marginRight:"20px", textAlign: 'left', fontSize:'12px'}}>
              <FontAwesomeIcon icon={faVolumeUp} fa-sm='true' fontSize='0.5rem'/>
              Audio available
            </p>
            : <p> </p>}
          {memberPreview ?
            <p style={{  display:"inline-block", marginLeft:"20px", textAlign: 'right', fontSize:'12px'}}>
              <FontAwesomeIcon icon={faStar}/>Member Preview</p>
            : <p> </p>}
          <h5>{title}</h5>
          <p>{description}</p>
          <AuthorInfo postedDate={props.data.postedDate}
                      author={props.data.author}
                      minutesToRead={props.data.minutesToRead}/>
        </div>
      </Media>
  )


}

YourArticles.propTypes = {
  image: PropTypes.any,
  hasAudioAvailable: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string
};

export default YourArticles;
