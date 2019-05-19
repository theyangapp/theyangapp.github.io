import React, { PureComponent } from "react";
import styled, { withTheme } from "styled-components";
import { View } from "components";

const Container = styled.div`
  width: 750px;
  overflow: hidden;
  align-self: center;
  overflow: "auto";
`;

const QuestionContainer = styled(View)`
  background-color: ${props => props.theme.light(0.9)};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing_2};
  margin-top: ${props => props.theme.spacing_2};
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  color: ${props => props.theme.dark()};
  font-size: ${props => props.theme.H3};
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing_2};
`;
const Description = styled.div`
  color: ${props => props.theme.dark()};
  font-size: ${props => props.theme.H4};
  max-width: 500px;
`;

class Faq extends PureComponent {
  render() {
    return (
      <Container>
        <QuestionContainer>
          <Title>What's the magic of Camp Tracker?</Title>
          <Description>
            It seems like every weekend, popular campsites like Yosemite are
            sold-out.
            {"\n"}
            {"\n"}
            But the reality is, up to 4,000 campsites open up almost every day
            due to cancellations, and many of them go unused.
            {"\n"}
            {"\n"}
            Thus, we created Camp Tracker to look for cancellations every 5
            minutes and notify our users when sold-out campsites become
            available.
          </Description>
        </QuestionContainer>
        <QuestionContainer>
          <Title>How does it work?</Title>
          <Description>
            Tell us when, where, and how many nights you want to camp for. We
            will notify you when a spot opens up.
          </Description>
        </QuestionContainer>
        <QuestionContainer>
          <Title>What are my chances of finding a spot?</Title>

          <Description>
            Our users have a 92% chance of finding a spot when they track for at
            least 1 week.
          </Description>
        </QuestionContainer>
        <QuestionContainer>
          <Title>Do you book for me?</Title>
          <Description>
            No, that's not our deal. We help you find availabilities and notify
            you when they happen. It's up to you to make the reservation.
          </Description>
        </QuestionContainer>
        <QuestionContainer>
          <Title>How much does it cost?</Title>
          <Description>
            1 Tracker - $4.99{"\n"}5 Trackers (Bundle) - $3.00 each{"\n"}10
            Trackers (Bundle) - $2.50 each
          </Description>
        </QuestionContainer>
      </Container>
    );
  }
}

export default withTheme(Faq);
