import {useThemeStore} from "../store/useThemeStore"
import {dataProyecto} from "../data/data"
import { CardMenu } from "../components/HomeComponents/CardMenu"
import { Icon } from '@iconify/react';
// import { useEffect } from "react"
export const Home = () => {
    const {theme,toggleTheme } = useThemeStore()
    // useEffect(()=>{
    //     document.documentElement.classList.remove("light","dark");
    //     document.documentElement.classList.add(theme);
    // },[theme]);
    return (
        <main className="bg-primary h-screen dark:bg-primary-dark flex flex-col items-center justify-center overflow-hidden">
            <section className=" rounded-lg  min-w-[450px]  ">
                <h1 className="text-black dark:text-white text-4xl font-bold mb-4 flex items-center gap-4">
                    PROYECTOS
                    <Icon icon="catppuccin:tailwind" width="40" height="40"></Icon>
                </h1>
                {
                    dataProyecto.map((item,index)=>{
                        return(
                            <CardMenu key={item.id} item={item} index={index}/>
                        )
                    })
                }
            </section>

            <button onClick={toggleTheme} className="cursor-pointer p-2 rounded-lg bg-white dark:bg-black dark:text-white text-black font-semibold">
                {theme==="light"?"🌚 Modo Oscuro":"🌞 Modo Claro"}
            </button>
        </main>
    )
}