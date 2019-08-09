import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SearchBar from './components/SearchBar'
import GifList from './components/GifList'
// import { request } from 'http';
import request from 'superagent';



class App extends Component{
    constructor(){
        super()

        this.state={
            gifs: []            
        }
        this.handleTermChange = this.handleTermChange.bind(this)
    }

    handleTermChange = (term) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=7wmeqv64MfIamVn2cZH1aP4hekporIML`
        console.log(term)

        request.get(url, (err,res) => {
            this.setState({
                gifs: res.body.data
            })
        })
       console.log(this.state.gifs)
    }
    render(){
        return(
            <div id='container'>
                <SearchBar onTermChange={this.handleTermChange}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
