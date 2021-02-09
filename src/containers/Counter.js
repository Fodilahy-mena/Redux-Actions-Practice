import { connect } from 'react-redux';
import Counter from '../components/Counter';

function mapStateToProps(globalState) {
    return {
        count: globalState.currentCount
    }
}

export default connect(mapStateToProps, null)(Counter);