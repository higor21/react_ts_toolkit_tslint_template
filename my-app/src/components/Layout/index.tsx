import React from 'react';
import { Header, Body } from './styles';

import LogoImg from 'assets/images/logo.png';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header className="p-3">
        <img className="h-100" src={LogoImg} alt="CTC evolution - logo" />
      </Header>
      <Body className="mx-auto px-4 d-flex align-items-center">{children}</Body>
    </div>
  );
};

export default Layout;
