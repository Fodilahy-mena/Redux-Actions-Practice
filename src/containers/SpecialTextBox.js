import { connect } from 'react-redux';
import SpecialTextBox from "../components/SpecialTextBox";
import { specialText } from "../actions";

//map the "setSpecialText" action function to a prop function called "set"
const mapDispatchToProps = {
    set: specialText,
}

export default connect(null, mapDispatchToProps)(SpecialTextBox);
