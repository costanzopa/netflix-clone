import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.45)
    ),
    url(${({ src }) =>
        src ? `images/misc/${src}.jpg` : 'images/misc/home-bg.jpg'})
      top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 50px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const RightSideGroup = styled.div`
  display: flex;
  align-items: center;
  width: 12%;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: 45%;
    flex-direction: row;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  background-color: #e50914;
  color: white;
  line-height: normal;
  font-size: 1rem;
  font-weight: 400;
  border: 0;
  right: 0;
  border-radius: 3px;
  height: fit-content;
  border-radius: 3px;
  padding: 7px 17px;
  float: none;
  margin-top: 0;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #f40612;
  }
`;
