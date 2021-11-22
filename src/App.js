import { Fragment } from "react";
import { ErrorBoundary } from "react-error-boundary";

import "./App.css";

import Article from "./ui/Article/Article";

function ErrorFallback() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Something went wrong, please try refreshing your page...
      </div>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Fragment>
        <header className="app-header">
          <h1 className="app-header__heading">acoustic test task</h1>
        </header>
        <main className="app-main">
          <Article></Article>
        </main>
        <footer className="app-footer">No rights reserved, really</footer>
      </Fragment>
    </ErrorBoundary>
  );
}

export default App;
