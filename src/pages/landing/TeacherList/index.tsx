import React from 'react';
import PageHeader from '../../../components/PageHeader'

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis.">
        <form id="search-teachers">
          <div className="input-block">
            <div>
              <label htmlFor="subject">Materia</label>
              <input type="text" id="subject" />
            </div>

            <div id="search-teachers">
              <label htmlFor="week_day">Dia da Semana</label>
              <input type="text" id="week_day" />
            </div>

            <div id="search-teachers">
              <label htmlFor="time">Hora</label>
              <input type="text" id="time" />
            </div>
          </div>
        </form>
      </PageHeader>
    </div>
  );
}

export default TeacherList;