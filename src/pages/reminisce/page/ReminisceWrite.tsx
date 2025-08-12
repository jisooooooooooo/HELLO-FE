import React, { useState } from 'react';

import * as s from './ReminisceWrite.css';

import { IcMike } from '@/assets/svgs';
import Button from '@/common/components/button/Button';

const ReminisceWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className={s.container}>
      <h1 className={s.title}>기록을 입력해주세요</h1>
      <form onSubmit={handleSubmit}>
        <div className={s.card}>
          <input
            type="text"
            placeholder="제목을 입력해주세요"
            className={s.inputTitle}
            value={title}
            onChange={handleTitleChange}
          />
          <textarea
            placeholder="내용을 입력해주세요"
            className={s.inputContent}
            rows={6}
            value={content}
            onChange={handleContentChange}
          />
          <div className={s.mikeButton}>
            <IcMike className={s.mikeIcon} />
          </div>
        </div>
        <div className={s.buttonContainer}>
          <Button
            variant="secondary"
            label="저장하기"
            type="submit"
            disabled={title === '' || content === ''}
          />
        </div>
      </form>
    </section>
  );
};

export default ReminisceWrite;
