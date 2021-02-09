import { connect } from 'react-redux';
import CityDropDown from "../components/CityDropDown";
import { currentCity } from "../actions";

const mapStateToProps = (state) => ({currentCity: state.currentCity})

const mapDispatchToProps = {
    set: currentCity,
}

export default connect(mapStateToProps, mapDispatchToProps)(CityDropDown);
