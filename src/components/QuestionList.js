import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questionList}) {

  const displayQuestions = questionList.map((question) => <QuestionItem question={question}/>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayQuestions}</ul>
    </section>
  );
}

export default QuestionList;
