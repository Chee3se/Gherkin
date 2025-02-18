import {JSX} from "react";

export default function Table ({ children }: { children: JSX.Element[] }) {
    return (
        <table className="min-w-full bg-gray-600 opacity-80 rounded-lg overflow-hidden shadow-lg border-collapse">
            {children}
        </table>
    )
}