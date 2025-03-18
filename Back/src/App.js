import QuizInfo from "./components/routes/QuizInfo";
import TournamentRoute from "./components/routes/TournamentRoute";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import QuestionScreenRoute from "./components/routes/QuestionScreenRoute";
import ProgressRoute from "./components/routes/ProgressRoute";
import GameRoute from "./components/routes/GameRoute";
import GameDetails from "./components/Game/GameDetails";
import GameLevel from "./components/Game/GameLevel";
import GamePlay from "./components/Game/GamePlay";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <TournamentRoute></TournamentRoute>
    ),
  },
  {
    path: "/QuizInfo/:id",
    element: (
   <QuizInfo></QuizInfo>
    ),
  },
{
  path: "/Screen",
  element: (
 <QuestionScreenRoute></QuestionScreenRoute>
  ),
},
{
  path: "/progress",
  element: (
    <ProgressRoute></ProgressRoute>
  ),
},
{
  path: "/Play/:id",
  element: (
<QuestionScreenRoute></QuestionScreenRoute>
  ),
},
{
  path: "/Game/:id",
  element: (
 <GameRoute></GameRoute>
  ),
},
{
  path: "/GameDetails/:id/:indx",
  element: (
   <GameDetails></GameDetails>
  ),
},
{
  path: "/GameLevel/:constid",
  element: (
 <GameLevel></GameLevel>
  ),
},
{
  path: "/GamePlay/:user_id/:contest_id/:level_id/:score",
  element: (
<GamePlay></GamePlay>
  ),
},
]);
function App() {
  return (
   <>
    <RouterProvider router={router} />
   
   </>
  );
}

export default App;
