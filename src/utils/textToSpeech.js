export function speakTextResponsive(text) {
  if (window.responsiveVoice) {
    // Выбираем голос; список голосов можно посмотреть на сайте ResponsiveVoice
    // Здесь используется "UK English Female" как пример, замените на нужный язык/голос
    window.responsiveVoice.speak(text, "Russian Male", {
      pitch: 1,
      rate: 1,
      volume: 1,
    });
  } else {
    console.warn("ResponsiveVoice is not loaded.");
  }
}