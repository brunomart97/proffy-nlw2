import React from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader
        title="Estes são os proffys disponíveis."
      >
      <form id="search-teachers">
        <div className="input-block">
          <label htmlFor="subject">Matéria</label>
          <input type="text" className="subject" />
        </div>

        <div className="input-block">
          <label htmlFor="week_day">Dia da semana</label>
          <input type="text" className="week_day" />
        </div>

        <div className="input-block">
          <label htmlFor="time">Hora</label>
          <input type="text" className="time" />
        </div>
      </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;