import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 26rem;
  left: calc(50% - 13rem);
  top: calc(100% + 3rem);
  background: #fff;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
  padding: 1.5rem 0.5rem;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 1rem);
    top: -1rem;
    width: 0;
    height: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1rem solid #fff;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 26rem;
  padding: 0.5rem 1.5rem;
`;

export const Notification = styled.div`
  color: #222;

  & + div {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  time {
    display: block;
    font-size: 1.2rem;
    opacity: 0.6;
    margin-bottom: 0.5rem;
  }

  button {
    font-size: 1.2rem;
    border: 0;
    background: none;
    color: ${lighten(0.1, '#7159c1')};
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 8px;
        margin-left: 1rem;
      }
    `}
`;
