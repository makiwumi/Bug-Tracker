//dummy model
import bugModel from '../Model/bugModel';


export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:1234,
        name:"Crash on Load",
        details:"kflasdkfakl",
        steps:"open something",
        version:"v2.0",
        assigned: "Marian Akiwumi",
        creator: "Francesco Adefila",
        priority:1,
        time:"23:47",

    }))
    data.push(new bugModel({
        _id:1234,
        name:"Crash on Load",
        details:"kflasdkfakl",
        steps:"open something",
        version:"v2.0",
        assigned: "Marian Akiwumi",
        creator: "Francesco Adefila",
        priority:3,
        time:"23:47",

    }))
    //sorting data in a certain order
    let sorted = data.sort((a,b)=>{return a.priority - b.priority})
    return sorted;
}