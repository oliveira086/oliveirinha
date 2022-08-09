import { useState, useEffect } from 'react';
import Header from '../../components/molecules/Header';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import S from './style';
import useWindowDimensions from '../../utils/windowDimensions';
import ComandItem from '../../components/atoms/ComandItem';

const allComands = [
  { name: 'rapaz', command: '!rapaz', description: 'Charopinho falando rapaz' },
  { name: 'cavalo', command: '!cavalo', description: 'Voz grava falando CAVALO' },
  { name: 'ui', command: '!ui', description: 'UIIII' },
  { name: 'xiii', command: '!xiii', description: 'Uma voz falando Xiii' },
]

function Comands () {
  const [comands, setComands] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const search = (value) => {
    setSearchValue(value);

    comands.map(comandsCallback => {
      if(comandsCallback.name.indexOf(value) > -1) {
        setComands([comandsCallback]);
      }
    });

    if(value == '') {
      setComands(allComands);
    }
  }

  useEffect(() => {
    setComands(allComands);
  }, []);

  let dimensions = useWindowDimensions();
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
          <Input
            width={dimensions.width > 600 ? '20rem' : '16rem'}
            heigth='var(--spacing-nano)'
            placeholder="Pesquise o comando"
            value={searchValue}
            onChange={e => search(e.target.value)}
          />

          <S.ComandsContainer>
            {comands.map(comandsCallback => {
              return (
                <ComandItem command={comandsCallback.command} description={comandsCallback.description}/>
              )
            })}

          </S.ComandsContainer>
        </S.MiddleContainer>
      </S.Container>
    </>
  )
}

export default Comands
