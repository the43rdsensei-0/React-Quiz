import Header from "./Header";
import Main from "./Main";
import Error from "./Error";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Questions from "./Questions";
import NextButton from "./NextButton";
import Progress from "./Progress";
import EndScreen from "./EndScreen";
import Footer from "./Footer";
import Timer from "./Timer";

export default function App({status}) {

  // const {status} = useQuiz();
  // here's one thing i figured, you can just pass the props into a component instead of destructuring them from the custom hook from the context like above and it still works perfectly making the code even more cleaner
  
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Questions />
            <Footer >
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <EndScreen />}
      </Main>
    </div>
  );
}
