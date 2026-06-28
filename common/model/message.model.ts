export interface Message {
    readonly level: number;
    readonly message: string;
    readonly refId: number | null;
    readonly messageId: number | null;
}