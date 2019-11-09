import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100vh;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 31rem;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 0.4rem;
      height: 4.4rem;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 1rem;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      margin: 0.5rem 0 0;
      height: 4.4rem;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 0.4rem;
      font-size: 1.6rem;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#3b9eff')};
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 1rem;
      font-weight: bold;
    }

    a {
      color: #fff;
      margin-top: 1.5rem;
      font-size: 1.6rem;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
