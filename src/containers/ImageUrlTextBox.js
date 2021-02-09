import { connect } from 'react-redux';
import ImageUrlTextBox from "../components/ImageUrlTextBox";
import { imageUrl } from "../actions";

const mapDispatchToProps = {
    set: imageUrl,
}

export default connect(null, mapDispatchToProps)(ImageUrlTextBox);
