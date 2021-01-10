import React, { ButtonHTMLAttributes } from 'react';
import { Colors } from 'shared/colors';
import { CheckIcon, XIcon } from 'shared/icons';
import styled from 'styled-components';

const BtnWrapper = styled.button<{ btnColor: string }>`
  border-radius: 1em;
  box-shadow: 0 0 10px -6px;
  transition-duration: 0.4s;

  & > span {
    color: ${(props) => props.btnColor};
    font-weight: 500;
    font-size: 1.2em;
  }
  &:hover {
    box-shadow: 0 0 10px -2.5px ${(props) => props.btnColor};
    transition-duration: 0.4s;
  }
`;

const DEFAULT_ICON_SIZE = 25;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'submit' | 'cancel';
}

const Button: React.FC<Props> = ({ mode = 'submit' }) => {
  const label = mode === 'submit' ? 'Submit' : 'Cancel';
  const color = mode === 'submit' ? Colors.green : Colors.red;
  const Icon = mode === 'submit' ? CheckIcon : XIcon;

  return (
    <BtnWrapper btnColor={color} className="py-1 px-2">
      <span className="mr-2">{label}</span>
      {<Icon color={color} size={DEFAULT_ICON_SIZE} />}
    </BtnWrapper>
  );
};

export default Button;
