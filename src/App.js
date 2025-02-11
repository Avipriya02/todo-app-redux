import { Provider } from 'react-redux';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TodoApp from './components/TodoApp';


function App() {
  return (
    <Provider store={store}>
      <TodoApp/>
    </Provider>
  );
}


export default App;
