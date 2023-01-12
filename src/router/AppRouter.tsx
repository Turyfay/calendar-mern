import { Route } from "react-router";
import { Navigate, Routes } from "react-router-dom"
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";


export const AppRouter = () => {
  const authStatus = 'no-authenticated';
  return (
    <Routes>
      {
        (authStatus == 'not-authenticated') 
        ? <Route path="/auth/*" element={<LoginPage/>}/> 
        : <Route path="/*" element={<CalendarPage/>}/>
      }     
      <Route path="/*" element={<Navigate to='/auth/login'/>}/>

    </Routes>
  )
}
