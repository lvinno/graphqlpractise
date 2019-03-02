/**
 * @flow
 * @relayHash 2c7e571d4f5ddfcad6913f70574d5c41
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RelayUser_item$ref = any;
export type RelayIndexQueryVariables = {||};
export type RelayIndexQueryResponse = {|
  +users: ?$ReadOnlyArray<?{|
    +$fragmentRefs: RelayUser_item$ref
  |}>
|};
export type RelayIndexQuery = {|
  variables: RelayIndexQueryVariables,
  response: RelayIndexQueryResponse,
|};
*/


/*
query RelayIndexQuery {
  users {
    ...RelayUser_item
    id
  }
}

fragment RelayUser_item on User {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RelayIndexQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "RelayUser_item",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RelayIndexQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "RelayIndexQuery",
    "id": null,
    "text": "query RelayIndexQuery {\n  users {\n    ...RelayUser_item\n    id\n  }\n}\n\nfragment RelayUser_item on User {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '5ac1e46ee1773dd76fc542c7c298b1ed';
module.exports = node;
