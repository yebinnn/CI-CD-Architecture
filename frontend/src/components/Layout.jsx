import React from 'react';
import styled from 'styled-components';

const Layout = (props) => {
  return <StLayout>{props.children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
