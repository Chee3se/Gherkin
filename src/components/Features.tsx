export default function Features() {
    return (
        <section className="text-white min-h-screen p-8 top-0 relative">

            <div className="max-w-6xl mx-auto space-y-12 relative z-10">
                {/* Main Content */}
                <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm shadow-2xl border border-gray-700">
                    <h2 className="text-3xl font-black text-white mb-6">Kas un kāpēc ir funkcionālā iezīme?</h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Funkcionālā iezīme ir konkrēta sistēmas funkcionalitāte, kas atbalsta kādu lielāku spēju (capability) vai biznesa mērķi. Tā ir strukturēts apraksts, kas skaidri nosaka, kā sistēma rīkosies noteiktos gadījumos.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-700/50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-2">Komunikācija</h3>
                            <p className="text-gray-300">Nodrošina saprotamu un viennozīmīgu valodu visiem ieinteresētajiem, lai visi dalībnieki saprastu, kā sistēma paredzēti darbojas.</p>
                        </div>
                        <div className="bg-gray-700/50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-2">Verifikācija</h3>
                            <p className="text-gray-300">Ļauj automatizēti pārbaudīt, vai sistēma rīkojas saskaņā ar aprakstīto uzvedību.</p>
                        </div>
                    </div>
                </div>

                {/* User Stories */}
                <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm shadow-2xl border border-gray-700">
                    <h2 className="text-3xl font-black text-white mb-6">Lietotājstāstu formāts</h2>
                    <div className="bg-gray-700/50 p-6 rounded-lg text-green-400 font-mono">
                        Kā [lietotājs/aktors] es vēlos [konkrētu sistēmas uzvedību], lai [sasniegtu konkrētu mērķi]
                    </div>
                </div>

                {/* Scenarios */}
                <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm shadow-2xl border border-gray-700">
                    <h2 className="text-3xl font-black text-white mb-6">Scenāriju struktūra</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-green-900/30 p-6 rounded-lg border border-green-700">
                            <h3 className="text-xl font-bold text-green-400 mb-2">Given</h3>
                            <p className="text-gray-300">Sākotnējie nosacījumi, kas jāizpilda pirms darbības sākuma</p>
                        </div>
                        <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-700">
                            <h3 className="text-xl font-bold text-blue-400 mb-2">When</h3>
                            <p className="text-gray-300">Darbība vai notikums, kas izraisa sistēmas reakciju</p>
                        </div>
                        <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-700">
                            <h3 className="text-xl font-bold text-purple-400 mb-2">Then</h3>
                            <p className="text-gray-300">Sagaidāmais rezultāts vai izmaiņas sistēmas stāvoklī</p>
                        </div>
                    </div>
                </div>

                {/* Rubik's Cube Metaphor */}
                <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm shadow-2xl border border-gray-700">
                    <h2 className="text-3xl font-black text-white mb-6">Rubika kuba perspektīva</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Rubika kubs kā metafora ilustrē, ka viena funkcionālā iezīme var tikt apskatīta no dažādām perspektīvām – katra "puse" atklāj citu aspektu vai scenāriju. Tā kā Rubika kubs vienmēr paliek tas pats objekts, mainās tikai skatpunkts, tā arī iezīme saglabā savu būtību, bet tās uzvedība var atšķirties atkarībā no konteksta.
                    </p>
                </div>

                {/* Happy Path */}
                <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm shadow-2xl border border-gray-700">
                    <h2 className="text-3xl font-black text-white mb-6">Veiksmīgā iznākuma scenārijs</h2>
                    <p className="text-gray-300 leading-relaxed">
                        "Happy Path" ir apraksts, kurā viss notiek saskaņā ar plānu – lietotājs sasniedz mērķi, un sistēma darbojas kā paredzēts, bez nekavējumiem vai kļūdām. Tas ir labākais gadījums, kurā visi iepriekš noteiktie nosacījumi ir izpildīti.
                    </p>
                </div>
            </div>
        </section>
    );
}