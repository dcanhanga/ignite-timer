import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: ${props => props.theme.rem(1)};
`;

export const SideLeft = styled.div`
  display: flex;
  align-items: center;
  & span,
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.theme.rem(48)};
    height: ${props => props.theme.rem(48)};
  }
  & img {
    width: ${props => props.theme.rem(28)};
    height: ${props => props.theme.rem(28)};
  }
`;

export const FlipContainer = styled.button`
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: 600ms ease-in-out;
  ${props => props.theme.title === 'dark' && 'transform: rotateY(180deg)'}
`;
const FlipChild = styled.span`
  position: absolute;
  backface-visibility: hidden;
`;

export const Front = styled(FlipChild)`
  & svg {
    color: ${props => props.theme.colors['text']};
  }
`;
export const Back = styled(FlipChild)`
  & svg {
    color: ${props => props.theme.colors['text']};
  }
  transform: rotateY(180deg);
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

export const Li = styled.li`
  width: ${props => props.theme.rem(48)};
  height: ${props => props.theme.rem(48)};

  & a {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    position: relative;

    &::after {
      content: ' ';
      width: 0%;
      height: 4px;
      background-color: ${props => props.theme.colors.green};
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.7s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }

    & span {
      opacity: 0;
      transition: all 0.7s ease-in-out;
    }

    &:hover span {
      opacity: 1;
      transition: all 0.8s ease-in-out;
    }
    color: ${props => props.theme.colors['text']};
    &.active {
      color: ${props => props.theme.colors['green']};
    }
    transition: all 700ms;
  }
`;

export const Flag = styled.span`
  border-radius: 8px;
  background-color: black;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.font[14].size};
  line-height: 140%;
  position: absolute;
  padding: ${props => props.theme.rem(8)} ${props => props.theme.rem(16)};
  position: absolute;
  top: -35px;

  & svg {
    position: absolute;
    bottom: -19px;
    color: black;
    left: 50%;
    transform: translateX(-50%);
  }
`;
