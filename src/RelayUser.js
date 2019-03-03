
import React from 'react';
import {graphql, createRefetchContainer} from 'react-relay';



class RelayUser extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:3
        }
    }
    refetch(){
        this.props.relay.refetch(
            {id: this.props.item.id}, 
            null,  // We can use the refetchVariables as renderVariables
            () => {},
            {force: true}// Assuming we've configured a network layer cache, we want to ensure we fetch the latest data.
          );
    }
    render(){
        const {id,name} = this.props.item;
        return (
            <div>
                {id}:{name}
                <button onClick={()=>{this.refetch()}}>refetch</button>
            </div>
              )
    }
}

export default createRefetchContainer(
    RelayUser,
    graphql`
    # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
    fragment RelayUser_item on User {
          id
          name
    }
  `,
  graphql`
  query RelayUserRefetchQuery($id: ID!) {
     item: User(id:$id){
      ...RelayUser_item
    }
  }
`
)
