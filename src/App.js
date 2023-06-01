/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './Components/navbar/navbar';
import { Container, Row } from 'react-bootstrap';
import Users from './Components/body/Users/users';
import UsersFunction from './Components/body/usersfunc';
import AddUserFormNative from './Components/body/AddUser/UserForm';
import SignupForm from './Components/body/Signup/signup';
import Header from './Components/ToDo/header/header';
import { useState, useEffect } from "react"
import BodyToDo from './Components/ToDo/body/body';
import { Route, Routes } from 'react-router-dom';
import Products from './Components/Products/products';
import NotFound from './Components/notfound/notfound';
import ProductDetails from './Components/ProductDetails/productDetails';
import ContactUs from './Components/ContactUs/contactUs';
import SaveProduct from './Components/Products/Save/saveproduct';
import EditProduct from './Components/Products/Edit/editProduct';
import Movies from './Components/Movies/MoviesData/movies';
import MovieDetails from './Components/Movies/MovieDetails/details';
import swal from 'sweetalert';
import ProtectedRoute from './Components/ProtectedRoutes/protectedRoutes';
import Favorites from './Components/favorite/favorite';
import { LanguageProvider } from './Contexts/language';


function App() {
  let id = 1
  const [tasks, setTasks] = useState([
    { id: 0, taskName: 'Task Test 1', complete: false },
  ])
  // console.log("Task from App:" + tasks[0]);
  const handleAddTask = (task) => {
    setTasks([...tasks, { id: tasks.length, taskName: task.taskName, complete: false }])
  }
  // console.log(tasks);
  useEffect(() => {
    console.log("Errect delete");
  }, [])
  const [guardRoute, setGuardRoute] = useState(false)

  const [language, setLanguage] = useState('en');
  return (
    <div className="App">
      <LanguageProvider value={{language,setLanguage}}>
        <Container>
          <NavbarComponent />

          <Row className='text-start ms-5 mt-5 mb-5 row-design'>
            <Routes>
              <Route path='/' element={<AddUserFormNative />} />
              <Route element={<ProtectedRoute />} >
                <Route path='/home' element={<Movies />} />
                <Route path='/details/:id' element={<MovieDetails />} />
                <Route path='/favorite' element={<Favorites />} />
              </Route>

              <Route path='/login' element={<AddUserFormNative />} />
              <Route path='/signup' element={<SignupForm />} />

              <Route path='/products' element={<Products />} >
                <Route index element={<SaveProduct />} />
                <Route path='save' element={<SaveProduct />} />
                <Route path='edit' element={<EditProduct />} />
              </Route>

              {/* <Route path='/details/:id' element={<ProductDetails />} /> */}
              <Route path='/contactus' element={<ContactUs />} />
              <Route path='*' element={<NotFound />} />
            </Routes>

            {/* <UsersFunction /> */}
          </Row>
          {/* <Row className='text-start ms-5 mt-5'>
          <AddUserFormNative />
        </Row> */}
          {/* <Row className='text-start ms-5 mt-5 mb-5 row-design'>

          <SignupForm />

        </Row> */}
        </Container>
      </LanguageProvider>

      {/* To Do App */}
      {/* <Container>

        <Row className=''>
          <Header handleAddTask={handleAddTask} />
        </Row>
        <Row className=''>
          <BodyToDo tasks={tasks} setTasks={setTasks} />
        </Row>
      </Container> */}

    </div>
  );
}

export default App;
