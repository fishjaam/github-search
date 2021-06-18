import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../store/actions/page-actions';


function Details(props) {
    const { results, id } = props;

    const selectedResult = results.filter(r => r.id === id).reduce(el => el);
    const repoDetails = {
        "Name": selectedResult.name,
        "Description": selectedResult.description,
        "Owner": selectedResult.owner.login,
        "Number of stars": selectedResult.stargazers_count,
        "Language": selectedResult.language
    }

    return (
        <div>
            <h4 style={{textAlign: 'center', paddingTop: '15px'}}>Repository Details</h4>
            <ul class="list-group list-group-flush">
                <br />
                {Object.entries(repoDetails).map(item => {
                    return <li class="list-group-item">{item[0]}: {item[1]}</li>
                })}
            </ul>
            <div style={{textAlign: 'center', paddingTop: '25px'}}>
                <button type="button" class="btn btn-primary" onClick={() => props.changePage('search')}>
                    Back to results
                </button>
            </div>
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        results: state.results,
        id: state.chosenId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changePage: (page) => dispatch(changePage(page))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);