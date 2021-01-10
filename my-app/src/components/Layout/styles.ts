import { Colors } from 'shared/colors';
import styled from 'styled-components';

export const Header = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(123, 140, 222, 0.21) 0%,
    ${Colors.white} 100%
  );
  z-index: 1;
  height: calc(0.16 * 100vh);
  min-height: 55px;
  border-radius: 0 0 15px 15px;
  box-shadow: 0 9px 40px -10px ${Colors.shadow};
  `;

export const Body = styled.div`
  max-width: 600px;
  height: calc(0.84 * 100vh);
  margin-top: calc(0.16 * 100vh);
`;
