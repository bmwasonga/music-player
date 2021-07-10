import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {
  Icons,
  Nav,
  SongCoverPhoto,
  SongDetails,
  SongName,
  Title,
  Artist,
  SlideContainer,
  MusicSlide,
  ControlContainer,
  PausePlay,
  PrevBtn,
  NextBtn,
  ShuffleBtn,
} from './styles';
import billie from './assets/billie.png';

export default function Song(props) {
  return (
    <div>
      {/* This will render the songs */}

      <Nav>
        <Icons>
          <IoIosArrowBack />
        </Icons>
        <Title>Home</Title>
        <Icons>
          <BsThreeDotsVertical />
        </Icons>
      </Nav>

      <SongCoverPhoto src={billie} alt="This is the picture" />

      <SongDetails>
        <SongName>The Song name </SongName>
        <Artist>The artist will go here</Artist>
      </SongDetails>

      <SlideContainer>
        <MusicSlide type="range" />
      </SlideContainer>

      <ControlContainer>
        <PausePlay>
          {' '}
          <Icons>
            <IoIosArrowBack />
          </Icons>
        </PausePlay>
        <PrevBtn>
          {' '}
          <Icons>
            <IoIosArrowBack />
          </Icons>
        </PrevBtn>
        <ShuffleBtn>
          {' '}
          <Icons>
            <IoIosArrowBack />
          </Icons>
        </ShuffleBtn>

        <NextBtn>
          {' '}
          <Icons>
            <IoIosArrowBack />
          </Icons>
        </NextBtn>
      </ControlContainer>
    </div>
  );
}
