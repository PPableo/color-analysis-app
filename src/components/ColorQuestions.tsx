import { useState } from "react";

// we can enforce the shape of an object with KEYWORD: interface
// if we know the "shape" of the object will always be the same
// we can define the types of each property
interface Question {
    text: string;
    category: 'Spring' | 'Summer' | 'Autumn' | 'Winter';
    // the '|' is union
    // this can be restrictive but if you want you can create
    // [key: string]: any;
        // this'll let you you add any additional property you'd like in the other object
}



const seasonQuiz = (): JSX.Element => {


    
    return (
       <div>Hello World</div>
    );
};

export default seasonQuiz;