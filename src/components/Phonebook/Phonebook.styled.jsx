import styled from 'styled-components';

export const StyledPhonebookContainer = styled.div`
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  max-width: 500px;
  margin: auto;
  padding: 15px;
  border: 2px solid black;
  border-radius: 25px;
  /* background-image: url('https://img.freepik.com/free-photo/closeup-concrete-wall-texture-background_1017-24490.jpg?w=2000'); */
  background-image: url('https://image.winudf.com/v2/image/Y29tLlBSSVNTSS5XYWxscGFwZXIuQmFja2dyb3VuZC5XaGl0ZUJhY2tncm91bmRXYWxscGFwZXJfc2NyZWVuXzBfMTUyODUwODAxNF8wNjk/screen-0.jpg?fakeurl=1&type=.webp');
`;
export const StyledPhonebookTitle = styled.h1`
  font-size: 28px;
  padding: 15px 0px;
  margin-bottom: 30px;
  text-align: center;
`;
export const StyledTitleContact = styled.h2`
  font-size: 24px;
  color: blue;
  text-align: center;
`;

export const StyledPhonebookWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: #e8e8e8;
`;
