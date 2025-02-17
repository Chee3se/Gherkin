import {JSX} from "react";

export default function Data ({ children }: { children: JSX.Element }) {
    return (
        <td className="px-6 py-4 whitespace-nowrap">
            {children}
        </td>
    )
}