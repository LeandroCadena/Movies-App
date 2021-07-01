import React, { Component } from 'react';
import { DEFAULT_POSTER } from '../../utils/constants';
import './Movie.css';
import { Link } from 'react-router-dom';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poster: DEFAULT_POSTER
        };
    }

    componentDidMount() {
        if (this.props.poster !== "N/A") {
            this.setState({ poster: this.props.poster })
        }
    }

    render() {
        return (
            <div className='movie-container'>
                <div className='movie'>
                    <div className='poster-container'>
                        <Link to={`/Movies-App/movie/${this.props.id}`}>
                            <img className='poster' src={this.state.poster}></img>
                        </Link>
                    </div>
                    <h2 className={
                        this.props.title.length > 40
                            ? 'movie-title smaller'
                            : this.props.title.length > 30 ? 'movie-title small' : 'movie-title'
                    }
                    >{this.props.title}</h2>
                </div>
            </div>
        )
    }
}
