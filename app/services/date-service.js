//date-service.js
import CurrentDateYearTime from "../models/date.js"
import store from "../store.js";



class DateService {

    constructor() {
        console.log('You are in the DateController constructor');


    }

    getNow() {

        let now = new CurrentDateYearTime();
        store.commit("dates", now);

    }



}

const dateService = new DateService();
export default dateService;