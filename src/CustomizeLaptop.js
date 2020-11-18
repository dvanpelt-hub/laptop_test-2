import React from 'react';
import OptionSelector from './OptionSelector';

class CustomizeLaptop extends React.Component{


  render() {

    return(
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <OptionSelector features={ this.props.features } selection={ this.props.selection }/>
            {console.log(this.props.features)}
          </form>
    )
  }
}


export default CustomizeLaptop;