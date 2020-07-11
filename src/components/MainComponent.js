import React, { Component } from 'react';
import Menu from './MenuComponent';
// import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Header from './Headercomponent'
import Footer from './FooterComponent'
import { DISHES } from '../shared/dishes';
import {Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      
      dishes:DISHES,
      // selectDish:null
    
    };
  }
//   selectdish(dishId){
//     return( this.setState({selectDish:dishId}))
//  }

  render() {
    const HomePage = () => {
      return(
          <Home />
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId)=>this.selectdish(dishId)} />
        <DishDetail dish={ this.state.dishes.filter((dish)=>dish.id === this.state.selectDish)[0]} /> */}
        <Footer/>
      </div>
    );
  }

}
export default Main;
