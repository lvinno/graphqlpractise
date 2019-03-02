/**
 * @flow
 * @relayHash 36133a36f8bfc48355dfbdfd1479812e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RelayIndexQueryVariables = {||};
export type RelayIndexQueryResponse = {|
  +users: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
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
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RelayIndexQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RelayIndexQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "RelayIndexQuery",
    "id": null,
    "text": "query RelayIndexQuery {\n  users {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3fb2f9646473bf9613966e180e18deac';
module.exports = node;
