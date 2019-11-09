import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 3rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  height: 6.4rem;
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 2rem;
      padding-right: 2rem;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 2rem;
  padding-left: 2rem;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 1rem;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 1.2rem;
      color: #999;
    }
  }

  img {
    width: 3.2;
    object-fit: cover;
    offset-position: center;
    height: 3.2rem;
    border-radius: 0.4rem;
  }
`;
