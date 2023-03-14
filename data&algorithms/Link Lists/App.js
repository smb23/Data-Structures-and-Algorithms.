import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Photolist from './photolist';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
        super(props);
        this.state = {

        }
    }
  render() {

    const tab_albums = [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "http://placehold.it/600/771796",
        "thumbnailUrl": "http://placehold.it/150/771796"
      },
      {
        "albumId": 2,
        "id": 66,
        "title": "provident rerum voluptatem illo asperiores qui maiores",
        "url": "http://placehold.it/600/ee0a7e",
        "thumbnailUrl": "http://placehold.it/150/ee0a7e"
      },
      {
        "albumId": 2,
        "id": 67,
        "title": "veritatis labore ipsum unde aut quam dolores",
        "url": "http://placehold.it/600/1279e9",
        "thumbnailUrl": "http://placehold.it/150/1279e9"
      }
    ]; 
    const albumsIds = [];
    
    tab_albums.map((album_model) => {
        return (
            albumsIds.indexOf(album_model.albumId) === -1 ? albumsIds.push(album_model.albumId) : null
        )
    });
    
    var album_style = {"background": "#cccccc", "marginBottom": "10px", "borderLeft": "5px solid red"};
    var style_div = {"width": "50%", "float": "left"};

    const liste_album = albumsIds.map((alb_id) => {
          return (
            <Router>
              <li key={alb_id} style={album_style}><Link to={"/album"+alb_id}>Album : { alb_id }</Link></li>
              {/* <Route path="/photolist" component={Photolist}/> */}
            </Router> 
          )
    });

  return (
    <div className="App">
      <div style={style_div}>
        <ul>{liste_album}</ul>
      </div>
      <div style={style_div}>
        <button>wishlist</button>
        <Photolist />
      </div>
    </div>
     
    ); 
  }
}

export default App;


// rate : 10
// remarks : difficult