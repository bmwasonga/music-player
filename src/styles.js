import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(89, 88, 83, 1) 0%,
    rgba(42, 41, 39, 1) 52%,
    rgba(21, 21, 21, 1) 100%
  );
  height: 90vh;
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
`;

export const Artist = styled.p`
  color: #9e9a8d;
`;

export const SlideContainer = styled.div`
  width: 100%;
  border: 1px solid red;
`;

export const MusicSlide = styled.input`
  color: #9e9a8d;
  width: 90%;
  outline: none;
`;
