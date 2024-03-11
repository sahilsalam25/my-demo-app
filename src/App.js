// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Counter from './Counter';
import UserDataForm from './UserDataForm';
import RichTextEditor from './RichTextEditor';
// import Counter from './Counter';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Counter} />
        <Route path="/user-data-form" component={UserDataForm} />
        <Route path="/rich-text-editor" component={RichTextEditor} />
      </Switch>
    </Router>
  );
};

export default App;
