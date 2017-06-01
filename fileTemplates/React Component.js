import React, {Component} from 'react';

class ${NAME} extends Component {
  static propTypes = {
    foo: React.PropTypes.object.isRequired
  };
  render () {
    const {foo} = this.props;
    return (
      <div>
        #[[ $END$ ]]#
      </div>  
    );
  }

}

export default ${NAME};
