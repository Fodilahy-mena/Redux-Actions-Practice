import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import Modal from '../components/Modal';

export default connect(
	(state) => ({
		displayModal: state.displayModal,
	}),
	{ toggleModal }
)(Modal);