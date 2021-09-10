import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questionList, onDelete}) {

  const displayQuestions = questionList.map((question) => <QuestionItem key = {question.id} question={question} onDelete={onDelete}/>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayQuestions}</ul>
    </section>
  );
}

export default QuestionList;
