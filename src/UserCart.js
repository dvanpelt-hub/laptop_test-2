import React from 'react';
import PartUpdater from './PartUpdater';
import TotalCost from './TotalCost';

class UserCart extends React.Component{

  state = { selected: {} };

  render() {
      
      return(
        <div>
          <PartUpdater />
          <TotalCost />
        </div>
        
      )
  }
}

export default UserCart;