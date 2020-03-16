import React from "react";
import ReactDOM from "react-dom";
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
const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql"
  }),
  cache: new InMemoryCache()
});
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter history={browserHistory}>
        <Switch>
          <App>
            <Route exact path="/" component={SongList} />
            <Route path="/song/create" component={SongCreate} />
          </App>
        </Switch>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
