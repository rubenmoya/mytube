import styled from 'styled-components';

const SearchInput = styled.input`
  border: 1px solid #ececec;
  border-radius: 100px;
  color: #aaa;
  font-size: .8rem;
  margin-left: 1.6rem;
  max-width: 500px;
  outline: none;
  padding: .6rem 1rem;
  transition: .3s all ease-in-out;
  width: 100%;

  &:focus {
    border: 1px solid #ccc;
  }
`;

export default SearchInput;
