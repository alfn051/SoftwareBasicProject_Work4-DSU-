import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {v4} from 'uuid';
import Header from './coomponents/Header';
import Footer from './coomponents/Footer';
import noticeData from './data/notice-data.json';
import subjectData from './data/subject-data.json';
import Notice from './coomponents/Notice';
import Subject from './coomponents/Subject';
import InputForm from './coomponents/InputForm';

function App() {

  const [notices, setNotices] = useState(noticeData.noticeList);

  const removeNotice = (id) => {
    const newNotices = notices.filter(notice => notice.id !== id);
    setNotices(newNotices);
  }

  const addNotice = (title, content) => {
    const notice = {id:v4(), title:title, content:content};
    const newNotices = [...notices, notice];
    setNotices(newNotices);
  }

  const updateNotice = (id, title, content)=>{
    const newNotices = notices.map(
      notice=> notice.id===id? {id, title, content}: notice
    );
    setNotices(newNotices);

  }

  const [subjects, setSubjects] = useState(subjectData.subjectList);

  const removeSubject = (id) => {
    const newSubjects = subjects.filter(subject => subject.id !== id);
    setSubjects(newSubjects);
  }

  const addSubject = (title, content) => {
    const subject = {id:v4(), title:title, content:content};
    const newSubjects = [...subjects, subject];
    setSubjects(newSubjects);
  }

  const updateSubject = (id, title, content)=>{
    const newSubjects = subjects.map(
      subject=> subject.id===id? {id, title, content}: subject
    );
    setSubjects(newSubjects);

  }

  return (
    <div className="App">

      {/* <UserInputForm onAddUser={addUser}></UserInputForm> */}
      <Header></Header>
      <div className="Border">
        <Notice notices={notices} onRemoveNotice={removeNotice} onUpdateNotice={updateNotice}></Notice>
        <h4>새 공지 추가<InputForm onAdd={addNotice}></InputForm></h4>
      </div><br></br>
      <div className="Border">
        <Subject subjects={subjects} onRemoveSubject={removeSubject} onUpdateSubject={updateSubject}></Subject>
        <h4>새 강의내용 추가<InputForm onAdd={addSubject}></InputForm></h4>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
