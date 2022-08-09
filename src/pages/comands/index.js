import { useState, useEffect } from 'react';
import Header from '../../components/molecules/Header';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import S from './style';
import useWindowDimensions from '../../utils/windowDimensions';
import ComandItem from '../../components/atoms/ComandItem';

let allComands = [];

let category = ['vaiDarNamoro', 'smzinho', 'igorGuimaraes', 'danielBabigol', 'cleitonRasta', 'diogoDefante', 'tiringa', 'extras'];

const audioCommands = [
  { name: 'rapaz', command: '!rapaz', description: 'Xaropinho falando rapaz', category: 'extras' },
  { name: 'atumalaka', command: '!atumalaka', description: 'Diabo azul sorrindo', category: 'extras' },
  { name: 'tafudido', command: '!tafudido', description: 'VOCÊ TA FUDIDO QUANDO EU TE PEGAR', category: 'extras' },
  { name: 'ronco', command: '!ronco', description: 'Ronco exagerado', category: 'extras' },
  { name: 'bomdia', command: '!bomdia', description: 'Bom dia!? Vai tomar no cu', category: 'extras' },
  { name: 'boanoite', command: '!boanoite', description: 'Boa noite rebanho de pau no cu', category: 'extras' },
  { name: 'numsouvigia', command: '!numsouvigia', description: 'Vou dormir né, num sou vigia', category: 'extras' },
  { name: 'cochilinho', command: '!cochilinho', description: 'Vou tirar um cochilinho, só apareço amanhã', category: 'extras' },
  { name: 'aloadm', command: '!aloadm', description: 'Alô, admininastrô', category: 'extras' },
  { name: 'entaoelee', command: '!entaoelee', description: 'Então ele é? (Buzz)', category: 'extras' },
  { name: 'vocemetrocou', command: '!vocemetrocou', description: 'VOCÊ ME TROCOU POR CAUSA DE MULHER ', category: 'extras' },
  { name: 'girando', command: '!girando', description: 'GIRANDO (Silvio Santos)', category: 'extras' },
  { name: 'chucai', command: '!chucai', description: 'Chucalho de boi (PARA CORNOS)', category: 'extras' },
  { name: 'cavalo', command: '!cavalo', description: 'Voz grave falando CAVALO', category: 'vaiDarNamoro' },
  { name: 'ui', command: '!ui', description: 'UIIII', category: 'vaiDarNamoro' },
  { name: 'xiii', command: '!xiii', description: 'Uma voz falando Xiii', category: 'vaiDarNamoro' },
  { name: 'elegosta', command: '!elegosta', description: 'Ele gooosta!', category: 'vaiDarNamoro' },
  { name: 'okok', command: '!okok', description: 'Uma voz falando OK OK', category: 'vaiDarNamoro' },
  { name: 'aimamae', command: '!aimamae', description: 'Ai ai mamããe', category: 'vaiDarNamoro' },
  { name: 'queissomeufilho', command: '!queissomeufilho', description: 'Que isso meu filho calma', category: 'vaiDarNamoro' },
  { name: 'tome', command: '!tome', description: 'Uma voz falando Tome!', category: 'vaiDarNamoro' },
  { name: 'eissoai', command: '!eissoai', description: 'E isso ai galera do Reggae', category: 'cleitonRasta' },
  { name: 'olhaapeda', command: '!olhaapeda', description: 'Olha a pedra', category: 'cleitonRasta' },
  { name: 'sonacara', command: '!sonacara', description: 'Dô só na cara pra estragar o velório disse o Daniel para o reporter', category: 'danielBabigol' },
  { name: 'sotenhoregistro', command: '!sotenhoregistro', description: 'Eu sou que nem bujão!', category: 'danielBabigol' },
  { name: 'soupequeno', command: '!soupequeno', description: 'Daniel relatando que é pequeno mas não é pedaço', category: 'danielBabigol' },
  { name: 'tunumvaimorarai', command: '!tunumvaimorarai', description: 'Tu num vai morar ai! Disse Daniel ansioso pela saída de buruzin', category: 'danielBabigol' },
  { name: 'agora', command: '!agora', description: 'Agora sou eu e você meu gostoso!', category: 'smzinho' },
  { name: 'fidecachorra', command: '!fidecachorra', description: 'Smzinho dando rage', category: 'smzinho' },
  { name: 'porquemeudeus', command: '!porquemeudeus', description: 'Porquê meu Deus?', category: 'smzinho' },
  { name: 'ocabala', command: '!ocabala', description: 'Ó o caba lá!', category: 'smzinho' },
  { name: 'alegria', command: '!alegria', description: 'Diogo defante falando ALEGRIA!', category: 'diogoDefante' },
  { name: 'amizade', command: '!amizade', description: 'Diogo defante falando AMIZADE!', category: 'diogoDefante' },
  { name: 'seumeliante', command: '!seumeliante', description: 'Advogado paloma falando com um meliante!', category: 'igorGuimaraes' },
  { name: 'bandindinho', command: '!bandindinho', description: 'Bandidinho desgraçado', category: 'igorGuimaraes' },
  { name: 'bimbimbim', command: '!bimbimbim', description: 'Bim bim bim, vem chegando na boate!', category: 'igorGuimaraes' },
  { name: 'amiguinho', command: '!amiguinho', description: 'Boneco josias dando conselho', category: 'igorGuimaraes' },
  { name: 'desculpa', command: '!desculpa', description: 'Tiringa pedindo desculpa', category: 'tiringa' },
  { name: 'apagaessapeste', command: '!apagaessapeste', description: 'Tiringa mandando apagar essa peste', category: 'tiringa' },
  { name: 'vaitelascar', command: '!vaitelascar', description: 'Tiringa mandando ir se lascar', category: 'tiringa' },
  { name: 'efemi', command: '!desculpa', description: 'Tiringa perguntando sé é femi', category: 'tiringa' },
];

const imageCommands = [
  { name: 'comedordecasada', command: '!comedordecasada @menção', description: 'Função que coloca a foto de perfil do contato mencionado dentro do selo oficial de comedores de casadas. Exemplo de uso: !comedordecasada @fulano' },
];

const bankCommands = [
  { name: 'pix', command: '!pix', description: 'Função para realizar transferência de valores. Exemplo de uso: !pix [valor] [chave OliveiraPix] [senha]. Exemplo prático: !pix 129.90 5511983514937 senha123' },
];


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
