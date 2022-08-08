import styled from "styled-components";
import useWindowDimensions from '../../utils/windowDimensions';


function Button (props) {
  if(props.primary) {
    return (
      <S.ContainerPrimary width={props.width} heigth={props.heigth} onClick={props.onClick}>
        {props.icon}
        {props.label}
      </S.ContainerPrimary>
    );
  } else {
    return (
      <S.ContainerSecondary width={props.width} onClick={props.onClick}>
        {props.icon}
        {props.label}
      </S.ContainerSecondary>
    );
  }

}

const S = {
  ContainerPrimary: styled.button`
    display: flex;
    width: ${(props) => props.width || '10vw'};
    height: ${(props) => props.heigth || '4vh'};
    background-color: var(--color-secondary);
    border-style: none;
    border-radius: 8px;
    cursor: pointer;
    margin: 10px;
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-medium);
    justify-content: center;
    align-items: center;
    color: #000;

    svg {
      margin-right: 10px;
    }

  `,
  ContainerSecondary: styled.button`
    width: ${(props) => props.width || '10vw'};
    height: 4vh;
    background-color: rgba(0, 0, 0, 0) ;
    border-style: none;
    border-radius: 8px;
    border: solid 0.2rem var(--color-secondary);
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-medium);
    color: var(--color-secondary);
    cursor: pointer;
    margin: 10px;
  `,
}

export default Button;
