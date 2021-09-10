import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((data) => data.json())
    .then((ret) => setQuestionList(ret))
  }, [])

  function onDelete(id){
    const ret = questionList.filter((question) => id !== question.id);
    fetch(`http://localhost:4000/questions/${id}`,
    {
      method: "DELETE"
    })
    .then(setQuestionList(ret))
  }

  function onUpdate(event){
    const id = parseInt(event.target.id)
    const correctIndex = event.target.value

    const ret = questionList.map((question) => {
      if(id === question.id){
        question.correctIndex = correctIndex
      }

      return question
    })

    fetch(`http://localhost:4000/questions/${id}`,{
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correctIndex: correctIndex})
    })
    .then(setQuestionList(ret))
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm 
                            questionList = {questionList} 
                            setQuestionList = {setQuestionList}/> 
                            : 
                          <QuestionList 
                          questionList={questionList}
                          onDelete = {onDelete}
                          onUpdate = {onUpdate}
                          />}
    </main>
  );
}

export default App;
