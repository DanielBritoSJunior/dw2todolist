import ButtonFatec from "@/components/button-fatec"
import ButtonTriplo from "@/components/button-triplo"
import Link from "next/link"

export default function TodoList() {
    return (
        <>
            <h1>Todo List</h1>
            <Link href='/'>
                <span className="text-blue-500 hover:underline">Home</span>
            </Link>
            <ButtonFatec text="Clique aqui 1" />
            <ButtonFatec text="Clique aqui 2" />

            <ButtonTriplo text="Mudar cor" />
        </>
    )
}