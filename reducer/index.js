// import
import { NavigationActions } from "react-navigation";

// Action 정의
const LOGIN_CHECK = "LOGIN_CHECK";

// Action Creator 정의
const loginCheck = () => {
  return {
    type: LOGIN_CHECK
  };
};

// 데이터 정의
const initialState = {
  isLogin: false,
  loginUser: null
};

// Action에 해당하는 Reducer 명령 호출
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_CHECK:
      return applyLoginCheck(state);
    default:
      return state;
  }
};

// Reducer 명령 작성
const applyLoginCheck = state => {
  if (!state.isLogin) {
  } else {
    alert("Welcome My App!");
  }

  return {
    ...state
  };
};

const actionCreator = {
  loginCheck
};

// Export Action Creator
export { actionCreator };

// Export Reducer
export default reducer;
