import React, { useState } from "react";
import questionList from "./data/data";

function App() {
    const [totalQuestion, setTotalQuestion] = useState(questionList.length);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const handleAnswerOptionClick = () => {};
    return (
        <>
        <div className="container justify-content-center">
        <div
    style={{
        background: "#04505c",
            color: "white",
            padding: "5px",
            marginTop: "150px",
            borderRadius: "5px",
            margin: "auto",
    }}
    className="col-8"
        >
        <span>Question {currentQuestion + 1}</span>/{totalQuestion}
<div className="py-3">
        <div>{questionList[currentQuestion].question}</div>
    {questionList[currentQuestion].image ? (
        <div>
        <img width={200} src={questionList[currentQuestion].image} />
    </div>
    ) : (
        ""
    )}

</div>
    <div>
    {questionList[currentQuestion].options.map(
            (answerOption, index) => (
                <div className="col-3" key={index}>
        <button
        className="btn btn-primary"
        onClick={() =>
    handleAnswerOptionClick(questionList[currentQuestion])
}
>
    {answerOption}
</button>
    </div>
)
)}
</div>
    </div>
    </div>
    </>
);
}

export default App;
