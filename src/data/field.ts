export interface IEventField {
    id: string;
    title: string;
    validationMessage: string;
}

export const eventFieldsInfo: IEventField[] = [
    {
        id: "event-title",
        title: "Título do Evento",
        validationMessage: "mínimo de 8 caracteres",
    },
    {
        id: "event-link",
        title: "Link do Evento",
        validationMessage: "comece com https://",
    },
    {
        id: "event-whatsapp",
        title: "Whatsapp para contato",
        validationMessage: "somente números",
    },
];

export const kindOfEvent = ["palestra", "aula"];

export const privacyFields = [
    {
        id: "admin-email",
        title: "Email do administrador",
        validationMessage: "digite um email válido",
    },
    {
        id: "access-password",
        title: "Senha de acesso para os participantes",
        validationMessage: "mínimo 8 caracteres",
    },
]
