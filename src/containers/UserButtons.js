import { connect } from 'react-redux';
import UserButtons from "../components/UserButtons";
import { setUser, removeUser } from "../actions";

const mapDispatchToProps = {
    add: setUser,
    remove: removeUser
}

export default connect(null, mapDispatchToProps)(UserButtons);
