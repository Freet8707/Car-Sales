import React from 'react';
import { connect } from 'react-redux'
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.addOnFeatures ? (
        <ol type="1">
          {props.addOnFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    addOnFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  {}
)
(AdditionalFeatures);
