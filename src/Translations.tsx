import Table from "./Table.tsx";
import THead from "./THead.tsx";
import TBody from "./TBody.tsx";
import Row from "./Row.tsx";
import Data from "./Data.tsx";

export default function Translations() {
    return (
        <div className="p-8 max-w-4xl mx-auto relative z-10">
            <Table>
                <caption className="text-2xl font-bold mb-4 text-gray-100">Gherkin termini</caption>
                <THead />
                <TBody>
                    <Row head={"1"}>
                        <Data><span>Feature</span></Data>
                        <Data><span>Funkcionalitāte</span></Data>
                    </Row>
                    <Row head={"2"}>
                        <Data><span>Background</span></Data>
                        <Data><span>Konteksts</span></Data>
                    </Row>
                    <Row head={"3"}>
                        <Data><span>Rule</span></Data>
                        <Data><span>Noteikums</span></Data>
                    </Row>
                    <Row head={"4"}>
                        <Data><span>Scenario</span></Data>
                        <Data><span>Scenārijs</span></Data>
                    </Row>
                    <Row head={"5"}>
                        <Data><span>Scenario Outline</span></Data>
                        <Data><span>Scenārija paraugs</span></Data>
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
                </TBody>
            </Table>
        </div>
    );
}