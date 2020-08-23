// Internal Dependencies
import { APIErrorResponse } from '../../typings/api';

// Local Typings
export interface DefaultState {
  error: APIErrorResponse | null;
  hasLoaded: boolean;
  isLoading: boolean;
}
export interface DefaultStateWithShowCollection extends DefaultState {
  showCollection: Record<string, unknown>,
  showCollectionItemId: string | null;
}

// Exports
export const defaultState: DefaultState = {
  error: null,
  hasLoaded: false,
  isLoading: false,
};

export const defaultStateWithShowCollection: DefaultStateWithShowCollection = {
  ...defaultState,
  showCollection: {},
  showCollectionItemId: null,
};
