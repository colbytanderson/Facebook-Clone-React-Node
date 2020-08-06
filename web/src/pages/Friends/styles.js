import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';

export const Container = styled.div`
  flex: 1;
  animation: 700ms ${fadeIn} ease;

  margin-top: 60px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const NoFriends = styled.div`
  width: 100%;
  height: 60%;

  text-align: center;
  color: var(--light-text);

  img {
    width: 60%;
  }

  h1 {
    margin-top: 30px;
  }
`;
