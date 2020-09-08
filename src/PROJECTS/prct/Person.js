import React , {Component} from 'react';
import Card from './Card';
class Person extends Component{
    
    state = {
        traits:[
            {name:"sleepy",freq:3,id:1},
            {name:"sluggish",freq:7,id:100},
            {name:"sloth",freq:1,id:200}
        ],
        items : []
    };
    
    toggleView = true;

    removeItems(that){
        this.toggleView = !this.toggleView;
        console.log("remove state called");
        let t2 = this.state.traits.filter( item => item.id != that.id);
        console.log(t2);
        this.setState({
            traits:t2
        });
    };
    removeClicked(event){
        //event.target.parentElement

        this.removeItems(event.target.parentElement)
        console.log(event.target.parentElement.id);
        //console.log('helo');
    }
    render(){
        return(
            this.state.traits.map( trait =>{
                // for (let i = 0; i < trait.freq; i++) {
                //     if(this.toggleView)
                //     this.state.items.push(<Card name = {trait.name}/>);
                // }
                return(
                    <div>
                        <Card name = {trait.name} click = {this.removeClicked.bind(this)} id = {trait.id}/>
                    </div>
                )
                
            })
        )  
    };
};
export default Person;