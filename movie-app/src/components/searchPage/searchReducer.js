import { ACTION_TYPES } from "./ACTION_TYPES";

/**
 * Initial state for the form reducer.
 */
export const INITAL_STATE = {
    searchString: "",
    genres: [],
    selectedGenres: [],
    releaseYear: "",
    submitValue: "",
    showSearchHistory: false,
    searchHistory: [],
    cartSize: 0,
};

/**
 * Reducer function for the form state.
 *
 * @param {Object} state - Current state.
 * @param {Object} action - Action object.
 * @returns {Object} - New state.
 */
const formReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case ACTION_TYPES.ADD_GENRE:
            return {
                ...state,
                selectedGenres: [...state.selectedGenres, action.payload.value],
            };
        case ACTION_TYPES.SEARCH:
            if (isSearchAlreadyExists(state) || isSearchEmpty(state)) {
                return {
                    ...state,
                    submitValue: state.searchString,
                    showSearchHistory: false,
                };
            } else {
                const searchEntry = getSearchEntry(state);
                return {
                    ...state,
                    showSearchHistory: false,
                    submitValue: state.searchString,
                    searchHistory: [...state.searchHistory, searchEntry],
                    selectedGenres: [],
                };
            }
        case ACTION_TYPES.SEARCH_AGAIN:
            return {
                ...state,
                submitValue: action.payload.searchEntry.searchString,
                selectedGenres: action.payload.searchEntry.selectedGenres,
                releaseYear: action.payload.searchEntry.releaseYear,
                showSearchHistory: false,
            };
        case ACTION_TYPES.TOGGLE_SEARCH_HIST:
            return {
                ...state,
                showSearchHistory: !state.showSearchHistory,
            };
        case ACTION_TYPES.DELETE_SEARCH:
            const updatedHistory = state.searchHistory.splice(action.payload.index, 1);
            return {
                ...state,
                searchHistory: updatedHistory,
            };
        case ACTION_TYPES.CLEAR_HIST:
            return {
                ...state,
                searchHistory: [],
            };
        case ACTION_TYPES.GET_CART_SIZE:
            return {
                ...state,
                cartSize: action.payload.cartSize,
            };
        case ACTION_TYPES.INCREASE_CART_SIZE:
            return {
                ...state,
                cartSize: state.cartSize + 1,
            };
        default:
            return state;
    }
};

/**
 * Checks if a search already exists in the search history.
 *
 * @param {Object} state - Current state.
 * @returns {boolean} - True if search already exists, false otherwise.
 */
const isSearchAlreadyExists = (state) => {
    return state.searchHistory.some((entry) => {
        return (
            entry.searchString === state.searchString &&
            entry.releaseYear === state.releaseYear &&
            areArraysEqual(entry.selectedGenres, state.selectedGenres)
        );
    });
};

/**
 * Checks if two arrays are equal.
 *
 * @param {Array} array1 - First array.
 * @param {Array} array2 - Second array.
 * @returns {boolean} - True if arrays are equal, false otherwise.
 */
const areArraysEqual = (array1, array2) => {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

/**
 * Creates a search entry object from the form state.
 *
 * @param {Object} state - Current state.
 * @returns {Object} - Search entry object.
 */
const getSearchEntry = (state) => {
    const genreNames = state.selectedGenres.map((genre) => `${genre.name}`);
    return {
        searchString: state.searchString,
        selectedGenres: genreNames,
        releaseYear: state.releaseYear,
    };
};

/**
 * Checks if the search form is empty.
 *
 * @param {Object} state - Current state.
 * @returns {boolean} - True if search form is empty, false otherwise.
 */
const isSearchEmpty = (state) => {
    return state.searchString === "" && state.releaseYear === "" && !state.selectedGenres.length;
};

export default formReducer;
