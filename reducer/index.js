// Action 정의
const SAMPLE_REDUX = "SAMPLE_REDUX";

// Action Creator 정의
const sampleRedux = () => {
  return {
    type: SAMPLE_REDUX
  };
};

// 데이터 정의
const initialState = {
  isLogin: false
};

// Action에 해당하는 Reducer 명령 호출
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_REDUX:
      return applySampleRedux(state);
    default:
      return state;
  }
};

// Reducer 명령 작성
const applySampleRedux = state => {
  return {
    ...state
  };
};

const actionCreator = {
  sampleRedux
};

// Export Action Creator
export { actionCreator };

// Export Reducer
export default reducer;
