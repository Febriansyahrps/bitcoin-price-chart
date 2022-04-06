import { useContext } from "react";
import styled from "styled-components";
import DataContext from "./DataContext";
import Chart from "./components/Chart";

const App = () => {
  // use context
  const { data } = useContext(DataContext);
  const { loading } = data;

  return (
    <AppContainer>
      <h1>Bitcoin Cryptocurrency Price</h1>
      {!loading ? (
        <div>
          <Chart />
          <h3>
            Data obtained from
            <a href="https://messari.io/" target="_blank" rel="noreferrer">
              <span> Messari.io </span>
            </a>
          </h3>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  font-family: "Poppins", sans-serif;
  margin: 2em 5%;
  h1,
  h3 {
    text-align: center;
  }
  h3 {
    margin-top: 2em;
  }
  a {
    text-decoration: none;
    color: #004888;
  }
`;

export default App;
