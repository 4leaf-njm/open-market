import Header from "./HeaderPresenter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as tomatoActions } from "../../reducer";

mapStateProps = state => {
  const { isLogin } = state;

  return { isLogin };
};

mapDispatchToProps = dispatch => {
  return {
    loginCheck: bindActionCreators(tomatoActions.loginCheck, dispatch)
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Header);
