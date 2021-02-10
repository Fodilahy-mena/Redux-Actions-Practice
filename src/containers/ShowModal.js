import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import ShowModal from '../components/ShowModal';

export default connect(null, { toggleModal })(ShowModal);