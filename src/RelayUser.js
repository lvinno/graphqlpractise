
import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay';



class RelayUser extends React.Component{
    
    render(){
        const {id,name} = this.props.item;
        return (
            <div>{id}:{name}</div>
              )
    }
}

export default createFragmentContainer(
    RelayUser,
    graphql`
    # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
    fragment RelayUser_item on User{
          id
          name
    }
  `
)
