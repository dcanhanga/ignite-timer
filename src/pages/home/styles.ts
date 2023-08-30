import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;
  height: 100%;
  display: flex;
  gap: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FromContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: min(656px, 100%);
`;

export const InputGroups = styled.div`
  color: ${props => props.theme.colors.text};
  font-weight: 700;
  font-size: ${props => props.theme.font[18].size};
  line-height: ${props => props.theme.font[18].lineHeight};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 620px) {
    flex-direction: row;
    gap: 8px;
  }
  label {
    font: inherit;
  }
`;

const BaseInput = styled.input`
  padding: 8px 0;
  font: inherit;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${props => props.theme.colors['gray-4']};
  color: ${props => props.theme.colors.text};
  text-align: center;
  padding-bottom: 2px;
  transition: border-bottom-color 0.7s linear;

  &:active,
  &:focus {
    border-bottom-color: ${props => props.theme.colors['green']};
    transition: border-bottom-color 0.7s linear;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    padding-bottom: 2px;
    border-bottom-color: ${props => props.theme.colors['green']};
    -webkit-text-fill-color: ${props => props.theme.colors.text} !important;
    caret-color: ${props => props.theme.colors.text};
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const Task = styled(BaseInput)`
  width: 90%;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
  @media screen and (min-width: 620px) {
    flex: 1;
  }
`;

export const MinutesAmount = styled(BaseInput)`
  width: ${props => props.theme.rem(72)};
`;

export const Countdown = styled.div`
  display: flex;
  gap: 8px;
  & span {
    background-color: ${props => props.theme.colors['bg-3']};
    color: ${props => props.theme.colors.timer};
    font-family: ${props => props.theme.fontFamily['roboto-mono']};
    font-size: ${props => props.theme.font[48].size};
    line-height: ${props => props.theme.font[48].lineHeight};
    width: ${props => props.theme.rem(56)};
    height: ${props => props.theme.rem(96)};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.7s;
    @media screen and (min-width: 420px) {
      width: ${props => props.theme.rem(80)};
      height: ${props => props.theme.rem(112)};
      font-size: ${props => props.theme.font[60].size};
      line-height: ${props => props.theme.font[160].lineHeight};
    }

    @media screen and (min-width: 630px) {
      width: ${props => props.theme.rem(128)};
      height: ${props => props.theme.rem(198.02)};
      font-size: ${props => props.theme.font[160].size};
      line-height: ${props => props.theme.font[160].lineHeight};
    }
  }

  .divider {
    background-color: transparent;
    width: 32px;
  }

  @media screen and (min-width: 422px) {
    gap: 10px;
  }
  @media screen and (min-width: 650px) {
    gap: 16px;
  }
`;
export const Control = styled.button`
  background-color: ${props => props.theme.colors['bg-4']};
  border-radius: 8px;
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-family: Roboto;
  font-size: ${props => props.theme.font[16].size};
  line-height: ${props => props.theme.font[16].lineHeight};
  font-weight: 700;
  padding: 16px 40px;
  text-transform: capitalize;
  width: min(90%, ${props => props.theme.rem(648)});
  &:disabled {
    opacity: 0.7;
  }
`;
