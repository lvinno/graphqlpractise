import React, { Component } from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from './RelayEnvironment'
import RelayUser from './RelayUser'



export default class App extends Component {
  render() {

    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query RelayIndexQuery{
            users {
              ...RelayUser_item
            }  
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          
          return <div> {props.users.map(item => <RelayUser item={item} />)}</div>;
        }}
      />
    );
  }
}