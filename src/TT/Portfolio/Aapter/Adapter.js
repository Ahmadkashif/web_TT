import React , {Component} from 'react'
import {Route, Router,Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import DetailView from '../DetailView/DetailView'
class Adapter extends Component{
    state = {
        title:"hello",
        utubeUrl:"",
        shrtDesc:"",
        desc:"",
        googlePlay:"",
        appleStore:""
    }
    setStateHandler(state){
        this.setState(state);
    }
    render(){
        return(
            <DetailView title = {"hello"}/>
        )
    }
}
export default Adapter;