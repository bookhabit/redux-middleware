import { createAction, handleActions } from "redux-actions";

// 액션타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션생성함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 카운터 값을 비동기적으로 변경시키기
// 1초 뒤에 increase 혹은 decrease함수를 디스패치한다
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

// 초기상태
const initialState = 0;

// 리듀서
const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
