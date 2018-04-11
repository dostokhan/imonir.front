import styled from 'styled-components';
// import { Navigation } from 'styled/StyledLink';

// export const RootLink = styled(Link)`
//   color: ${props => props.theme.colors.quinary};
//   &:hover, &:focus {
//     color: ${props => props.theme.colors.quinary};
//     border-bottom: 1px solid ${props => props.theme.colors.background};
//   }
// `;

export const NavList = styled.ul`
  list-style: none;
  margin-bottom: 1rem;
  padding: 0;
`;
  // &:(:first-child) {
  //   margin-left: 0;
  // }

export const NavItem = styled.li`
  display: inline-block;
  padding: 0;
  margin: 0;
`;


export const Navigation = styled.a`
  color: ${props => (props.isActive ? props.theme.colors.primary : props.theme.colors.quinary)};
  cursor: pointer;
  &:hover: {
    text-decoration: underline;
    color: #eee;
  };
`;
  // border-bottom: 1px solid ${props => (props.isActive ? props.theme.colors.primary : 'none')};

  // &.${props => props.activeClassName} {
  //   color: ${props => props.theme.colors.primary};
  //   border-bottom: 1px solid ${props => props.theme.colors.primary};
// NavLink.defaultProps = {
//   activeClassName: 'active',
// };


// const activeClassName = 'active';
// export const Nav = styled(Link).attrs({
//   activeClassName,
// })`
//   &.${activeClassName} {
//     border-bottom: 1px solid #e25a5e;
//     color: #e25a5e;
//   }
// `;
