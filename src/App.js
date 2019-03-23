import React from 'react';
import './App.css';
import Nav from './components/youtube/Nav';
import axios from'axios'
import Search from './components/youtube/Search';
import './index.css';

// const search = axios.get('https://api.unsplash.com/search/photos', {
//   params: {
//     query: 'Cars'
//   },
//   headers: {
//     Authorization: 'Client-ID 3da40752254289e5f74de63a235f24322a8a0b92a58a9c4e96b0348faa56a14d'
//   }
// }).then((res)=> {
//   this.setState( { 
//     carpics: res.data.results
// });
// });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      search : [],
      squery: "Cars"
    }
  }


    updateInputValue(event) {
      this.setState({squery: "Cars"});
    }
    componentDidMount(){
      const search = axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: this.state.squery
        },
        headers: {
          Authorization: 'Client-ID 3da40752254289e5f74de63a235f24322a8a0b92a58a9c4e96b0348faa56a14d'
        }
      }).then((res)=> {
          this.setState({
            search : res.data.results
          })
      });
    }

    render(){
      
      return(
        <div>
        <Nav />
        <Search />
        
        <div className="container-fluid"> 
          <div className = "row">
            <div className="col-md-8">
            <h2>Pictures</h2>
            <input
        type="text"
        value={this.state.value}
        onChange={this.updateInputValue}
      />
              {
                this.state.search.map((cars , key) => 
                <div key={cars.id}>
                  <img src = {cars.urls.small}/>
                </div>
                )
              }
            </div>
            <div><h2>Videos</h2></div>
          </div>
        </div>
      </div>
      );
    }
}

export default App;
