import Header from "./HeaderPresenter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as tomatoActions } from "../../reducer";

mapStateProps = (state, { navigation }) => {
  const { isLogin } = state;

  return { isLogin, navigation };
};

mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateProps, mapDispatchToProps)(Header);
