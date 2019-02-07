import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 20px;
  margin: 20px;
  font-family: Karla;
  font-style: normal;
  line-height: normal;
`

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <TextWrapper>{this.props.children}</TextWrapper>
      </div>
    )
  }
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
