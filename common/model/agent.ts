// Auto-generated from samples/model.json

import type { ISODateTimeString } from './atoms';
import type { Address } from './address';
import type { AgentType } from './agent-type';
import type { ScaledNumber } from './scaled-number';

export interface Agent {
  readonly address: Address;
  readonly agentNumber: number;
  readonly agentType: AgentType;
  readonly cellNumber: ScaledNumber;
  readonly className: 'il.co.migdal.ins.entities.person.agent.Agent';
  readonly diredtAgentCode: number;
  readonly email: string;
  readonly firstName: string;
  readonly identity: number;
  readonly lastName: string;
  readonly licenseExpiration: ISODateTimeString;
  readonly licenseId: number;
  readonly licenseNum: string;
  readonly misparTa: ScaledNumber;
  readonly newLifeCode: number;
  readonly region: number;
  readonly shortName: string;
  readonly team: number;
}
