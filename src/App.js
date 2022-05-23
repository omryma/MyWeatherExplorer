import React from 'react';
import { withRouter } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import NavBar from './components/bars/NavBar';

const App = (props) => {
  const { children } = props

  return (
    <Segment
      raised
      inverted
      textAlign="center"
      vertical
    >
      <NavBar />
      {children}
    </Segment>
  )
}

export default withRouter(App);
