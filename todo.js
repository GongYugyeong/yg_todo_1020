const title = React.createElement(
  'h1',
  {className:"text-center"},
  'Todo List'
);

const input = React.createElement(
  'input',
  {type:'text', className:'form-control mb-3'}
);

const button = React.createElement(
  'button',
  {className:'btn btn-primary'},
  'Add Todo'
);

const form = React.createElement(
  'form',
  {className:'text-center mb-3'},
  input,button
);

const li_input = React.createElement(
  'input',
  {type:'checkbox'}
);

const li_span = React.createElement(
  'span',
  {className:'flex-grow-1 ml-3'},
  '영어 공부하기'
);

const li_button = React.createElement(
  'button',
  {className:'btn btn-danger'},
  'Delete'
);

const li = React.createElement(
  'li',
  {className:'list-group-item d-flex justify-content-between align-items-center'},
  li_input, li_span, li_button
);

const ul = React.createElement(
  'ul',
  {className:'list-group'},
  li
);

const Todo = React.createElement(
  'div',
  {className:'container mt-3'},
  title,form,ul
);

ReactDOM.render(Todo,document.getElementById('todo'));
