import React from 'react';
import { connect } from 'react-redux'
import { addFeature } from '../actions'

const AdditionalFeature = props => {

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log(props.feature.id)
  //   addFeature(props.feature)
  // }
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {
        addFeature(props.feature)
      }} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    state: state.car.features
  }
}

export default connect(
  mapStateToProps,
  { addFeature }
)
(AdditionalFeature);
