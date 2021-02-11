/* 
Whenever this programm runs, a random message should be presented to the user.
*/

const fortuneTeller = () => {

    //creating helper function to randomly generate numbers and keep code dry
    const randomNumber = numOfParams => {
        return Math.floor(Math.random() * numOfParams);
    }

    //randomly generating time periods
    const timePeriod = () => {
        const timePeriods = ['Heute', 'Morgen', 'Diese Woche', 'Nächste Woche']
        return timePeriods[randomNumber(timePeriods.length)];
    };

    //randomly generating adjectives
    const adjective = () => {
        const adjectives = ['gute', 'schlechte', 'super', 'blöde', 'passende'];
        return adjectives[randomNumber(adjectives.length)];
    };

    //randomly generating much or less
    const multi = () => {
        const multiplier = ['viel', 'wenig'];
        return multiplier[randomNumber(multiplier.length)];
    }


    //randomly generating topics
    const topic = () => {
        const topics = ['Gelddingen', 'der Liebe', 'Gesundheitsfragen', 'Freundschaften', 'Arbeitsbelangen'];
        return topics[randomNumber(topics.length)];
    }

    //returning final randomly generating fortune
    return `${timePeriod()} kannst du ${adjective()} Nachrichten in ${topic()} erwarten, und ${multi()} Glück in ${topic()}.`
}

console.log(fortuneTeller());