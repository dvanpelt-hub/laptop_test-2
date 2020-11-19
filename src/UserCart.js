import React from 'react';
import PartUpdater from './PartUpdater';
import TotalCost from './TotalCost';

class UserCart extends React.Component{


  render() {
      
      return(
        <div>
          <PartUpdater selected={this.props.selected} />
          <TotalCost selected={this.props.selected} />
        </div>
        
      )
  }
}

export default UserCart;