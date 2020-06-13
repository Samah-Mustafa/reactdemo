import React , { Component } from 'react';
import Poster from './Poster';
import {Link} from 'react-router';
import { Grid, Row, Col} from 'react-bootstrap';

export default class MovieList extends React.Component{

  render() {
 
  const movieStyle={
	display: 'flex',
  flexWrap: 'wrap',
  // width: '100%',
  // textAlign: 'center',
  // padding: 'auto'
  }

    let movies = this.props.movies.filter(function(movie) {
      return movie.poster_path != null;
    }).map(function(movie) {
        return(
          <div width="100%">
            <Col xs={6} sm={4} md={3} key={movie.id} className="mb-4">
            <Link to={'/movie/'+movie.id} ><Poster info id={movie.id} path={movie.poster_path} title={movie.title} voteAverage={movie.vote_average} release_date={movie.release_date} responsive /></Link>
          </Col>
          </div>
        );
    });

    return(
      <Grid fluid={true} className="m-0">
        <Row style={movieStyle} >
          {movies}
        </Row>
      </Grid>
    );
  }
}
