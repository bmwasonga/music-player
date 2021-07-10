import React from 'react';
import Song from './Song';
import List from './List';
import { Container } from './styles';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Container>
        <Router>
          <Song />
          <List />
        </Router>
      </Container>
    </div>
  );
}
