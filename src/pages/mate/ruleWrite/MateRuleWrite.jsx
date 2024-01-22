import { useState } from 'react';

import * as S from './MateRuleWrite.style';
import textAlignCenter from '/images/text-center-black.svg';
import textAlignJustify from '/images/text-justify-black.svg';
import textAlignLeft from '/images/text-left-black.svg';
import textAlignRight from '/images/text-right-black.svg';
import DropDown from '@/components/mate/DropDown';
import RuleButton from '@/components/mate/RuleButton';

const MateRuleWritePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [textAlign, setTextAlign] = useState('left');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [sortButtonImage, setSortButtonImage] = useState(textAlignLeft);

  const handleAlignChange = align => {
    setTextAlign(align);
    setDropdownVisible(false);

    switch (align) {
      case 'justify':
        setSortButtonImage(textAlignJustify);
        break;
      case 'left':
        setSortButtonImage(textAlignLeft);
        break;
      case 'center':
        setSortButtonImage(textAlignCenter);
        break;
      case 'right':
        setSortButtonImage(textAlignRight);
        break;
      default:
        break;
    }
  };

  return (
    <S.CenteredContainer>
      <S.InputContainer>
        <S.Topcontainer>
          <S.SortButton onClick={() => setDropdownVisible(!dropdownVisible)}>
            <img src={sortButtonImage} alt="정렬 아이콘" />
            <DropDown
              visible={dropdownVisible}
              handleAlignChange={handleAlignChange}
            />
          </S.SortButton>
          <S.StyledTitle
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <S.PlusButton />
        </S.Topcontainer>

        <S.InputBox
          value={content}
          onChange={e => setContent(e.target.value)}
          style={{ textAlign: textAlign }}
        />
      </S.InputContainer>

      <RuleButton text="발행하기" />
    </S.CenteredContainer>
  );
};

export default MateRuleWritePage;
