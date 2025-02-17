import Table from "./Table.tsx";
import THead from "./THead.tsx";
import TBody from "./TBody.tsx";
import Row from "./Row.tsx";
import Data from "./Data.tsx";

export default function Translations() {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <Table>
                <caption className="text-2xl font-bold mb-4 text-gray-100">Translations</caption>
                <THead />
                <TBody>
                    <Row head={"1"}>
                        <Data><span>Home</span></Data>
                        <Data><span>Māja</span></Data>
                    </Row>
                    <Row head={"2"}>
                        <Data><span>About</span></Data>
                        <Data><span>Par</span></Data>
                    </Row>
                </TBody>
            </Table>
        </div>
    );
}