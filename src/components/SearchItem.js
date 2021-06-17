import React from 'react';
import { connect } from 'react-redux';
import { showResultDetails } from '../store/actions/page-actions';


function SearchItem(props) {
    const { id, description, name, stars } = props;

    console.log(id);

    return (
        <a href="#" class="list-group-item list-group-item-action" onClick={() => props.onShowResultDetails(id)}>
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{name}</h5>
                <small>{stars} Stars</small>
            </div>
            <p class="mb-1">{description}</p>
        </a>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onShowResultDetails: (id) => dispatch(showResultDetails(id))
    }
};

export default connect(null, mapDispatchToProps)(SearchItem);