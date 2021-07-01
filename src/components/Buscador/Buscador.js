import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies, addMovieFavorite } from "../../actions/index"
import Movie from "../Movie/Movie";
import Loading from "../Loading/Loading";


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      loading: false
    };
  }

  handleChange(event) {
    this.setState({ ...this.state, title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    (async () => (
      await this.setState({ ...this.state, loading: true }),
      await this.props.getMovies(this.state.title),
      this.setState({ ...this.state, loading: false })
    ))()
  }

  render() {
    const { title } = this.state;
    return (
      <div className='home'>
        <div className='search'>
          <h2>MOVIES CATALOG</h2>
          <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
            <input
              placeholder='Movie...'
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
            <button className='form-button' type="submit">Search</button>
          </form>
        </div>
        <div className='movies-catalog'>
          {
            this.state.loading ? (<Loading />) : (
              this.props.movies ? this.props.movies.map(movie => (
                <Movie
                  key={movie.imdbID}
                  id={movie.imdbID}
                  title={movie.Title}
                  poster={movie.Poster}
                />
              )) : null
            )
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
