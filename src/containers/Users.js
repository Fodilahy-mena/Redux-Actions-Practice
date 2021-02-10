import { connect } from 'react-redux';
import { getUsers } from '../actions';
import Users from '../components/Users';

function mapStateToProps(state) {
	return {
		users: state.users,
		sortOn: state.currentUserSort,
		firstNameFilter: state.searchText,
	};
}

const mapDispatchToProps = {
	getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);