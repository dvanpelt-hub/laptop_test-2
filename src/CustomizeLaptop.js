import React from 'react';
import OptionSelector from './OptionSelector';

class CustomizeLaptop extends React.Component{

  state = { selected: null };

  render() {

    return(
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <OptionSelector features={ this.props.features } />
          </form>
    )
  }
}


export default CustomizeLaptop;