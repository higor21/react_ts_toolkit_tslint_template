import React, { InputHTMLAttributes } from 'react';
import { Colors } from 'shared/colors';
import { SearchIcon } from 'shared/icons';
import { IptWrapper, Ipt, Label } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  withoutIcon?: boolean;
}

const Input: React.FC<Props> = ({ label, withoutIcon, ...iptProps }) => {
  return (
    <IptWrapper>
      {label && <Label className="mb-0">{label}</Label>}
      <Ipt className="ipt">
        <input type="text" {...iptProps} />
        {!withoutIcon && <SearchIcon color={Colors.black} size={20} />}
      </Ipt>
    </IptWrapper>
  );
};

export default Input;
