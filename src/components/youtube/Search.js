import React from 'react';

class Search extends React.Component {
    render(){
        return(
            <form>
                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter search word..."
                    />
                </div>
            </form>
        );
    }
}
export default Search;