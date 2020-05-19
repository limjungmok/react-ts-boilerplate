import { actionType } from '@constants/index';

const type = 'COUNTER/';

export const START_LOADING = `${type}START_LOADING`;
export const RESET_LOADING = `${type}RESET_LOADING`;
export const INCREMENT = `${type}INCREMENT`;
export const DECREMENT = `${type}DECREMENT`;

interface ICounterState {
  isLoading: boolean;
  value: number;
}

interface IAction {
  type: actionType;
  payload?: any;
}

export const counterState: ICounterState = {
  isLoading: false,
  value: 0,
};

export const counterReducer = (state: any, action: IAction) => {
  switch(action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case RESET_LOADING:
      return { ...state, isLoading: false};
    case INCREMENT:
      return action.payload ? { ...state, value: state.value + action.payload } : { ...state, value: state.value + 1 };
    case DECREMENT:
      return action.payload ? { ...state, value: state.value - action.payload } : { ...state, value: state.value - 1 };
    default:
      throw new Error(`unexpected action.type: ${action.type}`);
  }
};


