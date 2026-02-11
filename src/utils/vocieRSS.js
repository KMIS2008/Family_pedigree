
export function speakTextVoiceRSS(text) {
  const apiKey = "e291fd583190475d976a2b2312d962cc"; // Замените на ваш API-ключ
  const url = `https://api.voicerss.org/?key=${apiKey}&hl=ru-ru&src=${encodeURIComponent(text)}&c=MP3&f=44khz_16bit_stereo`;
  console.log("URL аудио:", url);
  
  const audio = new Audio(url);
  audio.play().catch(e => {
    console.error("Ошибка воспроизведения аудио:", e);
  });
}