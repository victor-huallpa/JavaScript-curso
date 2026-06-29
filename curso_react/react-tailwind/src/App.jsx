import { MyRoutes } from "./routers/routes"
import { useThemeStore } from "./store/useThemeStore"


function App() {
  // const [count, setCount] = useState(0)
  const {theme} = useThemeStore()
  document.documentElement.classList.toggle("dark", theme==="dark")

  return (
    <MyRoutes/>
  )
}

export default App
