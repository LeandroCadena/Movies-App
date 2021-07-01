import { MOVIES_ID, MOVIES_URL } from '../utils/constants';

export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";

export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };
}

export function getMovies(titulo) {
    return function (dispatch) {
        return fetch(MOVIES_URL + titulo)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_MOVIES, payload: json });
            });
    };
}

export function removeMovieFavorite(id) {
    return { type: REMOVE_MOVIE_FAVORITE, payload: id }
}

export function getMovieDetail(id) {
    return function (dispatch) {
        return fetch(MOVIES_ID + id)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_MOVIE_DETAIL, payload: json })
            })
    }
}
