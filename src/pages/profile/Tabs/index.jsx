import { Image, MusicNotes, Sticker } from 'phosphor-react';
import React from 'react'
import * as S from './style';

export function Tabs() {
  return (
    <S.TabsRoot defaultValue="posts" orientation="vertical">
      <S.TabsList aria-label="tabs example">
        <S.TabsTrigger value="posts">
          <Image color="var(--neutral-07)" size={24} />
          <p>Posts</p>
        </S.TabsTrigger>
        <S.TabsTrigger value="audios">
          <MusicNotes color="var(--neutral-07)" size={24} />
          <p>Áudios</p>
        </S.TabsTrigger>
        <S.TabsTrigger value="stickers">
          <Sticker color="var(--neutral-07)" size={24} />
          <p>Stickers</p>
        </S.TabsTrigger>
      </S.TabsList>
      <S.TabsContent value="posts">Posts</S.TabsContent>
      <S.TabsContent value="audios">Áudios</S.TabsContent>
      <S.TabsContent value="stickers">Stickers</S.TabsContent>
    </S.TabsRoot>
  );
}