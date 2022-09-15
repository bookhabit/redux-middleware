import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

// 액션타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// saga 액션타입
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

// 액션생성함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 마우스 클릭이벤트가 payload 안에 들어가지 않도록
// ()=> undefined를 두 번째 파라미터로 넣어준다
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaesSaga() {
  yield delay(100);
  yield put(increase()); // 특정액션을 디스패치한다
}

function* decreaseSaga() {
  yield delay(100);
  yield put(decrease()); // 특정 액션을 디스패치한다
}

export function* counterSaga() {
  // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해준다
  yield takeEvery(INCREASE_ASYNC, increaesSaga);
  // takeLatest는 기존에 진행 중이던 작업이 있다면 취소처리하고
  // 가장 마지막으로 실행된 작업만 수행한다
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

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
