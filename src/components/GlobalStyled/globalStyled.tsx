// @ts-ignore
import { injectGlobal } from 'vue-styled-components'

const GlobalStyled = injectGlobal`
 html {
    font-size: 20px;
  }

  button {
    border: 0;
  }

  body {
    p {
      margin-bottom: 0.2rem;
    }

    ul,
    ol {
      padding: 0;
      margin: 0;

      li {
        list-style-type: none;
      }
    }
  }
`

export default GlobalStyled
