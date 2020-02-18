//quote.js
export default class Quote {
    constructor(data) {
        console.log('[RAW QUOTE API DATA]', data);
        //NOTE Have you ever wanted to know the temperature measured in kelvin? 
        //      That is what this data returns! data.main.temp is the temperature in Kelvin


        //TODO You should probably convert the temperature data to either F or C
        //      check out the other data that comes back and see if there is anything you want to try

        this.author = data.quote.author;
        this.authorquote = data.quote.body;

        console.log('data.quote.body is ', data.quote.body);
        console.log('this.quote is',this.authorquote);
        
        
    }

    get QuoteTemplate() {
        return `
          <p class="p-quote">Quote: ${this.authorquote}</p>
          <p class="p-quote">Author: ${this.author}</p>
       `
    }


}