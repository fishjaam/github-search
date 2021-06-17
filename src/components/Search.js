import React, {useState} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import SearchItem from './SearchItem';
import { updateResults } from '../store/actions/page-actions';


function Search(props) {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    //TODO
    //1. sort by star value
    //2. filter by language - add ability to add another search param to url

    let results = props.results;
    console.log(results);

    const handleClick = () => {
        console.log('button clicked! qry: ' + query);
        let url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}`;
        setLoading(true);

        axios.get(url)
            .then(res => {
                console.log(res);
                results = res.data.items;
                setLoading(false);
                props.UpdateResults(results);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }

    return (
        <React.Fragment>
            <h3 style={{textAlign: 'center', padding: '15px'}}>Search for github repositories</h3>
            <div class="input-group mb-3">
                <input type="text" 
                    class="form-control" 
                    placeholder="Enter a query..." 
                    value={query} aria-label="Search query" 
                    onChange={(event) => setQuery(event.target.value)}
                    aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" 
                        disabled={loading}
                        onClick={() => handleClick()}>Search</button>
                </div>
            </div>
            {!loading ? <ul class="list-group list-group-flush">
                {results.map(repository => {
                    return (
                        <SearchItem 
                            id={repository.id} 
                            description={repository.description}
                            name={repository.name}
                            stars={repository.stargazers_count} 
                            key={repository.id}/>
                    )
                })}
            </ul> :
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        results: state.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        UpdateResults: (results) => dispatch(updateResults(results))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);