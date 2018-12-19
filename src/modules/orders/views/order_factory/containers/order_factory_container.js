import { connect } from "react-redux";
import OrderFactory from "../order_factory";
import {update_order} from "./../actions";

const mapStateToProps = state => ({
    orders: state.orders
});

const mapDispatchToProps = dispatch => ({
    update_order: (ID, item) => dispatch(update_order(ID, item))
});

export default connect(mapStateToProps, mapDispatchToProps)(
    OrderFactory
);
