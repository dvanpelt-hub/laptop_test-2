import React from 'react';
//import CustomizeLaptop from 'CustomizeLaptop';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


class OptionSelector extends React.Component{

  render() {
    //features is composed of an object with four keys, each with two objects as values ex: (Processor: Array(2) --> "name: 17th Gen Intel Core etc." and "cost: 700")
    const features = Object.keys(this.props.features).map((feature, idx) => {
      //featureHash is composed of ex: Processor-0. (name and index posit)
      const featureHash = feature + '-' + idx;
      //console.log(featureHash);
      //options is composed of 4 arrays of 2 objects each. contains type: "div" and key: "name": "17th-Generation-Intel" "cost": 700
      const options = this.props.features[feature].map(item => {
        //itemHash is composed of "name": "ex: Professor-X-AMD" and "cost": 1200
        const itemHash = slugify(JSON.stringify(item));
        //console.log(this.state.selected);
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={this.props.selected != null && this.props.selected[feature] != null && item.name === this.props.selected[feature].name}
              onChange={e => this.props.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });
      //console.log(options)

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    //console.log(features);
    return(
      <div>
        {features}
      </div>
    )
  }
}


export default OptionSelector;