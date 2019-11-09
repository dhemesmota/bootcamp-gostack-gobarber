import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 60rem;
  margin: 5rem auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 0.4rem;
      height: 4.4rem;
      padding: 0 1.5rem;
      color: #fff;
      margin: 0 0 1rem;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 1rem 0 2rem;
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
  }
  > button {
    width: 100%;
    margin: 1rem 0 0;
    height: 4.4rem;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 0.4rem;
    font-size: 1.6rem;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 1rem;

  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 12rem;

    input + input {
      margin-bottom: 0;
    }
  }
`;
