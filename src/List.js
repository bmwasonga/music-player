import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { BsThreeDotsVertical, BsPauseFill } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import {
  Nav,
  Icons,
  SongName,
  AlbumContainer,
  AlbumCover,
  SongListContainer,
  SongList,
  SongNumber,
  Artist,
  PlayingContainer,
  MainContainer,
} from './styles';

import AOS from 'aos';
import billie from './assets/billie.png';

import { data } from './assets/data';

AOS.init();

export default function List() {
  const [appState, setState] = useState({
    activeObject: [0],
    data,
  });

  const handleActive = (idx) => {
    setState({ ...appState, activeObject: appState.data[idx] });
  };

  const toggleActive = (idx) => {
    if (appState.data[idx] === appState.activeObject) {
      return 'active';
    } else {
      return null;
    }
  };

  return (
    <div id="list">
      <Nav>
        <Icons>
          <IoIosArrowBack />
        </Icons>
        <SongName>{appState.activeObject.title}</SongName>
        <Icons>
          <BsThreeDotsVertical />
        </Icons>
      </Nav>

      <AlbumContainer>
        <Icons>
          <AiFillHeart />
        </Icons>
        <AlbumCover src={billie} alt="Billie" />

        <Icons>
          <FiDownload />
        </Icons>
      </AlbumContainer>

      <MainContainer>
        {data.map((mdata, idx) => {
          const { title } = mdata;
          return (
            <SongListContainer
              className={toggleActive(idx)}
              onClick={() => {
                handleActive(idx);
              }}
              key={idx}
              data-aos="flip-down"
            >
              <SongNumber> {idx + 1}</SongNumber>
              <SongList>
                <SongName>{title}</SongName>
                <Artist>{mdata.artist.name}</Artist>
              </SongList>

              <Icons>
                <BsThreeDotsVertical />
              </Icons>
            </SongListContainer>
          );
        })}
      </MainContainer>

      <PlayingContainer>
        <AlbumCover src={billie} alt="billie" />
        <SongName>{appState.activeObject.title}</SongName>
        <Icons>
          <AiOutlineHeart />
        </Icons>

        <Icons>
          <BsPauseFill />
        </Icons>
      </PlayingContainer>
    </div>
  );
}
