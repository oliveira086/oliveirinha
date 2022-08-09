import styled from "styled-components";

function Input (props) {
  return (
    <>
      <S.Container width={props.width} height={props.height} placeholder={props.placeholder}>

      </S.Container>
    </>
  )
}

const S = {
  Container: styled.input`
    width: ${(props) => props.width || '10vw'};
    height: ${(props) => props.height || '4vh'};
    background-color: rgba(0, 0, 0, 0) ;
    border-radius: 6px;
    border: solid 0.2rem var(--color-secondary);
    color: #fff;
    padding-left: var(--spacing-nano);

    :focus, input:focus {
      outline: none;
      border: solid 0.2rem #99B3FF;
    }

    ::placeholder {
      color: white;
      opacity: 1;
      font-family: var(--font-family-primary);
    }
  `
}

export default Input;
