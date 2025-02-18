import Table from "./table/Table.tsx";
import THead from "./table/THead.tsx";
import TBody from "./table/TBody.tsx";
import Row from "./table/Row.tsx";
import Data from "./table/Data.tsx";

export default function Translations() {
    return (
        <div className="p-8 max-w-4xl mx-auto relative z-10">
            <Table>
                <THead />
                <TBody>
                    <Row head={"1"}>
                        <Data><span>Feature</span></Data>
                        <Data><span>Funkcionālā iezīme</span></Data>
                    </Row>
                    <Row head={"2"}>
                        <Data><span>Background</span></Data>
                        <Data><span>Konteksts</span></Data>
                    </Row>
                    <Row head={"3"}>
                        <Data><span className="line-through">Rule</span></Data>
                        <Data><span className="line-through">Noteikums</span></Data>
                    </Row>
                    <Row head={"4"}>
                        <Data><span>Scenario</span></Data>
                        <Data><span>Scenārijs</span></Data>
                    </Row>
                    <Row head={"5"}>
                        <Data><span>Scenario Outline</span></Data>
                        <Data><span>Scenārijs pēc parauga</span></Data>
                    </Row>
                    <Row head={"6"}>
                        <Data><span>Examples</span></Data>
                        <Data><span>Piemēri</span></Data>
                    </Row>
                    <Row head={"7"}>
                        <Data><span>Given</span></Data>
                        <Data><span>Kad</span></Data>
                    </Row>
                    <Row head={"8"}>
                        <Data><span>When</span></Data>
                        <Data><span>Ja</span></Data>
                    </Row>
                    <Row head={"9"}>
                        <Data><span>Then</span></Data>
                        <Data><span>Tad</span></Data>
                    </Row>
                    <Row head={"10"}>
                        <Data><span>And</span></Data>
                        <Data><span>Un</span></Data>
                    </Row>
                    <Row head={"11"}>
                        <Data><span>But</span></Data>
                        <Data><span>Bet</span></Data>
                    </Row>
                    <Row head={"12"}>
                        <Data><span>Or</span></Data>
                        <Data><span>Vai</span></Data>
                    </Row>
                </TBody>
            </Table>
        </div>
    );
}