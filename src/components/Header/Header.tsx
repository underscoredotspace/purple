import { SiteContext } from "lib/store";
import { useContext } from "react";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import ProfileImage from "./ProfileImage";
import Title from "./Title";

export const Header: React.FC = () => {
  const { state } = useContext(SiteContext);

  return (
    <header
      className={`fixed h-16 w-screen bg-background px-6 shadow-sm flex justify-between items-center z-30 space-x-4 ${
        state.menuVisible ? "bg-opacity-95" : "bg-opacity-50"
      } bg-blur`}
    >
      <Logo />
      <Title />
      <ProfileImage />
      <MenuToggle />
    </header>
  );
};
