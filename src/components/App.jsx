import React, { Component } from 'react';

import Section from 'components/Section';
import FeedbackControls from 'components/FeedbackControls';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = e => {
    const { name } = e.target;

    this.setState(prev => {
      return { [name]: prev[name] + 1 };
    });
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackControls
          onButtonClick={this.handleBtnClick}
          config={['good', 'neutral', 'bad']}
        />
      </Section>
    );
  }
}

export default App;
