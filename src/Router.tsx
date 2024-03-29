import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { QuizSingle } from "./QuizSingle";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="quiz/:id" element={<QuizSingle />} />
      </Route>
    </Routes>
  )
}