import React from 'react'

import * as S from './style';
import { CheckCircle, Link, WarningCircle } from 'phosphor-react';

function FileList({ file, setFile }) {
  return (
    <S.Container>
        <li key={file?.id}>
          <S.FileInfo>
            <S.Preview src={file?.preview} />
            <div>
              <strong>{file?.name}</strong>
              <span>
                {file?.readableSize}
                {(file && !file?.uploaded) && (
                  <button onClick={() => {setFile(null)}}>Excluir</button>
                )}
              </span>
            </div>
          </S.FileInfo>

          {file?.url && (
            <a
              href="https://github.com/magaliais.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link size={24} color="#d1d1d1" />
            </a>
          )}

          {(file && file?.uploaded) && (
            <CheckCircle size={24} color="#78e5d5" weight="fill" />
          )}
          {(file && file?.error) && (
            <WarningCircle size={24} color="#e57878" weight="fill" />
          )}
        </li>
    </S.Container>
  );
}

export default FileList