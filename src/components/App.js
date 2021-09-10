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
    setQuestionList(ret)
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
                          />}
    </main>
  );
}

export default App;
