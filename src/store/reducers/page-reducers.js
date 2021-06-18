const initialState = {
    page: 'search',
    chosenId: -1,
    results: []
}

const pageReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_PAGE':
            return { ...state, page: action.value }
        case 'UPDATE_RESULTS':
            return { ...state, results: action.value }
        case 'SHOW_RESULT_DETAILS':
            return { ...state, chosenId: action.value, page: 'details' }
        default:
            return state
    }
}

export default pageReducer;