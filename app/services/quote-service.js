//quote-service.js
import Quote from "../models/quote.js"
import _store from "../store.js"

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService 
{

  constructor() {
    console.log('You are in the Quote constructor')

  }

  getQuote() {
    _quoteApi
      .get("")
      .then(res => {
        let currentQuote = new Quote(res.data);
        console.log('in quote-service getQuote()', currentQuote);
        _store.commit("quotes", currentQuote);

      })
      .catch(error => {
        console.error(error);

      });


  }



}

const quoteService = new QuoteService();
export default quoteService;
