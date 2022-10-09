import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { uniqueId } from 'lodash';
import { filesize } from 'filesize';

import * as S from './style';

import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Upload } from '../../../components/molecules/Upload';
import FileList from '../../../components/molecules/Upload/FileList';
import { api } from '../../../services/api';
import { Info } from 'phosphor-react';

const createCustomAudioFormSchema = yup.object().shape({
  command: yup
    .string()
    .required("Comando obrigatório")
    .max(8, "Comando deve ter no máximo 8 caracteres")
    .matches(/^[a-z]+$/, "O comando deve ser composto somente por letras")
});

const existingCommands = [
  "me",
  "register",
  "sticker",
  "premium",
  "menuaudios",
  "menuimagem",
  "menuverify",
  "menubank",
  "menubingo",
  "menuSecret",
  "tabelabrasileirao",
  "register",
  "registerGroup",
  "secretRegister",
  "peda",
  "limparPedas",
  "cartela",
  "bingo",
  "pedas",
  "batido",
  "participantes",
  "blackjack",
  "ficha",
  "youtube",
  "instagram",
  "atualizartabelabrasileirao",
  "bolso",
  "comedordecasada",
  "sedutor",
  "fatos",
  "tattoo",
  "morrepraga",
  "urna",
  "ednaldo",
  "avisarGrupos",
  "avisarGrupo",
  "completarEnvio",
  "userPremium",
  "secret",
  "secrets",
  "secretResposta",
  "verSecret",
  "sticker",
  "pix",
  "verify",
  "recarga",
  "getRecargas",
  "efetua",
  "cancelar",
  "saque",
  "saques",
  "confirmSaque",
  "corno",
  "egay",
  "ecalvo",
  "efake",
  "shipar",
];

export function UploadForm() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedAudio, setUploadedAudio] = useState(null);
  const [audioError, setAudioError] = useState(false);

  // atualiza porcentagem do envio
  // function updateFile(id, data) {
  //   setUploadedFiles(uploadedFiles.map(uploadedFile => {
  //     return id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile
  //   }))
  // }

  // envia os arquivos
  function handleUploadImage(files) {
    const newUploadedFiles = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size, { base: 2, standard: "jedec" }),
      preview: URL.createObjectURL(file),
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadedImage(newUploadedFiles[0]);
  }
  
  function handleUploadAudio(files) {
    const newUploadedAudio = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size, { base: 2, standard: "jedec" }),
      preview: URL.createObjectURL(file),
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadedAudio(newUploadedAudio[0]);
    setAudioError(false);
  }
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createCustomAudioFormSchema)
  });

  function onSubmit(info) {
    // TODO validar que o comando não existe
    if(existingCommands.includes(info.command)) {
      console.log('comando já existe!');
      return;
    }

    if(uploadedAudio === null) {
      setAudioError(true);
      return;
    }

    console.log(uploadedImage);

    const data = {
      command: info.command,
      image: uploadedImage,
      audio: uploadedAudio,
    }

    console.log(data)

    api.post("/audios/upload-files", data)
      .then((response) => {
        console.log(response);
        setUploadedImage({
          ...uploadedImage,
          uploaded: true,
          url: "https://github.com/magaliais.png"
        });
        setUploadedAudio({
          ...uploadedAudio,
          uploaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
        setUploadedImage({
          ...uploadedImage,
          error: true,
        });
        setUploadedAudio({
          ...uploadedAudio,
          error: true,
        });
      });
  }

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <div className="inputGroup command">
        <label htmlFor="command">Comando</label>
        <input
          id="command"
          type="text"
          {...register("command")}
          placeholder="Ex.: sortear"
          // maxLength={8}
        />
      </div>
      {!!errors && <span className="error">{errors.command?.message}</span>}

      <div className="inputGroup">
        <Upload
          onUpload={handleUploadAudio}
          title="Envio de áudio"
          accept="audio/*"
        />
        {audioError && (
          <span className="error">Arquivo de áudio é obrigatório</span>
        )}
        {true && <FileList file={uploadedAudio} setFile={setUploadedAudio} />}
      </div>

      <div className="inputGroup">
        <Upload
          onUpload={handleUploadImage}
          title="Envio de imagem"
          accept="image/*"
        />
        {true && <FileList file={uploadedImage} setFile={setUploadedImage} />}
      </div>

      <S.Info>
        <i>
          <Info color='var(--blue-200)' size={24}/>
        </i>
        <span>
          A imagem será enviada em forma de figurinha ao mesmo tempo que o áudio
        </span>
      </S.Info>

      <button type="submit" className="submitButton">
        Enviar
      </button>
    </S.Container>
  );
}