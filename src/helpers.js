export const renderAnswers = (question) => {
    const unshuffledAnswers = [...question.incorrectAnswers, question.correctAnswer];
    return unshuffledAnswers
        .map(answer => ({sort: Math.random(), value: answer}))
        .sort((a, b) => a.sort - b.sort)
        .map(obj => obj.value)
}