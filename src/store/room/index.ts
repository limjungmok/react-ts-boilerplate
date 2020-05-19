import { actionType } from '@constants/index';

const type = 'ROOM/';

export const START_ROOMS_LOADING = `${type}START_ROOMS_LOADING`;
export const RESET_ROOMS_LOADING = `${type}RESET_ROOMS_LOADING`;
export const GET_ROOMS = `${type}GET_ROOMS`;
export const ENTER_ROOM = `${type}ENTER_ROOM`;
export const EXIT_ROOM = `${type}EXIT_ROOM`;


interface IRoomState {
  isLoading: boolean;
  rooms: [];
}

interface IAction {
  type: actionType;
  payload?: any;
}

export const roomState: IRoomState = {
  isLoading: false,
  rooms: [],
}

export const roomReducer = (state: any, action: IAction) => {
  switch(action.type) {
    case START_ROOMS_LOADING:
      return { ...state, isLoading: true };
    case GET_ROOMS:
      return { ...state, isLoading: false, rooms: [...action.payload]};
    case ENTER_ROOM:
      return;
    case EXIT_ROOM:
      return;
    default:
      throw new Error(`unexpected action.type: ${action.type}`);
  }
};
