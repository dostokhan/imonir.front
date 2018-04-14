import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

// export const Row = styled.div`
//   display: flex;
//   box-sizing: border-box;
// `;

export const Row = props => (
  <Flex
    {...props}
  />
);

export const Column = props => (
  <Box
    {...props}
    flex="1 1 auto"
  />
);
