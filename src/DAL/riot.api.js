import axios from "axios";

export default class RiotAPI {
    constructor() {
        this.dataDragon = axios.create({
            baseURL: 'http://ddragon.leagueoflegends.com/cdn/10.13.1/data/en_US/',
            timeout: 2000
        });
    }

    async getChampions() {
        try {
            const response = await this.dataDragon.get("champion.json");
            return Object.values(response.data.data);
        }
        catch(error) {
            console.log(error);
        }
    }
}