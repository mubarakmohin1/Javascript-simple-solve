// problem1 ////
function anaTovori(ana){
    // bonuspart error handling//
    if(typeof ana == "boolean"){
    return 'error';
    }
    // 16 ana equal 1 vori//
    const vori = ana / 16;
    return vori;
    }
    const voriQuantity = anaTovori(16);
    console.log(voriQuantity);
    // finish problem 1///
    // // problem 2///
    // function pandaCost(quant1,quant2,quant3){
    // // bonuspart error handling//
    // if(typeof (quant1||quant2||quant3) == 'boolean'){
    // return 'error';
    // }
    // // given that//
    // const singaraPrice = 7;
    // const samucaPrice = 10;
    // const jilapiPrice = 15;
    // const totalCost = singaraPrice * quant1 + samucaPrice * quant2 + jilapiPrice * quant3;
    // return totalCost;
    // }
    // const finalCost = pandaCost(1,1,1);
    // console.log(finalCost);
    // // finish problem 2//
    // // problem 3//
    // function picnicBudget(number){
    // // bonus part error handling//
    // if(typeof number == 'boolean'){
    // return 'error';
    // }
    // // given that//
    // const first100 = 5000;
    // const second100 = 4000;
    // const uptoSecond100 = 3000;
    // if(number <= 100){
    // const first100Cost = number * first100;
    // return first100Cost;
    // }
    // else if(number <= 200){
    // const first100TourCost = 100 * first100;
    // const extraTourist = number - 100;
    // const second100TourCost = extraTourist * second100;
    // const totalBudget = first100TourCost + second100TourCost;
    // return totalBudget;
    // }
    // else{
    // const first100TourCost = 100 * first100;
    // const second100TourCost = 100 * second100;
    // const additionalTourist = number - 200;
    // const uptoSecond100TourCost = additionalTourist * uptoSecond100;
    // const finalBudget = first100TourCost + second100TourCost + uptoSecond100TourCost;
    // return finalBudget;
    // }
    // }
    // const tourDetails = picnicBudget(201);
    // console.log(tourDetails);
    // // finish problem 3//
    // // problem 4//
    // myArray = ['touhid','raihan','jamil','hafez']
    // function oddFriend(myArray){
    // // bonuspart error handling//
    // if(typeof myArray == 'number'){
    // return 'error';
    // }
    // for(let i = 0; i <= myArray.length; i++){
    // var element = myArray[i];
    // if(element.length % 2 != 0){
    // break;
    // }
    // }
    // return element;
    // }
    // var oddCharacter = oddFriend(myArray);
    // console.log(oddCharacter);
    