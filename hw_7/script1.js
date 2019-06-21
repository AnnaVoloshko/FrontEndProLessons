function exchange(money, result){

    var valutaFirst=prompt('Attention! Conversion is performed only for such currencies as UAH, EUR and USD. Enter the currency you want to convert.'),
        valutaSecond=prompt('Enter the currency you want to convert money into.'),
        money=+prompt('Enter amount');

    if (valutaFirst == 'UAH' && valutaSecond == 'USD') {
        result = money / 27;
    } else if (valutaFirst == 'USD' && valutaSecond == 'UAH') {
        result = money * 26.2;
    }

    if (valutaFirst == 'USD' && valutaSecond == 'EUR') {
        result = money / 89.6;
    } else if (valutaFirst == 'EUR' && valutaSecond == 'USD') {
        result = money * 89.15;
    }

    if (valutaFirst == 'UAH' && valutaSecond == 'EUR') {
        result = money / 29.61;
    } else if (valutaFirst == 'EUR' && valutaSecond == 'UAH') {
        result = money * 29;
    }
    console.log(result);
    alert('Currency conversion is complete. Result: ' + result);

}
exchange();
