import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class PartUpdater extends React.Component{

  state = { selected: {} };

  render() {
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });
      
      return(
        <section className="main__summary">
          <h2>Your cart</h2>
            {summary}
        </section>
      )
  }
}

export default PartUpdater;