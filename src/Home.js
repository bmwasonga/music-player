import React from 'react';
import Song from './Song';
import List from './List';
import { Container } from './styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Song} />
            <Route exact path="/list" component={List} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}
