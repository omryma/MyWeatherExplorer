import React from 'react';
import { useHistory } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

const TABS = [{ displayName: 'Home', path: '/' }, { displayName: 'Explore', path: '/explore' }]

const NavBar = () => {
  const history = useHistory()
  const { pathname } = history.location

  return (
    <Menu
      inverted
      pointing
      secondary
      size="massive"
    >
      <Container>
        {TABS.map(({displayName,path}) => (
            <Menu.Item
                as="a"
                active={path === `/${path}`}
                onClick={() => history.push(path)}
                key={displayName}
            >
              {displayName}
            </Menu.Item>
        ))}
      </Container>
    </Menu>
  )
}

export default NavBar;
