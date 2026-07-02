import { PROCESS_KNOWN, ProcessConfig } from '@ims';
import { DocumentStepComponent } from './steps/document-step/document-step.component';
import { PoliciesStepComponent } from './steps/policies-step/policies-step.component';
import { HistoryComponent } from './infos/history/history.component';
import { EnquiriesInfoComponent } from './infos/enquiries-info/enquiries-info.component';

export function getNursingConfig(): ProcessConfig {
  return {
    processType: 'NURSING_CLAIM',
    processName: 'תביעת סיעוד ',
    steps: [
      {
        id: 1,
        name: 'details',
        label: 'פרטי תביעה',
        component: DocumentStepComponent,
      },
      {
        id: 2,
        name: 'document',
        label: 'מסמכים',
        component: DocumentStepComponent,
        onEnter: () => {
          console.log('Entering document step');
        },
        onComplete: () => {
          console.log('Completing document step');
        },
      },
      {
        id: 3,
        name: 'policies',
        label: 'פוליסות בתביעה',
        component: PoliciesStepComponent,
      },
      {
        id: 4,
        name: 'doctor-recommendation',
        label: 'החלטת רופא',
        component: DocumentStepComponent,
      }, 
      {
        id: 5,
        name: 'decision',
        label: 'החלטת החברה',
        component: DocumentStepComponent,        
      }, 
      {
        id: 6,
        name: 'templates',
        label: 'שבלונות',
        component: DocumentStepComponent,
      }, 
      {
        id: 7,
        name: PROCESS_KNOWN.APPROVAL_STEP,
        label: 'אישור',
        component: DocumentStepComponent,
      }
    ],
    infos: [
      {
        id: 'history',
        label: 'פרטי מידע',
        component: HistoryComponent,
      },
      {
        id: 'enquiries',
        label: 'שאילתות',
        component: EnquiriesInfoComponent,
      },
    ],
    verifyInsured: false,
    regularToolbar: (defaults) => ({
      ...defaults,
      processConsultation: undefined,
      openProcess: undefined,
      comments: undefined,
      subProcesses: undefined,
    }),
  };
}
