import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Container from 'styled/Container';
// import {
//   MaxContainer,
// } from 'styled/Responsive';


import {
  fetchCommits,
  commitList,
} from 'redux/modules/commit';

const Header = styled.th`
  text-align: left;
`;


class WhatIDid extends PureComponent {
  componentWillMount() {
    if (this.props.commits.length === 0) {
      this.props.fetchCommits();
    }
  }
  render() {
    return (
      <Container>
        <table width="100%">
          <thead>
            <tr>
              <Header>Project</Header>
              <Header>Commit</Header>
              <Header>At</Header>
            </tr>
          </thead>
          <tbody>
            {
              this.props.commits.map(commit =>
                (
                  <tr key={commit.id}>
                    <td>{commit.repo}</td>
                    <td>{commit.message}</td>
                    <td>{commit.date}</td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </Container>
    );
  }
}
WhatIDid.propTypes = {
  commits: PropTypes.array.isRequired,
  fetchCommits: PropTypes.func.isRequired,
};

const mapStateToProps = state =>
  ({
    commits: commitList(state),
  });
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchCommits,
  }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(WhatIDid);
