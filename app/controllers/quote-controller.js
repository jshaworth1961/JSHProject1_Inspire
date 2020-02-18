//quotecontroller.js
import  _quoteService from "../services/quote-service.js";
import _store from "../store.js"

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

function _drawQuotes()
{
    console.log("THE QUOTE LADY SAYS:", _store.State.quotes)

    let str = '';

    let myQuote = _store.State.quotes;
    str = myQuote.QuoteTemplate;


    document.getElementById("quote").innerHTML = str;

}
    


export default class QuoteController {
    constructor() 
    {
        console.log('You are in the QuoteController');

        _store.subscribe("quotes", _drawQuotes);
        this.getQuote();
        let updateQuotes = setInterval(this.getQuote, 10000);

    }

    getQuote() {

        console.log("in quote-controller getQuotes()");
        _quoteService.getQuote();
    }




}
