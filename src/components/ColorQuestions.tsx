import { useState } from "react";
import Container from "./Container";

// we can enforce the shape of an object with KEYWORD: interface
// if we know the "shape" of the object will always be the same
// we can define the types of each property
interface Question {
  text: string;
  category: "Spring" | "Summer" | "Autumn" | "Winter";
  // the '|' is union
  // this can be restrictive but if you want you can create
  // [key: string]: any;
  // this'll let you you add any additional property you'd like in the other object
}

const questions: Question[] = [
  // questions: Question[] this is called type annotation. This means you are explicitly specifying that the questions object must conform to the Question interface.
  { text: "Do you have warm undertones in your skin?", category: "Spring" },
  {
    text: "Is your natural hair color lighter than medium brown?",
    category: "Spring",
  },
  {
    text: "Do bright and lively colors with high brightness and low saturation levels enhance your appearance?",
    category: "Spring",
  },
  {
    text: "Do you feel that vibrant and energetic colors suit you best?",
    category: "Spring",
  },
  { text: "Do you have cool undertones in your skin?", category: "Summer" },
  {
    text: "Is your natural hair color lighter than medium brown?",
    category: "Summer",
  },
  {
    text: "Do soft colors with high brightness and low saturation levels complement your look?",
    category: "Summer",
  },
  {
    text: "Do gentle and soothing colors make your complexion appear more vibrant?",
    category: "Summer",
  },
  { text: "Do you have warm undertones in your skin?", category: "Autumn" },
  {
    text: "Is your natural hair color darker than medium brown?",
    category: "Autumn",
  },
  {
    text: "Do softer hues with low brightness and saturation levels suit you?",
    category: "Autumn",
  },
  {
    text: "Do warm and homely colors enhance your overall appearance?",
    category: "Autumn",
  },
  { text: "Do you have cool undertones in your skin?", category: "Winter" },
  {
    text: "Is your natural hair color darker than medium brown?",
    category: "Winter",
  },
  {
    text: "Do strong colors with low brightness and high saturation levels look best on you?",
    category: "Winter",
  },
  {
    text: "Do bold and impactful colors make your features stand out?",
    category: "Winter",
  },
];

const seasonQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // hook to create a state variable currentQuestion initialized to 0.
  const [scores, setScores] = useState({
    Summer: 0,
    Autumn: 0,
    Winter: 0,
    Spring: 0,
    //Creates a scores state object with initial values of 0 for each season.
    //setScores is the function to update this state.
  });
  const [result, setResult] = useState<string | null>(null);
  // the state can either be a 'string' or 'null'.
  // (null): This is the initial state value.
  const handleAnswer = (answer: boolean) => {
    if (answer) {
      // If answer is true, updates the scores state.
      setScores((prev) => ({
        ...prev,
        // Uses the spread operator to copy the previous state.
        [questions[currentQuestion].category]:
          prev[questions[currentQuestion].category as keyof typeof prev] + 1,
        // Increments the score for the category of the current question.
      }));
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      // If there are more questions, moves to the next question.
    } else {
      calculateResult();
      // If it's the last question, calls calculateResult().
    }
  };

  const calculateResult = () => {
    const season = Object.entries(scores).reduce((a, b) =>
      // Converts scores object to an array of [key, value] pairs.
      // Uses reduce to find the entry with the highest score.
      a[1] > b[1] ? a : b
    )[0];
    setResult(season);
    //  extracts the season name (key) from the winning entry.
  };

  if (result) {
    return <div>Your season is: {result}</div>;
  }

  return (
    <Container>
      <div className="m-5 flex flex-col  justify-center items-center py-8 mt-16 border-y border-gray-200 light:border-gray-800">
        <h2>{questions[currentQuestion].text}</h2>
        <div className="m-5 flex flex-wrap justify-center gap-y-4 gap-x-6">
          <button
            className="relative flex h-11 w-full items-center justify-center px-6 text-gray-800 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:text-white hover:before:scale-105 hover:before:border-white hover:before:[background-color:#6458ae] active:duration-75 active:before:scale-95 light:before:border-gray-700 light:before:bg-gray-800 sm:w-max"
            onClick={() => handleAnswer(true)}
          >
            <span className="relative">Yes</span>
          </button>
          <button
            className="relative flex h-11 w-full items-center justify-center px-6 text-gray-800 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:text-white hover:before:scale-105 hover:before:border-white hover:before:[background-color:#6458ae] active:duration-75 active:before:scale-95 light:before:border-gray-700 light:before:bg-gray-800 sm:w-max"
            onClick={() => handleAnswer(true)}
          >
            <span className="relative">No</span>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default seasonQuiz;
