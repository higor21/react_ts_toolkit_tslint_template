import { useWindowDimensions } from 'hooks';
import React, { HTMLAttributes } from 'react';
import { Colors } from 'shared/colors';
import { Edit3Icon, TrashIcon } from 'shared/icons';
import { PhoneProps } from 'shared/types';
import { Button, Card, Number, PriceDetail } from './styles';

const BRACK_WIDTH = 540;

interface Props extends PhoneProps, HTMLAttributes<HTMLDivElement> {
  handleRemove: () => void;
  handleEdit: () => void;
}

const PhoneDetailCard: React.FC<Props> = ({
  phoneNumber,
  currency,
  setupPrice,
  monthyPrice,
  handleEdit,
  handleRemove,
  ...divProps
}) => {
  const { width } = useWindowDimensions();

  if (!width) return null;

  const isMobileDevice = width < BRACK_WIDTH;

  const cardStyle = isMobileDevice ? 'flex-column' : '';
  const cardPriceDetailStyle = isMobileDevice ? 'my-4' : '';
  const cardBtnsStyle = isMobileDevice ? 'align-self-end' : '';

  return (
    <Card
      {...divProps}
      className={`py-2 px-3 w-100 d-flex ${cardStyle} align-items-center justify-content-between`}
    >
      <Number>{phoneNumber}</Number>
      <PriceDetail className={cardPriceDetailStyle}>
        <h3 className="title text-center">
          Cost in <strong>{currency}</strong>
        </h3>
        <div className="values d-flex align-items-center justify-content-between">
          <span>
            Setup: <strong>{setupPrice}</strong>
          </span>
          <span>
            Monthy: <strong>{monthyPrice}</strong>
          </span>
        </div>
      </PriceDetail>
      <div
        className={`${cardBtnsStyle} d-flex align-items-center justify-content-end`}
      >
        <Button type="button" onClick={handleEdit}>
          <Edit3Icon color={Colors.orange} size={24} />
        </Button>
        <Button type="button" onClick={handleRemove}>
          <TrashIcon color={Colors.red} size={24} />
        </Button>
      </div>
    </Card>
  );
};

export default PhoneDetailCard;
