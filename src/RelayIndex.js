import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from './RelayEnvironment'


export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query RelayIndexQuery {
            users {
              id
              name
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
          return <div>Users: {props.users}</div>;
        }}
      />
    );
  }
}