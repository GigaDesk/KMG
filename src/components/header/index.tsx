import * as React from "react";
import Navbar from "./navbar";
import { useState } from "react";
import BottomDrawer from "./bottomdrawer";

export default function Header() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="h-20 bg-white relative">
      <div>
      <Navbar handleOpen={handleOpen} open={open} />
      </div>
      {open ? <BottomDrawer /> : null}
    </header>
  );
}
