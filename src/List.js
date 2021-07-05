import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import { Nav, Icons, SongName, AlbumContainer, AlbumCover } from './styles';
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
    </div>
  );
}
