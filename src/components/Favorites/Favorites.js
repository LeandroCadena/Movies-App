import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions/index";

export class ConnectedList extends Component {

  render() {
    return (
      <div className="home">
        <div className="detail">
          <h2>Favorite Movies</h2>
        </div>
        <div className="content">
          {
            this.props.moviesFavourites && this.props.moviesFavourites.map(movie => (
              <div
                key={movie.id}
                className="item"
              >
                <button className="x-button" onClick={() => this.props.removeMovieFavorite(movie.id)}>x</button>
                <Link className="favorite" to={`/Movies-App/movie/${movie.id}`}>
                  {movie.title}
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesFavourites: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
