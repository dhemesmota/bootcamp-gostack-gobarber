import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 3rem;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      object-fit: cover;
      object-position: center;
      height: 12rem;
      width: 12rem;
      border-radius: 50%;
      border: 0.3rem solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
