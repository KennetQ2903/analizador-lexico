export type PERSONA = {
    NOMBRE?: string,
    TELEFONO?: string,
    CORREO?: string
}
export type XML={
    XML?: {
        PERSONA?: Array<PERSONA>
    }
}

export type InnerError = {
    value: string;
    path: string;
    type: string;
    errors: Array<string>;
    params: {
        value: string;
        originalValue: string;
        path: string;
        spec: {
            strip: boolean;
            strict: boolean;
            abortEarly: boolean;
            recursive: boolean;
            disableStackTrace: boolean;
            nullable: boolean;
            optional: boolean;
            coerce: boolean;
        };
        regex: any;
    };
    inner: Array<InnerError>;
    name: string;
    message: string;
}

export type YupResponse = {
    value: XML;
    errors: Array<string>;
    inner: Array<InnerError>;
    name: string;
    message: string;
}
export type ValidationResponse=YupResponse;
