import { connect } from 'react-redux';
import ChangeTemperature from "../components/ChangeTemperature";
import { currentTemp } from "../actions";
function mapDispatchToProps(globalState){
  return {
    set: currentTemp
  }
}

export default connect(null, mapDispatchToProps)(ChangeTemperature);