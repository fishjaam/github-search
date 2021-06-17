import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import Details from './Details';


function Home(props) {
    

    return (
        <React.Fragment>
            {props.page === 'search' ? 
                <Search></Search> : 
                <Details></Details>
            }
        </React.Fragment>  
    )
}

const mapStateToProps = state => {
    return {
        page: state.page
    }
};

export default connect(mapStateToProps)(Home);
