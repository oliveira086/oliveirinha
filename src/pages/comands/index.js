import { useState, useEffect } from 'react';
import Header from '../../components/molecules/Header';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import S from './style';
import useWindowDimensions from '../../utils/windowDimensions';
import ComandItem from '../../components/atoms/ComandItem';

let allCommands = [];

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
  { name: 'sedutor', command: '!sedutor @menção', description: 'Função que coloca a foto de perfil do contato mencionado na manchete: Cuidado com os sedutores da internet. Exemplo de uso: !sedutor @fulano' },
  { name: 'bolso', command: '!bolso @menção', description: 'Função de coloca a foto de perfil do contato mencionado nas mãos do Bolsonaro. Exemplo de uso: !bolso @fulano.' },
  { name: 'tattoo', command: '!tattoo @menção', description: 'Função de coloca a foto de perfil do contato mencionado em uma conversa de negociação de uma tattoo. Exemplo de uso: !tattoo @fulano.' },
];

const bankCommands = [
  { name: 'pix', command: '!pix', description: 'Função para realizar transferência de valores. Exemplo de uso: !pix [valor] [chave OliveiraPix] [senha]. Exemplo prático: !pix 129.90 5511983514937 senha123' },
  { name: 'recarga', command: '!recarga', description: 'Função para solicitar a recarga do seu saldo. Exemplo de uso: !recarga [valor] [senha]. Exemplo prático: !recarga 10 12345678' },
  { name: 'pix', command: '!pix', description: 'Função para solicitar um saque de seu saldo. Exemplo de uso: !saque [valor] [senha]. Exemplo prático: !saque 10 12345678' },
];

const bingoCommands = [
  { name: 'bingo', command: '!bingo', description: 'Commando para iniciar o bingo. Exemplo de uso: !bingo [codigo do bingo] [valor do premio] [valor da cartela]. Exemplo prático: !bingo oitooito 10 1. ⚠️ O código do bingo tem que ter no máximo 8 caracteres e o valor do prêmio e debitado automaticamente da sua conta.' },
  { name: 'cartela', command: '!cartela', description: 'Commando para solicitar uma cartela ao bot. Exemplo de uso: !cartela [codigo do bingo] [senha]. Exemplo prático: !cartela oitooito 12345678. ⚠️ Este commando deve ser mandado no privado do BOT, caso contrário, não será possível enviar uma cartela.' },
  { name: 'peda', command: '!peda', description: 'Commando para chamar uma pedra. Exemplo de uso: !peda [codigo do bingo]. Exemplo prático: !peda oitooito' },
];

function Commands () {
  const [commands, setCommands] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [allCommandClicked, setAllCommandClicked] = useState(true);
  const [audioCommandClicked, setAudioCommandClicked] = useState(false);
  const [imagemCommandClicked, setImagemCommandClicked] = useState(false);
  const [bankCommandClicked, setBankCommandClicked] = useState(false);

  const setAllCommands = () => {
    audioCommands.map(x => { allCommands.push(x) });
    imageCommands.map(x => { allCommands.push(x) });
    bankCommands.map(x => { allCommands.push(x) });
    setCommands(allCommands);
  };

  const search = (value) => {
    setSearchValue(value);

    commands.map(commandsCallback => {
      const index = commandsCallback.name.startsWith(value.toLowerCase());

      if(index == true) {
        setCommands([commandsCallback]);
      };

      if(value == '') {
        setAllCommands();
      };
    });
  };

  const selectAudioCommands = () => {
    allCommands = [];
    setAudioCommandClicked(true);
    setAllCommandClicked(false);
    setImagemCommandClicked(false);
    setBankCommandClicked(false);

    setCommands([]);
    audioCommands.map(x => { allCommands.push(x) });
    setCommands(allCommands);
  };

  const selectAllCommands = () => {
    allCommands = [];
    setAudioCommandClicked(false);
    setAllCommandClicked(true);
    setImagemCommandClicked(false);
    setBankCommandClicked(false);

    setAllCommands();
  };

  const selectImagemCommands = () => {
    allCommands = [];

    setAudioCommandClicked(false);
    setAllCommandClicked(false);
    setImagemCommandClicked(true);
    setBankCommandClicked(false);

    setCommands([]);
    imageCommands.map(x => { allCommands.push(x) });
    setCommands(allCommands);
  };

  const selectBankCommands = () => {
    allCommands = [];

    setAudioCommandClicked(false);
    setAllCommandClicked(false);
    setImagemCommandClicked(false);
    setBankCommandClicked(true);

    setCommands([]);
    bankCommands.map(x => { allCommands.push(x) });
    setCommands(allCommands);
  };


  useEffect(() => {
    // setAllCommands ();
  }, []);

  let dimensions = useWindowDimensions();
  return (
    <>
      <Header />
      <S.Container>
        <S.LeftMenuContainer>
          <h1>Commandos</h1>
          <S.ButtonsContainer>
            <Button label="Todos os commandos" primary={allCommandClicked} onClick={() => selectAllCommands()}></Button>
            <Button label="Audios" primary={audioCommandClicked} onClick={() => selectAudioCommands()}></Button>
            <Button label="Imagens" primary={imagemCommandClicked} onClick={() => selectImagemCommands()}></Button>
            <Button label="Banco" primary={bankCommandClicked} onClick={() => selectBankCommands()}></Button>
          </S.ButtonsContainer>

        </S.LeftMenuContainer>
        <S.MiddleContainer>
          <Input
            width={dimensions.width > 600 ? '20rem' : '16rem'}
            heigth='var(--spacing-nano)'
            placeholder="Pesquise o commando"
            value={searchValue}
            onChange={e => search(e.target.value)}
          />

          <S.CommandsContainer>
            {/* {commands.map(commandsCallback => {
              return (
                <ComandItem command={commandsCallback.command} description={commandsCallback.description}/>
              )
            })} */}

          </S.CommandsContainer>
        </S.MiddleContainer>
      </S.Container>
    </>
  )
}

export default Commands
