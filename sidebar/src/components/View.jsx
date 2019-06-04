import styled from 'styled-components'

export const ViewWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

export const ViewHeader = styled.div`
  position: absolute;
  height: 3.125em;
  line-height: 3.125em;
  vertical-align: middle;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ViewBody = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 3.125em;
  bottom: 3.125em;
  padding: 1.5em 0;
`

export const ViewFooter = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 3.125em;
  bottom: 0;
`
