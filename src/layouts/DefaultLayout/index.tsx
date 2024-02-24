import { Outlet } from "react-router-dom";
import { Aside } from "../../components/Aside";
import { useState } from "react";

export function DefaultLayout() {
  const [ asideIsOpen, setAsideIsOpen ] = useState(false)

  function handleSetAsideIsOepn(): void {
    setAsideIsOpen(state => !state)
  }

  return(
    <>
      <Aside
        isOpen={asideIsOpen}
        handleSetAsideIsOpen={handleSetAsideIsOepn}
      />

      
      <Outlet/>
    </>
  )
}