import { connect } from 'react-redux';
import ChangeTemperature from "../components/ChangeTemperature";
import { currentTemp } from "../actions";
const mapDispatchToProps ={
    set: currentTemp
}

export default connect(null, mapDispatchToProps)(ChangeTemperature);