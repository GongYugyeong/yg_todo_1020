const Title = <h1 className='text-center'>Todo List</h1>

const Form = (
  <form className="text-center mb-3">
    <input type="text" className="form-control mb-3" />
    <button className="btn btn-primary">Add Todo</button>
  </form>
);

const List = () => {
  const LiVal = [
    {name:'영어공부하기', del:'Delete'},
    {name:'자바스크립트공부하기', del:'Delete'},
    {name:'리액트공부하기', del:'Delete'},
    {name:'다공부하기', del:'Delete'}
  ]
  return(
    <ul className="list-group">
    {LiVal.map((item,index) => (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
          <input type="checkbox" />
          <span className="flex-grow-1 ml-3">{item.name}</span>
          <button className="btn btn-danger">{item.del}</button>
        </li>
      ))}
    </ul>
  );
}

const Container = () => {
  return (
    <div className='container mt-3'>
      {Title}
      {Form}
      <List/>
    </div>
  );
}

ReactDOM.render(<Container/>,document.getElementById('todo'));
