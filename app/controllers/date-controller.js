import _dateService from "../services/date-service.js"
import _store from "../store.js"


function _drawDate() {

    let str = '';
    let nowToday = _store.State.dates;
    console.log(nowToday);

    str = nowToday.CurrentDateYearTimeTemplate;

    document.getElementById("date-time-now").innerHTML = str;


}

export default class DateController {

    constructor() {
        console.log('You are in the date=controller constructor');
        _store.subscribe("dates", _drawDate)
        this.getNow();
        let updateTime = setInterval(this.getNow, 10000);

    }

    getNow() {
        _dateService.getNow();

    }

}

