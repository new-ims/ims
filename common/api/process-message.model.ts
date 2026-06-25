import { Message } from "./message.model";

export const PROCESS_MESSAGE_TYPES = [
    'PROCESS_MESSAGE', 
    'AGENT_MESSAGE', 
    'COMPANY_MESSAGE'
] as const;

export type ProcessMessageType = typeof PROCESS_MESSAGE_TYPES[number];



export interface ProcessMessage extends Message {
    readonly processMessageType: ProcessMessageType;
}