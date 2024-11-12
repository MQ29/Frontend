// App.js
import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3 from './pages/Lab3';
import Lab4 from './pages/Lab4';
import Lab5 from './pages/Lab5';
import CommentsPage from './pages/CommentsPage';
import UserPage from './pages/UserPage'; 
import NotFound from './pages/NotFound';
import AppContext from './data/AppContext';
import AppReducer from './data/AppReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { peopleData } from "./data/peopleData";
import AddForm from './pages/AddForm';
import EditForm from './pages/EditForm';

const App = () => {
  const [state, appDispatch] = useReducer(AppReducer, peopleData);

  const menuItems = [
    { id: 1, label: "Home", url: "/", urlPattern: "/", element: <Home /> },
    { id: 2, label: "Laboratorium 1", url: "/lab1", urlPattern: "/lab1", element: <Lab1 /> },
    { id: 3, label: "Laboratorium 2", url: "/lab2/1", urlPattern: "/lab2/:id", element: <Lab2 /> },
    { id: 4, label: "Laboratorium 3", url: "/lab3", urlPattern: "/lab3", element: <Lab3 /> },
    { id: 5, label: "Laboratorium 4", url: "/lab4", urlPattern: "/lab4", element: <Lab4 /> },
    { id: 6, label: "Dodaj Obiekt", url: "/lab4/add", urlPattern: "/lab4/add", element: <AddForm /> },
    { id: 7, label: "Edytuj Obiekt", url: "/lab4/edit/:id", urlPattern: "/lab4/edit/:id", element: <EditForm /> },
    { id: 8, label: "Laboratorium 5", url: "/lab5", urlPattern: "/lab5", element: <Lab5/> }
  ];

  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      <RootLayout items={menuItems}>
        <Routes>
          {menuItems.map(item => (
            <Route key={item.id} path={item.urlPattern} element={item.element} />
          ))}
          <Route path="/lab5/users/:id" element={<UserPage />} /> 
          <Route path="/lab5/posts/:id/comments" element={<CommentsPage />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RootLayout>
    </AppContext.Provider>
  );
};

export default App;
