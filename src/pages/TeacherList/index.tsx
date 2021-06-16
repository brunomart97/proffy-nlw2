import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherList() {
  return (
    <div className="page-teacher-list container">
      <PageHeader
        title="Estes são os proffys disponíveis."
      >
      <form className="search-teachers">
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
    </div>
  )
}

export default TeacherList;