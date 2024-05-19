"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --black_17171C: #17171c;
  --black_21212A: #21212a;
  --black_2E2E3A: #2e2e3a;
  --gray_6E6E82: #6e6e82;
  --gray_9FA6B2: #9fa6b2;
  --white_F1F1F5: #f1f1f5;
  --main_gradation: linear-gradient(#5097fa, #5363ff);
  --main_blue: #5097fa;
  --main_indigo: #5363ff;
  --yellow_FFC83C: #ffc83c;
  --green_05D58B: #05d58b;
  --pink_FF2F9F: #ff2f9f;
  --red_FF0000: #ff0000;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyle;
