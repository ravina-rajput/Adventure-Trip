import React from 'react';

const Header = ({ children, header }) => {
  return <header className={header}>{children}</header>;
};

Header.defaultProps = {
  header: 'header',
};

export default Header;
