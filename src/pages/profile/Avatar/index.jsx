import React from 'react'
import * as S from './style';

export function Avatar({ image, name = 'Gabriel', size }) {
  const fallback = name.slice(0, 2).toUpperCase();

  return (
    <S.AvatarRoot size={size}>
      <S.AvatarImage
        src="https://github.com/magaliais.png"
        alt="Gabriel Magalhães"
      />
      <S.AvatarFallback>{fallback}</S.AvatarFallback>
    </S.AvatarRoot>
  );
}