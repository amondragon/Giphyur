import React, { Component } from 'react';
import Requests from '../../sources/requests';
import classNames from 'classNames/bind';
import NavBarContainer from '../presentational/nav-bar-container';
import Grid from '../presentational/grid';
import styles from './app.css';

const cx = classNames.bind(styles);

class App extends Component{

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {searchString:null,gifsArray: [], requestOffset:0};
    }
    
    componentDidMount(){

        Requests.getData()
        .then((Json) => {
            let gridArray = [];
            const size = Math.round(Json.data.length/4);
            while (Json.data.length > 0)
            gridArray.push(Json.data.splice(0, size));
            this.setState({gifsArray:gridArray, requestOffset:this.state.requestOffset+29});
        });

        window.addEventListener("scroll", () => {
            const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            const body = document.body;
            const html = document.documentElement;
            const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            const windowBottom = windowHeight + window.pageYOffset;
            if (windowBottom >= docHeight) {
                Requests.getData(this.state.searchString, this.state.requestOffset)
                .then((Json) => {
                    let count = 0;
                    let newArray = this.state.gifsArray.slice(0);
                    Json.data.forEach((element)=>{
                        newArray[count].push(element);
                        (count==3)?count=0:count++;
                    })
                    this.setState({gifsArray:newArray,requestOffset:this.state.requestOffset+29});
                });
            }
        });
    
    }

    handleSearch(searchString) {
        Requests.getData(searchString)
        .then((Json) => {
            let gridArray = [];
            const size = Math.round(Json.data.length/4);
            while (Json.data.length > 0)
            gridArray.push(Json.data.splice(0, size));
            this.setState({searchString:searchString, gifsArray:gridArray, requestOffset:this.state.requestOffset+29});
        });
    }

    render(){
        return (
            <div className={cx('component','container')}>
                <NavBarContainer onSearch={this.handleSearch} />
                <Grid gridItems={this.state.gifsArray} />
            </div>
        );
    }
};

export default App;