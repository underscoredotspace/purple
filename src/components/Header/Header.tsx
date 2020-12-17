import Logo from "./Logo"
import MenuToggle from "./MenuToggle"
import Title from "./Title"

export const Header: React.FC = () => (
    <header className="fixed h-16 w-screen bg-background px-6 shadow-sm flex justify-between items-center z-30 bg-opacity-50 bg-blur">
        <Logo />
        <Title />
        <MenuToggle />
    </header>
)
