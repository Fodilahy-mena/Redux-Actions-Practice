import { connect } from 'react-redux';
import SortUsers from "../components/SortUsers";
import { currentUserSort } from "../actions";

const mapDispatchToProps = {
    set: currentUserSort,
}

const mapStateToProps = (state) => ({sortUser: state.currentUserSort})

export default connect(mapStateToProps, mapDispatchToProps)(SortUsers);