import * as React from 'react'
import styled from 'styled-components'
import ss from './assets/Desktop.png'

import Wrapper from '../../components/Wrapper'
import { Paragraph } from '../../components/Typography'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import GoogleSignInButton from '../GoogleSignInButton'

const Hero = styled.div`
  grid-column: 3 / span 4;
  grid-row: 3 / span 2;
`

const JumboText = styled.div`
  font-size: 3.5em;
  font-weight: 700;
  margin: 20px 0;
`

const ScreenshotWrapper = styled.div`
  grid-column: 8 / span 5;
  grid-row: 2 / span 4;
`

const Image = styled.img`
  max-height: 100%;
  box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.12);
`

const MailingListButton = styled(Button)`
  margin-left: 0.5em;
`

interface State {
  showMailingList: boolean
}

export default class Home extends React.Component<null, State> {
  constructor() {
    super(null)
    this.state = {
      showMailingList: false,
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Wrapper>
          <Hero>
            <JumboText>{`planning your day so you don't have to`}</JumboText>
            <Paragraph
              paragraph
            >{`Everyone’s got a to-do list, schedular is the productivity app that turns your to-dos into actions. And it does so by learning from your lifestyle and planning your day to suit.`}</Paragraph>
            <br />
            <GoogleSignInButton />
            <a href="https://airtable.com/shrv7FFPvNlR1aU4U" target="_blank">
              <MailingListButton primary>Mailing List</MailingListButton>
            </a>
          </Hero>
          <ScreenshotWrapper>
            <Image src={ss} alt="Desktop" />
          </ScreenshotWrapper>
        </Wrapper>
      </div>
    )
  }
}
