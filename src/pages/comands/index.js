import { useState, useEffect } from 'react';
import Header from '../../components/molecules/Header';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import S from './style';
import useWindowDimensions from '../../utils/windowDimensions';
import ComandItem from '../../components/atoms/ComandItem';
import { getCommands } from '../../services/CommandsService'


function Commands () {
  const [commands, setCommands] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [allCommandClicked, setAllCommandClicked] = useState(true);
  const [audioCommandClicked, setAudioCommandClicked] = useState(false);
  const [imagemCommandClicked, setImagemCommandClicked] = useState(false);
  const [bankCommandClicked, setBankCommandClicked] = useState(false);

  const search = (value) => {
    setSearchValue(value);

    if(value.length > 3) {
      commands.map(commandsCallback => {
        const index = commandsCallback.name.startsWith(value.toLowerCase());

        if(index == true) {
          setCommands([commandsCallback]);
        };
      });
    }

    if(value == '') {
      getCommands().then(response => {
        setCommands(response.allCommands)
      });
    };
  };

  const selectAudioCommands = () => {
    setAudioCommandClicked(true);
    setAllCommandClicked(false);
    setImagemCommandClicked(false);
    setBankCommandClicked(false);
  };

  const selectAllCommands = () => {
    setAudioCommandClicked(false);
    setAllCommandClicked(true);
    setImagemCommandClicked(false);
    setBankCommandClicked(false);
  };

  const selectImagemCommands = () => {
    setAudioCommandClicked(false);
    setAllCommandClicked(false);
    setImagemCommandClicked(true);
    setBankCommandClicked(false);
  };

  const selectBankCommands = () => {
    setAudioCommandClicked(false);
    setAllCommandClicked(false);
    setImagemCommandClicked(false);
    setBankCommandClicked(true);
  };


  useEffect(() => {
    getCommands().then(response => {
      setCommands(response.allCommands)
    });
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

          <S.ComandsContainer>
            {commands.map(commandsCallback => {
              return (
                <ComandItem command={commandsCallback.command} description={commandsCallback.description}/>
              )
            })}

          </S.ComandsContainer>
        </S.MiddleContainer>
      </S.Container>
    </>
  )
}

export default Commands
