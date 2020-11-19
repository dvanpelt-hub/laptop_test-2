import React from 'react';
import OptionSelector from './OptionSelector';

class CustomizeLaptop extends React.Component{

  render() {

    return(
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <OptionSelector 
            features={ this.props.features }
            handleUpdates={this.props.updateFeature} />
          </form>
    )
  }
}


export default CustomizeLaptop;