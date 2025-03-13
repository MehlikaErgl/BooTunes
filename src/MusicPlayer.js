// src/MusicPlayer.js
import React, { useState, useEffect } from 'react';

// Duygu -> Müzik listesi haritası
const emotionMusicMap = {
    joy: ["/music/joy/1185.mp3"],
    anger: ["/music/anger/1582.mp3"],
    sadness: ["/music/sadness/82.mp3"],
  };

// Duygu listesi (random üretmek için)
const emotionList = Object.keys(emotionMusicMap);

const MusicPlayer = () => {
  const [currentEmotion, setCurrentEmotion] = useState("neutral");
  const [currentSong, setCurrentSong] = useState("");

  // Random duygu ve şarkı seç
  const getRandomEmotionAndSong = () => {
    const randomEmotion = emotionList[Math.floor(Math.random() * emotionList.length)];
    const songs = emotionMusicMap[randomEmotion];
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    setCurrentEmotion(randomEmotion);
    setCurrentSong(randomSong);
  };

  // İlk açılışta ve her yenilemede çağır
  useEffect(() => {
    getRandomEmotionAndSong();
  }, []);

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-4">🎶 Duygusal Müzik Çalar</h1>
      <h2 className="text-xl mb-2">Duygu: <span className="font-semibold">{currentEmotion}</span></h2>
      <audio src={currentSong} controls autoPlay className="mx-auto mb-4" />
      <button
        onClick={getRandomEmotionAndSong}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-blue-600"
      >
        Yeni Duygu ve Şarkı
      </button>
    </div>
  );
};

export default MusicPlayer;


