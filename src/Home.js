import React from 'react';
import Song from './Song';
import List from './List';
import { Container } from './styles';

export default function Home() {
  return (
    <div>
      <Container>
        {/* <Song /> */}

        <List />
      </Container>
    </div>
  );
}
