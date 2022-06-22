import React from 'react';
import { BrowserRouter, Route, Routes as Routers } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherForm from './pages/Landing/TeacherForm';
import TeacherList from './pages/Landing/TeacherList';

function Routes() {
  return (
    <BrowserRouter>
      <Routers>
        <Route path="/" element={ < Landing />} />
        <Route path="/study" element={ < TeacherList /> } />
        <Route path="/give-classes" element={ < TeacherForm />} />
      </Routers>
    </BrowserRouter>
  );
}

export default Routes;