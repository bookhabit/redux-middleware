import { createAction, handleActions } from "redux-actions";

// 액션타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션생성함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기상태
const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
