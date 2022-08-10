import styled from "styled-components";

const Button = styled.button`
  background-color: red;
  border: none;
  border-radius: 5px;
`;
const Container = styled.div`
  background-color: ${({ theme }) => (theme == "light" ? "white" : "black")};
`;

const App = () => {
  return (
    <Container theme="light">
      <h1>Hello World</h1>
      <Button>Test</Button>
    </Container>
  );
};
export default App;
