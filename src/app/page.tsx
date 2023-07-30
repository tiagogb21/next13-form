import Field from "@/components/Field";
import { kindOfEvent, eventFieldsInfo, privacyFields } from "@/data/field";

export default function Home() {
    return (
        <div className="before:flex before:bg-slate-900 before:h-[18rem] before:w-screen w-screen min-h-screen flex flex-col items-center">
            <header className="flex flex-col w-80 absolute m-auto top-12 gap-4">
                <h1 className="text-3xl font-bold text-white">
                    Crie e compartilhe seu evento.
                </h1>
                <p className="text-base text-cyan-400">
                    O primeiro passo, é preencher esse formulário de inscrição.
                </p>
            </header>
            <main className="w-screen min-h-screen pb-40">
                <form
                    action=""
                    className="flex flex-col gap-4 w-3/4 min-h-[27rem] m-auto -mt-20 rounded-s-md rounded-e-md p-16 bg-white border border-solid border-slate-200"
                >
                    <fieldset className="flex flex-col gap-4">
                        <legend className="w-full pb-4 font-bold mb-4 border-b border-solid border-slate-200 text-2xl">
                            Informações do Evento
                        </legend>
                        <Field fields={eventFieldsInfo} />
                        <div className="flex flex-col gap-4">
                            <label htmlFor="extra-information">
                                Informações extras
                            </label>
                            <textarea
                                name=""
                                id="extra-information"
                                className="w-full h-40 rounded-md bg-slate-50 border border-solid border-slate-200 p-8"
                            />
                        </div>
                        <div className="relative flex flex-col gap-4">
                            <label htmlFor="kind-of-event">Categoria</label>
                            <div className="relative inline-block w-full h-14 rounded-md bg-slate-50 border border-solid border-slate-200 p-8">
                                <select
                                    name=""
                                    id="kind-of-event"
                                    className="w-full h-full opacity-0 absolute inset-0"
                                >
                                    <optgroup label="Tipo do evento">
                                        {kindOfEvent?.map((item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </optgroup>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                                    <svg
                                        className="w-4 h-4 text-slate-600 pointer-events-none"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="flex flex-col gap-4">
                        <legend className="w-full pb-4 font-bold mb-4 border-b border-solid border-slate-200 text-2xl">
                            Privacidade
                        </legend>
                        <Field fields={privacyFields} />
                    </fieldset>
                    <fieldset className="flex flex-col gap-4">
                        <legend className="w-full pb-4 font-bold mb-4 border-b border-solid border-slate-200 text-2xl">
                            Dia e hora
                        </legend>
                        <div className="flex gap-4">
                            <input
                                type="date"
                                name="event-day"
                                id="event-day"
                                className="h-14 border border-solid border-slate-200 bg-slate-50 p-8 grow"
                            />
                            <input
                                type="time"
                                name="event-start-time"
                                id="start-time"
                                className="h-14 border border-solid border-slate-200 bg-slate-50 p-8"
                            />
                            <input
                                type="time"
                                name="event-end-time"
                                id="end-time"
                                className="h-14 border border-solid border-slate-200 bg-slate-50 p-8"
                            />
                        </div>
                    </fieldset>
                    <div className="w-full flex items-center mt-8">
                        <button
                            type="submit"
                            className="w-2/4 bg-teal-400 text-white rounded-2xl font-bold text-2xl p-2"
                        >
                            Salvar evento
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
