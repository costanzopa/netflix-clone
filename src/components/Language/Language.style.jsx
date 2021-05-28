import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
`;

export const Select = styled.select`
  background-color: #000;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 0.3em 0.2em 0.4em 1.2em;
  text-indent: 0;
  text-transform: none;
  border-radius: 2px;
  background-color: #000;
  background-image: url('images/icons/world.png');
  background-repeat: no-repeat;
  background-size: 0.7em auto;
  background-position: 0.5em center;
  font-size: 0.9em;
  font-weight: 400;
`;

export const Option = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.3em;
`;
