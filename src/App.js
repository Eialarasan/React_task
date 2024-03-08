import logo from './logo.svg';
import './App.css';
import PdfViewer from './Container/PdfViewer';
import {Route, Routes} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import TextEditor from './Container/TextEditor';
import FieldLinker from './Container/FieldLinker';
function App() {
  return (
    <div className="bakround">
      <Routes>
        <Route path='/' element={<PdfViewer/>}></Route>
        <Route path='/editor' element={<TextEditor/>}></Route>
        <Route path='/field' element={<FieldLinker/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
