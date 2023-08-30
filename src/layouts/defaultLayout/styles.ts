import { styled } from 'styled-components';

export const LayoutContainer = styled.div`
  width: min(${props => props.theme.rem(1200)}, 95%);
  border-radius: 8px;

  background-color: ${props => props.theme.colors['bg-2']};
  margin: ${props => props.theme.rem(80)} auto;
  padding: ${props => props.theme.rem(40)} ${props => props.theme.rem(16)};
  padding-bottom: ${props => props.theme.rem(160)};
`;
