import { useWindowDimensions } from 'hooks';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Colors } from 'shared/colors';
import { ArrowLeftIcon, ArrowRightIcon } from 'shared/icons';
import { ChangePageBtn, PagMainInfo, Wrapper } from './styles';

const BRACK_WIDTH = 440;

interface Props {}

const Paginator: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const page = 2; // fetched from State
  const count = 800; // fetched from State
  const DEFAULT_NUMBERS_BY_PAGE = 7; // fetched from State

  const { width } = useWindowDimensions();

  if (!width) return null;
  const isMobileDevice = width < BRACK_WIDTH;

  const handlePreviousPage = () => {};
  const handleNextPage = () => {};

  const PreviousBtn = (
    <ChangePageBtn type="button" onClick={handlePreviousPage}>
      <ArrowLeftIcon className="mr-2" color={Colors.black} size={20} />
      <span>previous page</span>
    </ChangePageBtn>
  );

  const NextBtn = (
    <ChangePageBtn type="button" onClick={handleNextPage}>
      <span>next page</span>
      <ArrowRightIcon className="ml-2" color={Colors.black} size={20} />
    </ChangePageBtn>
  );

  const PgInfo = (
    <PagMainInfo>
      <span className="number">{page}</span>
      <span> page of </span>
      <span className="number">
        {Math.trunc(count / DEFAULT_NUMBERS_BY_PAGE)}
      </span>
    </PagMainInfo>
  );

  const wrapperStyle = isMobileDevice
    ? 'flex-column'
    : 'justify-content-between';

  return (
    <Wrapper className={`w-100 d-flex align-items-center ${wrapperStyle}`}>
      {!isMobileDevice ? (
        <>
          {PreviousBtn}
          {PgInfo}
          {NextBtn}
        </>
      ) : (
        <>
          {PgInfo}
          <div className="w-100 mt-3 d-flex justify-content-between">
            {PreviousBtn}
            {NextBtn}
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Paginator;
