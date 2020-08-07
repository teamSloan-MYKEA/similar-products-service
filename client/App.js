import React from 'react';
// import { heart } from '@fortawesome/free-regular-svg-icons';
import { heart } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FontAwesome icon={heart} />
      </div>
    )
  }
}

export default App;