import * as S from './DropDown.style';
import textAlignCenter from '/images/text-center-black.svg';
import textAlignJustify from '/images/text-justify-black.svg';
import textAlignLeft from '/images/text-left-black.svg';
import textAlignRight from '/images/text-right-black.svg';

const DropDown = ({ visible, handleAlignChange }) => {
  return (
    <S.DropdownContainer visible={visible}>
      <S.DropdownItem
        onClick={() => handleAlignChange('left')}
        src={textAlignLeft}
      />
      <S.DropdownItem
        onClick={() => handleAlignChange('center')}
        src={textAlignCenter}
      />
      <div style={{ padding: '7px 5px' }}>
        <S.DropdownItem
          onClick={() => handleAlignChange('right')}
          src={textAlignRight}
        />
      </div>
      <S.DropdownItem
        onClick={() => handleAlignChange('justify')}
        src={textAlignJustify}
      />
    </S.DropdownContainer>
  );
};

export default DropDown;
