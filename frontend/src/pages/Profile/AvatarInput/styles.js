import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 2rem;
  max-width: 12rem;

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
      border-radius: 0.4rem;
      border: 0.3rem solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
