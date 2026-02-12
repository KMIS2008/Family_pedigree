import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Ancient Kyiv', 'Rutenia',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
  list-style: circle;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  outline: none;
}

button {
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
}

.no-scroll {
  overflow: hidden;
}

@media print {
  /* Скрываем все элементы на странице */
  body * {
    visibility: hidden;
  }
  /* Делаем видимым только содержимое контейнера с id "printableArea" */
  #printableArea, #printableArea * {
    visibility: visible;
  }
  /* Убираем отступы и позиционируем контент для печати */
  #printableArea {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
}

br {
  display: block;
  margin-left: 20px;
}
`