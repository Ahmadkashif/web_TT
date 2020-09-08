import React,{Component} from 'react';
import Card from './Card';
import Inline from './Inline';
class App extends Component{
    state = {
        string:[''],
        itemChar:'',
        InlineInd:0,
        items:[],
        length:0,
        setInit(){
            this.state.string = this.state.string ? this.state.string:"";
        }
    };
    item=[];
    populateItems(){
        this.item = [];
        this.state.string.map((curr,ind) => {
            this.item.push(<Inline val = {curr} index = {ind}/>)
        });
        
    };
    
    
    inputHandler(event){
        this.state.length = event.target.value.length;
        this.state.string = event.target.value.split('');
        console.log(this.state.string);
        this.state.string = this.state.string.length ? this.state.string:[""];
        this.setState(this.state);
        //this.populateItems();
    };
    
    
    removeHandler( that, event ){
        console.log("remove called");
        let id = parseInt(event.target.getAttribute('index'));
        console.log(id);
        
        let state2 = that.state.string.filter((current,index)=> {
            console.log(index,id);
            return index !== id ;
            
        });
        this.state.string = state2
        console.log(state2);
        this.populateItems();
        this.state.string = this.state.string.length ? this.state.string:[""];
        this.setState(
            this.state
            );
        };
        
        
        render(){
            return(
                <div>
                <input onChange = {this.inputHandler.bind(this)} value = {this.state.string.reduce((acc,next)=> acc+=next )}/>
                <p>{this.state.string.length-1}</p>
                <Card textLen = {this.state.length} str = {this.state.string}  rem = {this.removeHandler.bind(this,this)}/>
                </div>
                );
            };
        };
        
        export default App;