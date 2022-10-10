import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { uniqueId } from 'lodash';
import { filesize } from 'filesize';

import audioWave from '../../../assets/images/audio-wave.png';

import * as S from './style';

import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Upload } from '../../../components/molecules/Upload';
import FileList from '../../../components/molecules/Upload/FileList';
import { api } from '../../../services/api';
import { Info } from 'phosphor-react';
import { toast } from 'react-toastify';

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

const bearerToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ODY5NDE0NzU0OSIsImlhdCI6MTY2NTQyOTIzMiwiZXhwIjoxNjY1NDMyODMyfQ.ZDKCjOsi8cum2gGVJ-i6NlM7CAy1OZZvZcXFedxDk50";

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
      preview: audioWave,
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadedAudio(newUploadedAudio[0]);
    setAudioError(false);
  }
  
  const {
    register,
    setError,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { command: '' },
    resolver: yupResolver(createCustomAudioFormSchema)
  });

  function onSubmit(info) {
    if(uploadedAudio === null) {
      setAudioError(true);
      return;
    }

    if(existingCommands.includes(info.command)) {
      setError("command", {types: {uniqueCommand: 'Comando já existe'}});
      return;
    }

    const formData = new FormData();
    formData.append('files', uploadedImage?.file);
    formData.append('files', uploadedAudio?.file);

    api.post("/audios/upload-files", formData, {
      headers: {
        'Authorization': `Bearer ${bearerToken}`
      },
      params: {
        command: info.command,
      }
    })
      .then((response) => {
        if(uploadedImage) {
          setUploadedImage({
            ...uploadedImage,
            uploaded: true,
            url: "https://github.com/magaliais.png"
          });
        }
        setUploadedAudio({
          ...uploadedAudio,
          uploaded: true,
        });
        toast.success("Áudio registrado com sucesso!")
      })
      .catch((err) => {
        if(uploadedImage) {
          setUploadedImage({
            ...uploadedImage,
            uploaded: true,
            url: "https://github.com/magaliais.png"
          });
        }
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
      {!!errors && <span className="error">{errors.command?.types?.uniqueCommand}</span>}

      <div className="inputGroup">
        <Upload
          onUpload={handleUploadAudio}
          title="Envio de áudio"
          accept={{'audio/mp3': ['.mp3']}}
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
          accept={{'image/png': ['.png'], "image/jpg": ['jpg, jpeg']}}
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