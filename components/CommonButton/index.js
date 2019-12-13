import CommonButton from "./CommonButtonPresenter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as tomatoActions } from "../../reducer/reducer";

mapStateProps = state => {
  const {} = state;

  return {};
};

mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateProps, mapDispatchToProps)(CommonButton);
