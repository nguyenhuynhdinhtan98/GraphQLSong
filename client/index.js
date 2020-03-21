import React from "react";
import ReactDOM from "react-dom";
import "./style/style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
  IndexRoute
} from "react-router-dom";
import { browserHistory } from "react-router";
import ApolloClient from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import SongList from "./components/SongList";
import App from "./components/App";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

const client = new ApolloClient({ dataIdFromObject: o => o.id });

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter history={browserHistory}>
        <Switch>
          <App>
            <Route exact path="/" component={SongList} />
            <Route path="/song/create" component={SongCreate} />
            <Route path="/song/detail/:id" component={SongDetail} />
          </App>
        </Switch>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
