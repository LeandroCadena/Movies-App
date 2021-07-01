import React from 'react';
import { connect } from 'react-redux';
import { addMovieFavorite, getMovieDetail } from '../../actions/index';
import './MovieDetail.css';

class MovieDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdded: false
        };
    }

    handleAdd(e) {
        if (!this.state.isAdded) {
            this.setState({ isAdded: true });
            this.props.addMovieFavorite({ title: this.props.movie.Title, id: this.props.movie.imdbID })
        }
    }

    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId);
        console.log(this.props.movie)
    }

    render() {
        return (
            <div className="home">
                <div className="detail">
                    <h1>Movie Detail</h1>
                    <h2>{this.props.movie.Title}</h2>
                    <img src={this.props.movie.Poster} alt='unknown'></img>
                    <button
                        className='form-button add'
                        onClick={e => this.handleAdd()}
                    >ADD TO FAVORITES
                    </button>
                    {
                        this.state.isAdded ? (
                            <span className="modal">movie added successfully</span>
                        ) : null
                    }
                </div>
                <div className="content">
                    <p>{`Year: ${this.props.movie.Year}`}</p>
                    <p>{`Type: ${this.props.movie.Type}`}</p>
                    <p>{`Director: ${this.props.movie.Director}`}</p>
                    <p>{`Language: ${this.props.movie.Language}`}</p>
                    <p>{`Production: ${this.props.movie.Production}`}</p>
                    <p>{`Actors: ${this.props.movie.Actors}`}</p>
                    {
                        this.props.movie.Ratings ? (
                            this.props.movie.Ratings.length ? (
                                <p>Ratings:</p>
                            ) : null
                        ) : null
                    }
                    <ul>
                        {
                            this.props.movie.Ratings ? (
                                this.props.movie.Ratings.length ? this.props.movie.Ratings.map((rating, index) => (
                                    <li key={index}>
                                        {`Valoration: ${rating.Value} ==> From: ${rating.Source}`}
                                    </li>
                                )) : null
                            ) : null
                        }
                    </ul>
                    <p>{`Country: ${this.props.movie.Country}`}</p>
                    <p>{`Writer: ${this.props.movie.Writer}`}</p>
                </div>
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id)),
        addMovieFavorite: movie => dispatch(addMovieFavorite(movie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);