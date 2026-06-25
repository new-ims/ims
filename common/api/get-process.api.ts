import { Model } from '../model';
import { Message } from './message.model';
import { ProcessMessage } from './process-message.model';

export interface GetProcessApiRequest {
    readonly processKey: number;
    readonly processType: "AMBULATORY_HEALTH_CLAIM";
    readonly readonlyLevel: "NONE";
    readonly type: "AMBULATORY_HEALTH_CLAIM";
}

export interface GetProcessApiResponse {
    readonly resultCode: number;
    readonly resultDesc: string;
    readonly messages: Message[];
    readonly failed: boolean;
    readonly baseProcess: Model.Root;
    readonly processMessage: ProcessMessage[];
    readonly invalidTabString: string[];
}