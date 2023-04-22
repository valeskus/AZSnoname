import {Dispatch} from 'redux';

export enum PlaceholderActions {
  GET = '@placeholder/get',
  ERROR = '@error/placeholder',
}

const actionGetPlaceholder = (payload: any) => ({
  type: PlaceholderActions.GET,
  payload,
});

const actionError = (error: unknown) => ({
  type: PlaceholderActions.ERROR,
  payload: error,
});

export const getPlaceholder = async (dispatch: Dispatch) => {
  try {
    const placeholder = await Api.getPlaceholder();

    dispatch(actionGetPlaceholder(placeholder));
  } catch (error) {
    dispatch(actionError(error));
  }
};
