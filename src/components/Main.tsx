import Translations from "./Translations";
import Features from "./Features";

export default function Main() {
    return (
        <div className="sections flex overflow-x-auto snap-x snap-mandatory w-screen">
            <div id="translations" className="flex-shrink-0 w-full snap-start flex justify-center pt-20">
                <Translations/>
            </div>
            <div id="features" className="flex-shrink-0 w-full snap-start h-full flex justify-center pt-20">
                <Features />
            </div>
        </div>
    );
}