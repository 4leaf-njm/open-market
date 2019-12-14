import ProductList from "./ProductListPresenter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as tomatoActions } from "../../reducer";

mapStateProps = (state, { navigation }) => {
  const { productList } = state;

  return { productList, navigation };
};

mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateProps, mapDispatchToProps)(ProductList);
