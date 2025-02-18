import {JSX} from "react";

export default function Table ({ children }: { children: JSX.Element[] }) {
    return (
        <table className="min-w-full bg-gray-600 backdrop-opacity-60 rounded-lg overflow-hidden shadow-lg border-collapse">
            {children}
        </table>
    )
}