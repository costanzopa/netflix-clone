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

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
