import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.componet';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector';

import {
  NavigationContainer,
  LogoContainer,
  NavLinkContainer,
  NavLink,
} from './navigation.styles';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo' />
        </LogoContainer>
        <NavLinkContainer className='nav-links-container'>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' className='nav-lik' onClick={signOutUser}>
              {' '}
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className='nav-link' to='/sign-in'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
