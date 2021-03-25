import React, {Fragment, useState} from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Badge,
  NavLink,
} from 'reactstrap';
import {Link, Redirect, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
const Header = () => {
  const history = useHistory ();
  const dispatch = useDispatch ();
  const [collapsed, setCollapsed] = useState (true);
  const data = useSelector (state => {
    let foods = state.coutList.cartLists;

    let count = 0;

    for (let food of foods) {
      count += food.count;
    }

    return count;
  });

  const auth = useSelector (state => state.auth.login);

  const toggleNavbar = () => setCollapsed (!collapsed);
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className="me-auto">Food App</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-1" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>

            {auth
              ? <Fragment>
                  <NavItem>
                    <NavLink tag={Link} to="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/cart">
                      Cart
                      {' '}
                      <Badge color="primary">{data === 0 ? '' : data}</Badge>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={e => {
                        dispatch ({
                          type: 'User_login',
                          payload: false,
                        });
                      history.push('/login');

                      }}
                      tag={Link}
                      to="#"
                    >
                      Logout
                    </NavLink>
                  </NavItem>
                </Fragment>
              : <Fragment>

                  <NavItem>
                    <NavLink tag={Link} to="/about">
                      About Us
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={Link} to="/login">
                      Login
                    </NavLink>
                  </NavItem>
                </Fragment>}

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
