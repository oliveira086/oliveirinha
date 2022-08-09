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
  { name: 'elegosta', command: '!elegosta', description: 'Ele gooosta!' },
  { name: 'okok', command: '!okok', description: 'Uma voz falando OK OK' },
  { name: 'aimamae', command: '!aimamae', description: 'Ai ai mamããe' },
  { name: 'queissomeufilho', command: '!queissomeufilho', description: 'Que isso meu filho calma' },
  { name: 'tome', command: '!tome', description: 'Uma voz falando Tome!' },
  { name: 'eissoai', command: '!eissoai', description: 'E isso ai galera do Reggae' },
  { name: 'olhaapeda', command: '!olhaapeda', description: 'Olha a pedra' },
  { name: 'sonacara', command: '!sonacara', description: 'Dô só na cara pra estragar o velório disse o Daniel para o reporter' },
  { name: 'sotenhoregistro', command: '!sotenhoregistro', description: 'Eu sou que nem bujão!' },
  { name: 'soupequeno', command: '!soupequeno', description: 'Daniel relatando que é pequeno mas não é pedaço' },
  { name: 'tunumvaimorarai', command: '!tunumvaimorarai', description: 'Tu num vai morar ai! Disse Daniel ansioso pela saída de buruzin' },
  { name: 'agora', command: '!agora', description: 'Agora sou eu e você meu gostoso!' },

  { name: 'fidecachorra', command: '!fidecachorra', description: 'Smzinho dando range' },
  { name: 'porquemeudeus', command: '!porquemeudeus', description: 'Porquê meu deuuuus?' },
  { name: 'ocabala', command: '!ocabala', description: 'Ó o caba lá!' },
  { name: 'alegria', command: '!alegria', description: 'Diogo defante falando ALEGRIA!' },
  { name: 'amizade', command: '!amizade', description: 'Diogo defante falando AMIZADE!' },
  { name: 'seumeliante', command: '!seumeliante', description: 'Advogado paloma falando com um meliante!' },
  { name: 'bandindinho', command: '!bandindinho', description: 'Bandidinho desgraçado' },
  { name: 'bimbimbim', command: '!bimbimbim', description: 'kkkk bimbimbim vem chegando na boate!' },


]

function Comands () {
  const [comands, setComands] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const search = (value) => {
    setSearchValue(value);

    comands.map(comandsCallback => {
      if(comandsCallback.name.indexOf(value.toLowerCase()) > -1) {
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
