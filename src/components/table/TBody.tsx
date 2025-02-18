import {JSX} from "react";

export default function TBody ({ children }: { children: JSX.Element[] }) {
    return (
        <tbody className="text-gray-100 divide-y divide-gray-700">
        {children}
        </tbody>
    )
}