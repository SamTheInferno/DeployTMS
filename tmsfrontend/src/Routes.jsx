import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { RouterProvider, Navigate } from 'react-router-dom'
import { useState, useEffect, lazy, Suspense } from "react";

import useUser from "./context/UserContext";
import Welcome from "./components/Welcome";

// Dynamic imports for components

const App = lazy(() => import("./App.jsx"));
const Home = lazy(() => import("./components/home/Home.jsx"));
const Tasks = lazy(() => import("./components/tasks/Tasks.jsx"));
const Mentors = lazy(() => import("./components/mentors/Mentors.jsx"));
const Chat = lazy(() => import("./components/chat/Chat.jsx"));
const Settings = lazy(() => import("./components/settings/Settings.jsx"));
const Login = lazy(() => import("./components/authentication/Login.jsx"));
const Register = lazy(() => import("./components/authentication/Register.jsx"));
const Submissions = lazy(() => import("./components/submissions/Submissions.jsx"));
const AssignTask = lazy(() => import("./components/assignTask/AssignTask.jsx"));



export default function Routes() {
  const { uid, userType } = useUser();
  const [router, setRouter] = useState(null);


  const router1 = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </>
    )
  );

  const router2 = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/*" element={<Navigate to={`/${uid}/home`} replace />} />
        <Route path={`/${uid}`} element={<App />} >
          <Route path='home' element={<Home />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='mentors' element={<Mentors />} />
          <Route path='chat' element={<Chat />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </>
    )
  );

  const router3 = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/*" element={<Navigate to={`/${uid}/home`} replace />} />
        <Route path={`/${uid}`} element={<App />} >
          <Route path='home' element={<Home />} />
          <Route path='assignTask' element={<AssignTask />} />
          <Route path='submissions' element={<Submissions />} />
          <Route path='chat' element={<Chat />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </>
    )
  );


  useEffect(() => {
    if (userType === null) {
      setRouter(router1);
    } else if (userType === "student") {
      setRouter(router2);
    } else if (userType === "mentor") {
      setRouter(router3);
    }
  }, [uid]);


  return (

    router === null ? (
      <div className="flex justify-center items-center h-screen dark:bg-[#070F2B] dark:text-[#DFF2EB] bg-[#DFF2EB]">
        <h1 className="text-8xl">Loading...</h1>
      </div>
    ) :
    <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen dark:bg-[#070F2B] dark:text-[#DFF2EB] bg-[#DFF2EB]">
            <h1 className="text-8xl">Loading...</h1>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>

  )
}
