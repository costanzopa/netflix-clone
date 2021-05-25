import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Select = styled.select`
  background-color: #000;
  border: 1px solid #333;
  color: #999;
  font-size: 16px;
  padding: 1em 0.1em 1em 2em;
  line-height: 1.7;
  text-indent: 0;
  text-transform: none;
  border-radius: 2px;
  background-color: #000;
  background-image: url('images/misc/world.png');
  background-repeat: no-repeat;
  background-size: 1em auto;
  background-position: 0.4em center;
`;

export const Option = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
`;
