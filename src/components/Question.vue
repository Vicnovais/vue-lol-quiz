<template>
  <div>
      <div class="question-container">{{ question }}</div>
      <Answer v-for="answer in answers" 
              :item="answer"
              :key="answer"
              @click="checkAnswer"></Answer>
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
        answers: []
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
          this.answers = titleQuestion.possibleAnswers;
      },

      checkAnswer(evt, answer) {
          const isCorrect = this.questionBuilder.checkAnswer(answer);
          if (isCorrect) this.buildQuestion();
      }
  }
}
</script>

<style scoped>
* {
    font-family: 'Open Sans', sans-serif;
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
</style>