<template>
  <div id="question">
        <div class="question-container">{{ question }}</div>
        <Answer v-for="datum in answersArr" 
                :item="datum"
                :key="datum.answer"
                :class="{ active: selectedAnswer === datum.answer, correct: datum.correct === true, incorrect: datum.correct === false }"
                @click="selectAnswer"></Answer>

        <button @click="validate" :disabled="!selectedAnswer">Next</button>
  </div>
</template>

<script>
import QuestionBuilder from '../DAL/question.builder'
import Answer from './Answer'

export default {
    name: 'Question',
    components: {
        Answer
    },

    data() {
        return {
            question: "",
            answersArr: [],
            selectedAnswer: ""
        }
    },

    created() {
      this.questionBuilder = new QuestionBuilder();
      this.buildQuestion();
    },

    methods: {
        async buildQuestion() {
            await this.questionBuilder.init();
            const titleQuestion = this.questionBuilder.buildTitleQuestion();
            this.question = titleQuestion.question;
            this.answersArr = titleQuestion.possibleAnswers.map(t => ({ answer: t, correct: undefined }));
            this.selectedAnswer = "";
        },

        validate() {
            let that = this;
            const rightAnswer = this.questionBuilder.getRightAnswer();

            this.answersArr.filter(t => t.answer === rightAnswer)[0].correct = true;
            if (this.selectedAnswer !== rightAnswer)
                this.answersArr.filter(t => t.answer === this.selectedAnswer)[0].correct = false;

            setTimeout(() => that.buildQuestion(), 500);
        },

        selectAnswer(evt, answer) {
            this.selectedAnswer = answer;
        }
    } 
}
</script>

<style scoped>
* {
    font-family: 'Open Sans', sans-serif;
}

#question {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.question-container {
    background-color: #fff;
    width: 35vw;
    height: 20vh;
    border-radius: 15px;
    border: 3px solid #3498db;
    margin-bottom: 45px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    text-align: center;
    padding: 12px;
    box-sizing: border-box;
}

button {
    width: 150px;
    height: 40px;
    border: 3px solid #3498db;
    border-radius: 15px;
    box-shadow: none;
    border-image: none;
    text-transform: uppercase;
    font-weight: 600;
    background-color: #abc5ff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    outline: none;
}

button:not([disabled]):hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

button[disabled] {
    cursor: not-allowed;
}
</style>