export const changePage = page => {
    return {
        type: 'CHANGE_PAGE',
        value: page
    }
}

export const updateResults = results => {
    return {
        type: 'UPDATE_RESULTS',
        value: results
    }
}

export const showResultDetails = id => {
    return {
        type: 'SHOW_RESULT_DETAILS',
        value: id
    }
}