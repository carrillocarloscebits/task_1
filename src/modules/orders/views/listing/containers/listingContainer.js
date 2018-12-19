import { connect } from "react-redux";
import Listing from "../listing";
import {get_orders_list, delete_order} from "./../actions"
const mapStateToProps = state => ({
    orders: state.orders
});

const mapDispatchToProps = dispatch => ({
    get_orders: () => dispatch(get_orders_list()),
    delete_order: (ID, index) => dispatch(delete_order(ID, index))
});

export default connect(mapStateToProps, mapDispatchToProps)(
    Listing
);
