import { useCallback, useState } from "react";
import type { ConcreteRequest, Variables } from "relay-runtime";
import { environment } from "./environment";

interface QueryState {
  loading: boolean;
  error: string | null;
  data: unknown;
}

export function useExecuteQuery(query: ConcreteRequest, variables?: Variables) {
  const [state, setState] = useState<QueryState>({ loading: false, error: null, data: null });

  const execute = useCallback(() => {
    setState({ loading: true, error: null, data: null });

    const network = environment.getNetwork();
    const observable = network.execute(query.params, variables ?? {}, {});

    observable.subscribe({
      next: (response) => {
        setState({ loading: false, error: null, data: response });
      },
      error: (err: Error) => {
        setState({ loading: false, error: err.message, data: null });
      },
    });
  }, [query, variables]);

  return { ...state, execute };
}
