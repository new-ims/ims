// import { ProcessConfig } from "@ims";
// import { DocumentStepComponent } from "./steps/document-step/document-step.component";
// import { PoliciesStepComponent } from "./steps/policies-step/policies-step.component";
// import { HistoryComponent } from "./infos/history/history.component";
// import { EnquiriesInfoComponent } from "./infos/enquiries-info/enquiries-info.component";

// export function getNursingConfig(): ProcessConfig {
//     return {
//         processType: "NURSING",
//         processName: "תביעת סיעוד ",
//         steps: [
//             {
//                 id: 'document', 
//                 label: 'מסמכים',
//                 component: DocumentStepComponent, 
//                 onEnter: () => {
//                     console.log('Entering document step');
//                 }, 
//                 onComplete: () => {
//                     console.log('Completing document step');
//                 }
//             }, 
//             {
//                 id: 'policies', 
//                 label: 'פוליסות בתביעה', 
//                 component: PoliciesStepComponent
//             }
//         ], 
//         infos: [
//             {
//                 id: 'history', 
//                 label: 'פרטי מידע',
//                 component: HistoryComponent
//             }, 
//             {
//                 id: 'enquiries', 
//                 label: 'שאילתות',
//                 component: EnquiriesInfoComponent
//             }
//         ], 
//         verifyInsured: false,
//         regularToolbar: (defaults) => ({
//             ...defaults,
//             processConsultation: undefined,
//             openProcess: undefined,
//             comments: undefined,
//             subProcesses: undefined,})
//     };
// }