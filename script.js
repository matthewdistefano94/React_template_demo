var App = function App() {
  return React.createElement(
    Template,
    null,
    React.createElement(
      'h1',
      null,
      'Main Content'
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));