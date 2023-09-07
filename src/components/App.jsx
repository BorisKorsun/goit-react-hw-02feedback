import React, { Component } from 'react';

import Section from 'components/Section';
import FeedbackControls from 'components/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackControls config={['good', 'neutral', 'bad']}/>
      </Section>
    );
  }
}

export default App;
