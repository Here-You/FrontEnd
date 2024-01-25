import * as S from './DropDown.style';
import textAlignCenter from '/images/mate/text-center-black.svg';
import textAlignJustify from '/images/mate/text-justify-black.svg';
import textAlignLeft from '/images/mate/text-left-black.svg';
import textAlignRight from '/images/mate/text-right-black.svg';

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
