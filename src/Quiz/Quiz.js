import React, {Component} from 'react'

class Quiz extends Component {
    constructor () {
        super()
       

        this.state = {
            playerScore : 0,
            questions: [
                {
            
                  title: "What animal barks?",
                  possibleAnswers: ["Dog", "Cat", "Tiger"],
                  rightAnswer: "Dog",
                  playerChoice: null
                },
                {
                    title: "What animal is more closely related to a tiger?",
                    possibleAnswers: ["Dog", "Cat", "Elephant"],
                    rightAnswer: "Cat",
                    playerChoice: null
                  },
                  {
                      title: "What animal is more closely related to a tiger?",
                      possibleAnswers: ["Dog", "Cat", "Elephant"],
                      rightAnswer: "Cat",
                      playerChoice: null
                    }]
        }
    }

displayResult(index)
{
    const question = this.state.questions[index]
    if(!question.playerChoice) {return}

    if(question.playerChoice === question.rightAnswer)
    {
        return (
            <div>
                Your answer is correct!
            </div>
        )
    }
    else
    {
        return (
            <div>
                Your answer is incorrect!
            </div>
        )
    }
}
answerQuestion(index, choice)
{
    
    const answeredQuestion = this.state.questions[index]
    answeredQuestion.playerChoice = choice

    const allQuestions = this.state.questions
    allQuestions[index] = answeredQuestion
    console.log(answeredQuestion)

    this.setState({questions : allQuestions}, () => {this.updatePlaerScore()})
}

updatePlaerScore() {
    const playerScore = this.state.questions.filter(q => q.rightAnswer === q.playerChoice).length

    this.setState({playerScore})
}
displayQuestion(index)
{
    const question = this.state.questions[index]
    console.log(question)

    return (
        <div>
            <p>{question.title}</p>
            {question.possibleAnswers.map((answer) => 
            <button 
                onClick={() => this.answerQuestion(index, answer)}>{answer}</button>
            )
            }

            {/* <button
                onClick={() => this.answerQuestion(index, question.possibleAnswers[0])}>
            {question.possibleAnswers[0]}</button>


            <button
                onClick={() => this.answerQuestion(index, question.possibleAnswers[1])}>
            {question.possibleAnswers[1]}</button> */}
            
           {this.displayResult(index)}
        </div>
    )
}

render() {
    return (
        <div>
            <h1>Quiz</h1>
            Your score: {this.state.playerScore}
            {this.state.questions.map((question, index) => this.displayQuestion(index))}
            
            {/* {this.displayQuestion(0)}
            {this.displayQuestion(1)} */}
           
        </div>
    )
}
}


export default Quiz;
