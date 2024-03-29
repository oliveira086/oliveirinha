import { useState } from 'react';
import InputMask from 'react-input-mask';
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
          <InputMask id="input-mask" width={props.width}
            height={props.height}
            placeholder={props.placeholder}
            ref={props.ref}
            onChange={props.onChange}
            type={ showPass == true ? 'text' : 'password'}
          /> :
          <InputMask id="input-mask" width={props.width}
            height={props.height}
            placeholder={props.placeholder}
            ref={props.ref}
            onChange={props.onChange}
            type={'text'}
            mask={props.phone == true ? '(+55) 99 999999999' : ''}
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
    max-height: 5vh;
    background-color: rgba(0, 0, 0, 0) ;
    border-radius: 6px;
    border: ${ (props) => props.selected ? 'solid 0.2rem var(--color-primary-light);' : 'solid 0.2rem var(--color-secondary);' };
    align-items: center;
    transition: 0.5s all;
    animation: Fade 0.6s linear forwards;

    #input-mask {
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
    }
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

