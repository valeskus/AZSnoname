import * as Redux from 'redux';
import {PlaceholderActions} from './placeholderActions';

export interface PlaceholderStoreState {
  placeholder: [];
}

const initialState: PlaceholderStoreState = {
  placeholder: [],
};

export function placeholderReducer(
  state = initialState,
  action: Redux.AnyAction,
): PlaceholderStoreState {
  switch (action.type) {
    case PlaceholderActions.GET: {
      const {placeholder} = action.payload;

      return {
        ...state,
        placeholder,
      };
    }
    default:
      return state;
  }
}
