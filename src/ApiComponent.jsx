import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./List";
import withListLoading from "./WithListLoading";

function App2() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/MalikHesham/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className="App">
      <div className="container">
        <hr />
        <h2>Lab part 2 : Fetching Github Public Repos</h2>
      </div>
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className="footer">
          Built{" "}
          <span role="img" aria-label="love">
            with 💚
          </span>
        </div>
      </footer>
    </div>
  );
}
export default App2;
