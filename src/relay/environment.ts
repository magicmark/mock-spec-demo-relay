import { Environment, Network, RecordSource, Store } from "relay-runtime";
import type { FetchFunction } from "relay-runtime";
import { createMockNetwork } from "relay-mock-directive-plugin";
import { mockRegistry } from "./mockRegistry";

const serverFetch: FetchFunction = async (request, variables) => {
  const response = await fetch("https://countries.trevorblades.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });
  return await response.json();
};

const fetchFn = createMockNetwork({
  mockRegistry,
  fetch: serverFetch,
});

export const environment = new Environment({
  network: Network.create(fetchFn),
  store: new Store(new RecordSource()),
});
