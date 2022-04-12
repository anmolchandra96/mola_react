import React, { useEffect, useRef, useState } from 'react';
import WithQuestions from './with-questions';
import QuestionItem from './question-item';

const QuestionsList = ({ questions }) => {

    let responses = useRef({});

    let [is_submitted, set_is_submitted] = useState(false);

    useEffect(() => {
        window.addEventListener('set_question_response', setQuestionResponse);
        return () => {
            window.removeEventListener('set_question_response', setQuestionResponse);
        }
    }, []);

    const handleReset = () => window.location.reload();

    const setQuestionResponse = (ev) => {
        let { varname, selected_option } = ev.detail;
        let previous_responses = { ...responses.current };
        previous_responses[varname] = selected_option;
        responses.current = previous_responses;
    };

    const handleSubmit = () => {
        let updated_responses = { ...responses.current };
        fetch("http://localhost:5000/post_survey_responses", {
            method: "POST",
            body: JSON.stringify(updated_responses),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            if (response.status == 200) {
                set_is_submitted(true);
            }
        });
    }

    return is_submitted ? (
        <div className="after-submission">
            <span className="after-submission-text">Thanks for taking the time to fill out the survey</span>
            <span className="button center pointer" onClick={handleReset}>Fill out another survey</span>
        </div>
    ) : (
        <>
            <div className="questions-list center">
                {
                    questions.map(question => <QuestionItem key={question.varname} question={question} />)
                }

            </div>
            <div className="button center pointer" onClick={handleSubmit}>
                Submit
            </div>
        </>
    );
}

export default () => {
    return <WithQuestions QuestionsList={QuestionsList} />;
};