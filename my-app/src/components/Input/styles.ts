import { Colors } from 'shared/colors';
import styled from 'styled-components';

export const IptWrapper = styled.div``;

export const Ipt = styled.div`
  border-radius: 1em;
  box-shadow: inset 0 0 10px -2px ${Colors.shadow};
  width: fit-content;
  padding: 0.5em 1em;

  & > input {
    color: ${Colors.black};
    font-weight: 500;
    font-size: 1.4em;

    &::placeholder {
      color: ${Colors.gray};
    }
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 1.2em;
  color: ${Colors.blue};
`;