import React from 'react';
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
  SongNameAndTitle,
  PlayingContainer,
} from './styles';
import billie from './assets/billie.png';

export default function List() {
  return (
    <div>
      <Nav>
        <Icons>
          <IoIosArrowBack />
        </Icons>
        <SongName>This is the name of the song playing</SongName>
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

      <SongListContainer>
        <SongNumber>1</SongNumber>

        <SongList>
          <SongName>The name of the song</SongName>
          <Artist>Billie</Artist>
        </SongList>
        <Icons>
          <BsThreeDotsVertical />
        </Icons>
      </SongListContainer>

      <SongListContainer>
        <SongNumber>1</SongNumber>

        <SongList>
          <SongName>The name of the song</SongName>
          <Artist>Billie</Artist>
        </SongList>
        <Icons>
          <BsThreeDotsVertical />
        </Icons>
      </SongListContainer>

      <SongListContainer>
        <SongNumber>1</SongNumber>

        <SongList>
          <SongName>The name of the song</SongName>
          <Artist>Billie</Artist>
        </SongList>
        <Icons>
          <BsThreeDotsVertical />
        </Icons>
      </SongListContainer>

      <SongListContainer>
        <SongNumber>1</SongNumber>

        <SongList>
          <SongName>The name of the song</SongName>
          <Artist>Billie</Artist>
        </SongList>
        <Icons>
          <BsThreeDotsVertical />
        </Icons>
      </SongListContainer>

      <SongListContainer>
        <SongNumber>1</SongNumber>

        <SongList>
          <SongName>The name of the song</SongName>
          <Artist>Billie</Artist>
        </SongList>
        <Icons>
          <BsThreeDotsVertical />
        </Icons>
      </SongListContainer>

      <PlayingContainer>
        <AlbumCover src={billie} alt="billie" />
        <SongName>The song playing</SongName>
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
