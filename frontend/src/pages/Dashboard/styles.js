import styled from 'styled-components';

export const Container = styled.div`
  max-width: 60rem;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 2.4rem;
      margin: 0 1.5rem;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    margin-top: 3rem;
  }
`;

export const Time = styled.li`
  padding: 2rem;
  border-radius: 0.4rem;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#17c114' : '#7159c1')};
    font-size: 2rem;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 0.3rem;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
