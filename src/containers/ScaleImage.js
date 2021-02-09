import { connect } from 'react-redux';
import ScaleImage from "../components/ScaleImage";
import { imageScale } from "../actions";

const mapDispatchToProps = {
    set: imageScale,
}

export default connect(null, mapDispatchToProps)(ScaleImage);
