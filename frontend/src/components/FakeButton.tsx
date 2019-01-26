import * as React from 'react'
import styled from 'styled-components'

/* example styled-components usage w/ sass */
const FakeButtonWrapper = styled.div`
    color: peru;

    &:hover {
        color: pink;
        cursor: pointer;
    }
`

/* example typescript usage: prop definition */
export interface FakeButtonProps { text: string }

export default class FakeButton extends React.Component<FakeButtonProps, {}> {
    render() {
        return <FakeButtonWrapper>{this.props.text}</FakeButtonWrapper>
    }
}