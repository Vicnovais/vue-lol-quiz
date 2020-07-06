import RiotApi from './riot.api'

export default class QuestionBuilder {
    constructor() {
        this.riotApi = new RiotApi();
    }

    async init() {
        if (this.champions) return false;
        await this.getChampions();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    async getChampions() {
        const data = await this.riotApi.getChampions();
        this.champions = data;
    }

    randomizeChampion() {
        const arr = this.shuffleArray([...this.champions].map(t => ({ name: t.name, title: t.title })));
        return arr[0];
    }

    getChampionsTitle() {
        return this.champions.map(t => ({ name: t.name, title: t.title }));
    }

    buildTitleQuestion() {
        const questionChampion = this.randomizeChampion(),
              answers = [questionChampion.name, ...this.randomizeChampionsAnswer(questionChampion.name)],
              shuffledAnswers = this.shuffleArray(answers);

        this.selectedQuestion = {
            question: `Which champion has the following title: ${ questionChampion.title }?`,
            correctAnswer: questionChampion.name,
            possibleAnswers: shuffledAnswers
        };

        return this.selectedQuestion;
    }

    checkAnswer(answer) {
        return this.selectedQuestion.correctAnswer === answer;
    }

    getRightAnswer() {
        return this.selectedQuestion.correctAnswer;
    }

    randomizeChampionsAnswer(correctChampion) {
        const arr = this.shuffleArray([...this.champions].map(t => t.name).filter(t => t !== correctChampion)),
              selected = arr.slice(0, 3);
        
        return selected;
    }
}