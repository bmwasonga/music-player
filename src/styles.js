import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(89, 88, 83, 1) 0%,
    rgba(42, 41, 39, 1) 52%,
    rgba(21, 21, 21, 1) 100%
  );
  height: 950px;
  width: 450px;
  max-width: 450px;
  border-radius: 35px 35px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.66);
  -webkit-box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.66);
  padding: 15px;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
`;

export const Icons = styled.a`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9e9a8d;
  font-size: x-large;
  cursor: pointer;

  &:hover {
    background-color: #9e9a8d;
    color: #595853;
    border-radius: 25px 25px;
  }
`;

export const Title = styled.h1`
  font-family: acumin-pro, sans-serif;
  font-weight: 700;
  font-style: normal;
  padding: 0;
  margin: 0;
  color: #9e9a8d;
`;

export const SongCoverPhoto = styled.img`
  margin: 16px 0;
  width: 80%;
  height: 350px;
  border-radius: 40px 40px;
  box-shadow: rgba(255, 255, 255, 0.2) -1em 0px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px, rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.5) 0px 5px 10px;
`;

export const SongDetails = styled.div`
  color: #9e9a8d;
  text-align: center;
`;
export const SongName = styled.h2`
  color: #9e9a8d;
  margin: 0;
  padding: 0;
  overflow-wrap: normal;
  text-overflow: ellipsis;
`;

export const Artist = styled.p`
  color: #9e9a8d;
`;

export const SlideContainer = styled.div`
  width: 100%;
`;

export const MusicSlide = styled.input`
  background: #595853;
  width: 90%;
  outline: none;
  height: 25px;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &::-moz-range-progress {
    background: #b7b3a6;
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: 30px;
    width: 30px;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: 30px;
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
  }
`;

export const AlbumContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5em 0;
  margin: 16px 0;
`;

export const AlbumCover = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 25px 25px;
  background-size: contain;
`;

export const SongListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin: 12px;

  &.active {
    background-color: #2a2927;
    border-radius: 25px 25px;
    box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.66);
  }
`;

export const SongList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SongNameAndTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SongNumber = styled.h1`
  color: #9e9a8d;
  padding: 0 12px;
`;

export const PlayingContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.66);
  padding: 12px;
  border-radius: 25px 25px 25px;
  justify-content: space-around;
`;

export const MainContainer = styled.div`
  overflow-y: scroll;
  height: 490px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

// create the four segmants for each of the four controlls
// we shall use different colors to figure out the different color schema
// we shall also give the pies some valies to ensure the are rightly sized
export const ControlContainer = styled.div`
  margin: 4em;
  border-radius: 50%;
  width: 70%;
  height: auto;
  padding-top: 70%;
  background: white;
  position: relative;
  overflow: hidden;
  border: none;

  box-shadow: 10px 10px 42px 0px rgba(256, 256, 256, 0.2);
`;

export const PausePlay = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(89, 88, 83, 1) 0%,
    rgba(42, 41, 39, 1) 52%,
    rgba(21, 21, 21, 1) 100%
  );
  border: 1px dashed black;
  height: 200px;
  width: 200px;
  position: absolute;
  transform: rotate(46deg) translate(-292px) translateY(-115px)
    translateX(255px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrevBtn = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(89, 88, 83, 1) 0%,
    rgba(42, 41, 39, 1) 52%,
    rgba(21, 21, 21, 1) 100%
  );
  border: 1px dashed black;
  height: 200px;
  width: 200px;
  position: absolute;
  transform: rotate(46deg) translate(-292px) translateY(-116px) translateX(54px);
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: rotate(45deg) translate(-412px) translateY(-69px) translateX(27px); */
`;

export const NextBtn = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(89, 88, 83, 1) 0%,
    rgba(42, 41, 39, 1) 52%,
    rgba(21, 21, 21, 1) 100%
  );
  border: 1px dashed black;
  height: 200px;
  width: 200px;
  position: absolute;
  transform: translate(0, -191%) rotate(-86deg) rotate(-48deg)
    translateX(-241px) translateY(47px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShuffleBtn = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(89, 88, 83, 1) 0%,
    rgba(42, 41, 39, 1) 52%,
    rgba(21, 21, 21, 1) 100%
  );
  border: 1px dashed black;
  height: 200px;
  width: 200px;
  position: absolute;
  transform: translate(0, -191%) rotate(-86deg) rotate(-48deg) translateX(-40px)
    translateY(47px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
