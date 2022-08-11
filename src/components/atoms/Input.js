import { useState } from 'react';

import styled from "styled-components";
import { forwardRef } from 'react';
import { BsEye, BsEyeSlash } from "react-icons/bs";


function Input (props) {

  const [showPass, setShowPass] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <>
      <S.Container
        width={props.width}
        height={props.height}
        onFocus={() => setSelected(true)}
        onBlur={() => setSelected(false)}
        selected={selected}
      >

        { props.password == true ?
          <S.InputContainer width={props.width}
            height={props.height}
            placeholder={props.placeholder}
            ref={props.ref}
            onChange={props.onChange}
            type={ showPass == true ? 'text' : 'password'}
          /> :
          <S.InputContainer width={props.width}
            height={props.height}
            placeholder={props.placeholder}
            ref={props.ref}
            onChange={props.onChange}
            type={'text'}
          />
        }

        { props.password ?
          <S.IconContainer onClick={() => setShowPass(!showPass)}>
            { showPass ?
              <BsEyeSlash size={'26px'}/>
              :
              <BsEye size={'26px'} />
            }
          </S.IconContainer>
          :
          <>
          </>
        }
      </S.Container>
    </>
  )
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    width: ${(props) => props.width || '10vw'} ;
    height: auto;
    background-color: rgba(0, 0, 0, 0) ;
    border-radius: 6px;
    border: ${ (props) => props.selected ? 'solid 0.2rem var(--color-primary-light);' : 'solid 0.2rem var(--color-secondary);' };
    align-items: center;
    transition: 0.5s all;
    animation: Fade 0.6s linear forwards;
  `,

  IconContainer: styled.div`
    display: flex;
    width: 2vw !important;
    height: 2vw !important;
    align-items: center;
    justify-content: center !important;
    cursor: pointer;

    @media (max-width: 800px) {
      display: flex;
      width: 6vw !important;
      height: 6vw !important;
      align-items: center;
      justify-content: center !important;
      cursor: pointer;
      margin-right: var(--spacing-quarck);
    }
  `,
  InputContainer: styled.input`
    width: 80%;
    height: ${(props) => props.height || '4vh'};
    background-color: rgba(0, 0, 0, 0);
    border-style: none;
    outline: none;

    ::placeholder {
      color: white;
      opacity: 1;
      font-family: var(--font-family-primary);
    }

    color: #fff;
    padding-left: var(--spacing-nano);
  `
}

export default forwardRef(Input);

