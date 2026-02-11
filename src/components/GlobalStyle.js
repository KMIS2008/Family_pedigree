import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

/* @font-face {
  font-family: 'Ancient Kyiv';
  src: url('../../public/fonts/Ancient_Kyiv_1d6ee2b0-351a-4c2c-a89a-4de96309e5aa.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
} */

/* @font-face {
  font-family: 'Rutenia';
  src: url('../../public/fonts/Rutenia2008VasylChebanyk.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
} */

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Ancient Kyiv', 'Rutenia',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  table, td {
  border: 1px solid #b5b5d6; 
}

tr:nth-child(even) {
  background-color: #f2f2f2;
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


