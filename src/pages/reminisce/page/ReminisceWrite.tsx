import React, { useState } from 'react';

import * as s from './ReminisceWrite.css';

import { IcMike, IcStop } from '@/assets/svgs';
import Button from '@/common/components/button/Button';
import useSpeechToText from '@/pages/reminisce/hooks/useSpeechToText';

const ReminisceWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { isSupported, isRecording, start, stop, partialTranscript, error } = useSpeechToText({
    lang: 'ko-KR',
    continuous: false,
    interimResults: true,
    onFinalResult: (text) => {
      setContent((prev) => (prev ? `${prev} ${text}` : text));
    },
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleToggleRecording = () => {
    if (!isSupported) {
      window.alert('이 브라우저에서는 음성 인식을 지원하지 않습니다.');
      return;
    }
    if (isRecording) {
      stop();
    } else {
      start();
    }
  };

  const isSaveDisabled = title.trim() === '' || content.trim() === '';

  return (
    <section className={s.container}>
      <h1 className={s.title}>기록을 입력해주세요</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
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
          {isRecording && partialTranscript ? (
            <div className={s.sttInterim} aria-live="polite">
              {partialTranscript}
            </div>
          ) : null}
          {!isRecording && error ? (
            <div className={s.sttError} role="alert" aria-live="assertive">
              음성 인식 오류: {error}
            </div>
          ) : null}
          <button
            type="button"
            className={`${s.mikeButton} ${isRecording ? s.mikeButtonRecording : ''}`}
            onClick={handleToggleRecording}
            aria-pressed={isRecording}
            aria-label={isRecording ? '음성 입력 중지' : '음성 입력 시작'}
            disabled={!isSupported}
            title={!isSupported ? '이 브라우저는 음성 인식을 지원하지 않습니다.' : undefined}
          >
            {isRecording ? <IcStop className={s.mikeIcon} /> : <IcMike className={s.mikeIcon} />}
          </button>
        </div>
        <div className={s.buttonContainer}>
          <Button variant="secondary" label="저장하기" type="submit" disabled={isSaveDisabled} />
        </div>
      </form>
    </section>
  );
};

export default ReminisceWrite;
