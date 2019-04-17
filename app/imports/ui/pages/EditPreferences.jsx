import React from 'react';
import ReactDOM from 'react-dom';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';
import { Meteor } from 'meteor/meteor';
import BottomFooter from '../components/BottomFooter';
import EditCuisineType from '../components/EditCuisineType';
import EditPrice from '../components/EditPrice';
import EditFoodTags from '../components/EditFoodTags';
import Users from '/imports/api/user/user.js';
import EditHealthOptions from '../components/EditHealthOptions';

export default class EditPreferences extends React.Component {

  state = {
    foodTypeOne: String,    //favorite food types such as: Middle Eastern, Japanese, Cajun, Classic American, etc.
    foodTypeTwo: String,
    foodTypeThree: String,
    vegan: Boolean,         //boolean values for whether the user cares about vegan, GF and healthy options.
    glutenFree: Boolean,
    healthy: Boolean,
    ToGo: Boolean,
    FoodTruck: Boolean,
    MadeToOrder: Boolean,
    Buffet: Boolean,
    restaurantPrice: Array, //typical price range student wants.
    location: String,       //usual place on campus.
    owner: String           //user account
  }

  setUp(){
    this.state.ToGo = true;
    this.state.FoodTruck = false;
    this.state.MadeToOrder = true;
    this.state.Buffet = true;
    this.state.restaurantPrice[0] = true;
    this.state.restaurantPrice[1] = false;
    this.state.restaurantPrice[2] = true;
    this.state.foodTypeOne = 'Chinese';
    this.state.foodTypeTwo = 'Korean';
    this.state.foodTypeThree = 'BBQ';
    this.state.vegan = false;
    this.state.healthy = true;
    this.state.glutenFree = true;
  }

  handlePriceChange(price){
      this.state.restaurantPrice[price] = !this.state.restaurantPrice[price];
  }

  getToGoPreset(){
    return this.state.ToGo;
  }

  getBuffetPreset(){
    return this.state.Buffet;
  }

  getFoodTruckPreset(){
    return this.state.FoodTruck;
  }

  getMadeToOrderPreset(){
    return this.state.MadeToOrder;
  }


  handleToGoChange(){
    if(this.state.ToGo === false){
      this.state.ToGo = true;
    } else if (this.state.ToGo === true) {
      this.state.ToGo = false;
    }
    console.log(this.state.ToGo);
  }

  handleBuffetChange(){
    if(this.state.Buffet === false){
      this.state.Buffet = true;
    } else {
      this.state.Buffet = false;
    }
  }
  handleFoodTruckChange(){
    if(this.state.FoodTruck === false){
      this.state.FoodTruck = true;
    } else {
      this.state.FoodTruck = false;
    }
  }
  handleMadeToOrderChange(){
    if(this.state.MadeToOrder === false){
      this.state.MadeToOrder = true;
    } else {
      this.state.MadeToOrder = false;
    }
  }

  getPricePreset1(){
    return this.state.restaurantPrice[0];
  }

  getPricePreset2() {
    return this.state.restaurantPrice[1];
  }

  getPricePreset3(){
    return this.state.restaurantPrice[2];
  }

  handlePriceChange1(){
    this.state.restaurantPrice[0] = !this.state.restaurantPrice[0];
  }

  handlePriceChange2(){
    this.state.restaurantPrice[1] = !this.state.restaurantPrice[1];
  }

  handlePriceChange3(){
    this.state.restaurantPrice[2] = !this.state.restaurantPrice[2];
  }

  getFoodTag1(){
    return this.state.foodTypeOne;
  }

  getFoodTag2(){
    return this.state.foodTypeTwo;
  }

  getFoodTag3(){
    return this.state.foodTypeThree;
  }

  getVegan(){
    return this.state.vegan;
  }

  getGlutenFree(){
    return this.state.glutenFree;
  }

  getHealthy(){
    return this.state.healthy;
  }

  handleVeganChange(){
    this.state.vegan = !this.state.vegan;
  }

  handleHealthyChange(){
    this.state.healthy = !this.state.healthy;
  }

  handleGlutenFreeChange(){
    this.state.glutenFree = !this.state.glutenFree;
  }


  render() {
    this.setUp();
    return (
        <div className={'adminMid'}>
          <EditCuisineType
            getTG={this.getToGoPreset()}
            getB={this.getBuffetPreset()}
            getFT={this.getFoodTruckPreset()}
            getMTO={this.getMadeToOrderPreset()}
            TGC={this.handleToGoChange()}
            BC={this.handleBuffetChange()}
            FTC={this.handleFoodTruckChange()}
            MTOC={this.handleMadeToOrderChange()}
          />
          <EditPrice
              getPP1={this.getPricePreset1()}
              getPP2={this.getPricePreset2()}
              getPP3={this.getPricePreset3()}
              HPC1={this.handlePriceChange1()}
              HPC2={this.handlePriceChange2()}
              HPC3={this.handlePriceChange3()}
          />
          <EditFoodTags
              getFT1={this.getFoodTag1()}
              getFT2={this.getFoodTag2()}
              getFT3={this.getFoodTag3()}
          />
          <EditHealthOptions
              getV={this.getVegan()}
              getGF={this.getGlutenFree()}
              getH={this.getHealthy()}
              HVC={this.handleVeganChange()}
              HHC={this.handleHealthyChange()}
              HGFC={this.handleGlutenFreeChange()}
          />
        </div>
    );
  }
}

ReactDOM.render(<EditPreferences/>, document.getElementById('root'));
