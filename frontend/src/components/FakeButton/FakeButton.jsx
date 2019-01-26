import * as React from 'react'
import styled from 'styled-components'

const FakeButtonWrapper = styled.div`
    color: peru;

    &:hover {
        color: pink;
        cursor: pointer;
    }
`

export default function FakeButton() {
    return (
        <FakeButtonWrapper>Fake Button</FakeButtonWrapper>
    )
}