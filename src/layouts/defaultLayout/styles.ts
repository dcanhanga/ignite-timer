import { styled } from 'styled-components';

export const LayoutContainer = styled.div`
  width: min(${props => props.theme.rem(1200)}, 95%);
  margin: ${props => props.theme.rem(80)} auto;
  padding: ${props => props.theme.rem(40)};
  // max-height: calc(100vh - ${props => props.theme.rem(80 * 2)});
  height: calc(100vh - ${props => props.theme.rem(80 * 2)});

  border-radius: 8px;
  background-color: ${props => props.theme.colors['bg-2']};
`;
