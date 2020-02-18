//date.js
export default class CurrentDateYearTime {

    constructor() {
        console.log("You are in the CurrentDateYearTimeConstructor");
        this.now = new Date();
        this.dayOfWeek = this.now.getDay();
        this.month = this.now.getMonth() + 1;
        this.year = this.now.getFullYear();
        this.day = this.now.getDate();
        this.hour = this.now.getHours();
        this.minutes = this.now.getMinutes();

    }

    convertDayOfWeek() {
        let day = this.dayOfWeek;
        console.log(day);
        let string = "";
        switch (true) {

            case (day === 0):
                string = 'Sunday';
                break;
            case (day === 1):
                string = 'Monday';
                break;
            case (day === 2):
                string = 'Tuesday';
                break;
            case (day === 3):
                string = 'Wednesday';
                break;
            case (day === 4):
                string = 'Thursday';
                break;
            case (day === 5):
                string = 'Friday';
                break;
            case (day == 6):
                string = 'Saturday';
                break;
            default:
                break;

        }

        return string;
    }

    convertToAMPM() {
        let hr = this.hour;
        console.log('this.hour is', this.hour);
        let AMPM = "";
        if (hr < 12) {
            AMPM = 'A.M.';
        }
        else {
            AMPM = 'P.M.';
        }

        return AMPM;
    }

    convertTo12HourTime() {
        let hr = this.hour;
        console.log('hr is', hr);

        if(hr === 0)
        {
            hr = 12
        }
        else
        {
            if (hr >= 12)
            {
                hr = hr - 12;
            }

        }

        return hr;
    }

    formatMinutes()
    {
        let minutes = this.minutes;
        
        if(minutes < 10)
        {
            minutes = '0' + minutes.toString();
        }

        return minutes;
    }

    get CurrentDateYearTimeTemplate() {
        return `

            <p class = "p-time">${this.convertDayOfWeek()} ${this.month}/${this.day}/${this.year}</p>
            <p class = "p-time">${this.convertTo12HourTime()}:${this.formatMinutes()} ${this.convertToAMPM()}</p>
        

    `
    }

}

/*testing
let today = new CurrentDateYearTime()
console.log(today.year);

let dayof = today.convertDayOfWeek()
console.log(dayof);
*/