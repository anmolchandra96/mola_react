import questions_data from './questions_data.js';

const generate_rand_indices = (count = 10, limit = 36) => {
    var arr = [];
    while (arr.length < count) {
        var r = Math.floor(Math.random() * limit) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }

    return arr
};

const WithQuestions = ({ QuestionsList }) => {
    let filter_incides = generate_rand_indices()
    let random_questions = questions_data.filter((_, i) => filter_incides.includes(i + 1))
    return <QuestionsList questions={random_questions} />
}

export default WithQuestions;