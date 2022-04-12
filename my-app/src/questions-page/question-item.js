
import { useState } from 'react';

const QuestionItem = ({ question }) => {
    const {
        questiontext,
        varname,
    } = question

    const [selected, setSelected] = useState(-1);

    const options = [
        question.option1,
        question.option2,
        question.option3,
        question.option4,
        question.option5,
        question.option6,
        question.option7,
    ];

    const handleOptionClick = (event) => {
        let selected_option = Number(event.target.getAttribute('data-id'));
        setSelected(selected_option);
        let evt = new CustomEvent('set_question_response', { detail: { selected_option: selected_option + 1, varname } });
        window.dispatchEvent(evt);
    }

    return (
        <div className="question-item center">
            <p className="question-description">{`Q. ${questiontext}`}</p>
            <div className="center options-list">
                {
                    options.map((option, index) =>
                        <span
                            key={index}
                            data-id={index}
                            className={`question-option pointer ${selected == index ? 'selected' : ''}`}
                            onClick={handleOptionClick}
                        >
                            {option}
                        </span>)
                }
            </div>
        </div>
    )
};

export default QuestionItem