/**
 * @flow
 * @relayHash 92d29cfd56c64622fcfc8bf1dc798f66
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RelayUser_item$ref = any;
export type RelayUserRefetchQueryVariables = {|
  id: string
|};
export type RelayUserRefetchQueryResponse = {|
  +item: ?{|
    +$fragmentRefs: RelayUser_item$ref
  |}
|};
export type RelayUserRefetchQuery = {|
  variables: RelayUserRefetchQueryVariables,
  response: RelayUserRefetchQueryResponse,
|};
*/


/*
query RelayUserRefetchQuery(
  $id: ID!
) {
  item: User(id: $id) {
    ...RelayUser_item
    id
  }
}

fragment RelayUser_item on User {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RelayUserRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "item",
        "name": "User",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
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
    "name": "RelayUserRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "item",
        "name": "User",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
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
    "name": "RelayUserRefetchQuery",
    "id": null,
    "text": "query RelayUserRefetchQuery(\n  $id: ID!\n) {\n  item: User(id: $id) {\n    ...RelayUser_item\n    id\n  }\n}\n\nfragment RelayUser_item on User {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c65e4670a64abf1db0556238ea9c0a6c';
module.exports = node;
