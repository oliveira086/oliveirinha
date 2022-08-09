import { useState, useEffect } from 'react';
import Header from '../../components/molecules/Header';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import S from './style';
import useWindowDimensions from '../../utils/windowDimensions';
import ComandItem from '../../components/atoms/ComandItem';

let allComands = [];

const audioCommands = [
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
];

const imageCommands = [
  { name: 'comedordecasada', command: '!comedordecasada @menção', description: 'Função que coloca a foto de perfil do contato mencionado dentro do selo oficial de comedores de casadas. Exemplo de uso: !comedordecasada @fulano' },
];

const bankCommands = [
  { name: 'pix', command: '!pix', description: 'Função para realizar transferência de valores. Exemplo de uso: !pix [valor] [chave OliveiraPix] [senha]. Exemplo prático: !pix 129.90 5511983514937 senha123' },
]


function Comands () {
  const [comands, setComands] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [allComandClicked, setAllComandClicked] = useState(true);
  const [audioComandClicked, setAudioComandClicked] = useState(false);
  const [imagemComandClicked, setImagemComandClicked] = useState(false);
  const [bankComandClicked, setBankComandClicked] = useState(false);

  const setAllCommands = () => {
    audioCommands.map(x => { allComands.push(x) });
    imageCommands.map(x => { allComands.push(x) });
    bankCommands.map(x => { allComands.push(x) });
    setComands(allComands);
  }

  const search = (value) => {
    setSearchValue(value);

    comands.map(commandsCallback => {
      const index = commandsCallback.name.startsWith(value.toLowerCase());

      if(index == true) {
        setComands([commandsCallback]);
      }

      if(value == '') {
        setAllCommands();
      }
    })
  }

  const selectAudioComands = () => {
    allComands = [];
    setAudioComandClicked(true);
    setAllComandClicked(false);
    setImagemComandClicked(false);
    setBankComandClicked(false);

    setComands([]);
    audioCommands.map(x => { allComands.push(x) });
    setComands(allComands);



  };

  const selectAllComands = () => {
    allComands = [];
    setAudioComandClicked(false);
    setAllComandClicked(true);
    setImagemComandClicked(false);
    setBankComandClicked(false);

    setAllCommands();
  };

  const selectImagemComands = () => {
    allComands = [];

    setAudioComandClicked(false);
    setAllComandClicked(false);
    setImagemComandClicked(true);
    setBankComandClicked(false);

    setComands([]);
    imageCommands.map(x => { allComands.push(x) });
    setComands(allComands);
  };

  const selectBankComands = () => {
    allComands = [];

    setAudioComandClicked(false);
    setAllComandClicked(false);
    setImagemComandClicked(false);
    setBankComandClicked(true);

    setComands([]);
    bankCommands.map(x => { allComands.push(x) });
    setComands(allComands);
  };


  useEffect(() => {
    setAllCommands ();
  }, []);

  let dimensions = useWindowDimensions();
  return (
    <>
      <Header />
      <S.Container>
        <S.LeftMenuContainer>
          <h1>Comandos</h1>
          <S.ButtonsContainer>
            <Button label="Todos os comandos" primary={allComandClicked} onClick={() => selectAllComands()}></Button>
            <Button label="Audios" primary={audioComandClicked} onClick={() => selectAudioComands()}></Button>
            <Button label="Imagens" primary={imagemComandClicked} onClick={() => selectImagemComands()}></Button>
            <Button label="Banco" primary={bankComandClicked} onClick={() => selectBankComands()}></Button>
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
