const title = <h1 className='text-center'>Todo List</h1>

const form = (
  <form className="text-center mb-3">
    <input type="text" className="form-control mb-3" />
    <button className="btn btn-primary">Add Todo</button>
  </form>
);

const list = (
  <ul className="list-group">
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input type="checkbox" />
      <span className="flex-grow-1 ml-3">영어 공부하기</span>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
);

const container = (
  <div className='container mt-3'>
    {title}
    {form}
    {list}
  </div>
);

ReactDOM.render(container,document.getElementById('todo'));
