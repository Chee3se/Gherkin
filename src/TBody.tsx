import {JSX} from "react";

export default function TBody ({ children }: { children: JSX.Element[] }) {
    return (
        <tbody className="text-gray-700 divide-y divide-gray-200">
        {children}
        </tbody>
    )
}