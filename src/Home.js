import React from 'react';
import Song from './Song';
import { Container } from './styles';

export default function Home() {
  return (
    <div>
      <Container>
        <Song />
      </Container>
    </div>
  );
}
