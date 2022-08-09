import Header from '../../components/molecules/Header';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import S from './style';


function Comands () {
  return (
    <>
      <Header />
      <S.Container>
        <S.LeftMenuContainer>
          <h1>Comandos</h1>
          <S.ButtonsContainer>
            <Button label="Todos os comandos"></Button>
            <Button label="Audios"></Button>
            <Button label="Imagens"></Button>
            <Button label="Banco"></Button>
          </S.ButtonsContainer>


        </S.LeftMenuContainer>
        <S.MiddleContainer>
          <Input width='20rem' heigth='var(--spacing-nano)' placeholder="Pesquise o comando" />
        </S.MiddleContainer>
      </S.Container>
    </>
  )
}

export default Comands
