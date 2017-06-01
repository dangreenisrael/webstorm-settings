import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setFoo, getFoo} from '../redux/foo';

class ${NAME} extends Component {
  static propTypes = {
    foo: React.PropTypes.object
  };
  render () {
    return (
      <div>
        #[[ $END$ ]]#
      </div>  
    );
  }

}


const mapStateToProps = (state) => {
  return {
    foo: getFoo(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setFoo}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(${NAME});
