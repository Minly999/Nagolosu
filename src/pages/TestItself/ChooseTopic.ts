
import { firstSylable, secondSylable, thirdSylable, fourthSylable, fifthSylable } from "../main/Data"
import { shuffleArray } from "../otherFunctions/shuffleArray";

function chooseRandomTopic(){
    let randChance = Math.floor(Math.random() * 100)
    let sylable: number;
    let topicArray: string[];
    // chances are 31% 31% 31% 4% 3%
    switch(true){
        case randChance < 31:
            topicArray = firstSylable;
            sylable = 1
            break;
        case randChance < 62:
            topicArray = secondSylable;
            sylable = 2
            break;
        case randChance < 93:
            topicArray = thirdSylable;
            sylable = 3
            break;
        case randChance < 97:
            topicArray = fourthSylable;
            sylable = 4
            break;
        case randChance < 100:
            topicArray = fifthSylable;
            sylable = 5
            break;
        default:
            console.log("Something went wrong, randChance is: " + randChance)
            topicArray = ["none"]
            sylable = -1
            break;
    }

    return {topicArray, sylable}
}

type chooseWrongTopicPropsType = {
    topicArray: string[],
    sylable: number
}

function chooseWrongTopic({topicArray, sylable}: chooseWrongTopicPropsType){
    let randomWrongTopic = {
        topicArray: ["none"],
        sylable: -1
    }
    do{
        randomWrongTopic = chooseRandomTopic()
    }while (randomWrongTopic.topicArray === topicArray)
    return randomWrongTopic
}

type randomWrongWordPropsType = {
    topicArray: string[],
    word1?: string,
    word2?:string
}

function randowWrongWord({topicArray, word1, word2}: randomWrongWordPropsType){
    let wrongWord: string = "none"
    do{
        wrongWord = topicArray[Math.floor(Math.random() * topicArray.length)];
    }while(wrongWord === word1 && wrongWord === word2)
    return wrongWord
}

export function createTest(){
    
    const rightTopic = chooseRandomTopic()
    const wrongTopicFirst = chooseWrongTopic(rightTopic)
    const wrongTopicSecond = chooseWrongTopic(rightTopic)
    const wrongTopicThird = chooseWrongTopic(rightTopic)

    let randomRightWord = rightTopic.topicArray[Math.floor(Math.random() * rightTopic.topicArray.length)];
    let randomWrongWordFirst = randowWrongWord({ topicArray: wrongTopicFirst.topicArray })
    let randomWrongWordSecond = randowWrongWord({ topicArray: wrongTopicSecond.topicArray, word1: randomWrongWordFirst })
    let randomWrongWordThird = randowWrongWord({ topicArray: wrongTopicThird.topicArray, word1: randomWrongWordFirst, word2: randomWrongWordSecond })

    const testUnshuffled = [{
        word: randomRightWord,
        sylable: rightTopic.sylable,
        right: true,
    },
    {
        word: randomWrongWordFirst,
        sylable: wrongTopicFirst.sylable,
        right: false,
    },
    {
        word: randomWrongWordSecond,
        sylable: wrongTopicSecond.sylable,
        right: false,
    },
    {
        word: randomWrongWordThird,
        sylable: wrongTopicThird.sylable,
        right: false,
    }]
    return [shuffleArray(testUnshuffled) as object[], rightTopic.sylable] as [{word: string, sylable: number, right: boolean}[], number]
}