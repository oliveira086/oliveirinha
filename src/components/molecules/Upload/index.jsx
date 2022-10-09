import React from 'react'

import Dropzone from 'react-dropzone';

import * as S from './style';

export function Upload({ onUpload, title, accept }) {
  const renderDragMessage = (isDragActive, isDragReject) => {
    if(!isDragActive) {
      return <S.UploadMessage>{title}</S.UploadMessage>
    }

    if(isDragReject) {
      return <S.UploadMessage type="error">Arquivo não suportado</S.UploadMessage>
    }

    return <S.UploadMessage type="success">Solte o arquivo aqui</S.UploadMessage>
  }

  return (
    <Dropzone accept={accept} onDropAccepted={onUpload} multiple={false}>
      { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <S.DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </S.DropContainer>
      ) }
    </Dropzone>
  )
}