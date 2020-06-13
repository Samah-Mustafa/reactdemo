import React from 'react';
import { Thumbnail } from 'react-bootstrap/lib';
import { URL_IMG, IMG_SIZE_LARGE } from '../const';

export default function Cast({cast}) {
  return (
    
    <div style={{
      marginRight: '50px',
      display: 'block',
    }}>
      <Thumbnail src={URL_IMG + IMG_SIZE_LARGE + cast.profile_path} alt={cast.name} >
        <p>{cast.name}</p>
      </Thumbnail>
    </div>
  );
}

Cast.propTypes = {
  cast: React.PropTypes.shape({
    profile_path: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  })
};
