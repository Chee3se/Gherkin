import {JSX} from "react";

export default function Row ({ children, head }: { children: JSX.Element[], head: string }) {
    return (
        <tr className="hover:bg-gray-700 transition-colors duration-200">
            <th className="px-6 py-4 text-left font-medium text-gray-100">{head}</th>
            {children}
        </tr>
    )
}