import { Model } from "@common";
import { ProcessModifier, ProcessSlice } from "@ims";
import { PartialStateUpdater } from "@ngrx/signals";

export function resetProcess(process: Model.Process): PartialStateUpdater<ProcessSlice> {
    return _ => ({
        process,
        isDirty: false,
    })
} 

export function modifyProcess(modifier: ProcessModifier): PartialStateUpdater<ProcessSlice> {
    return (state) => {
        if (!state.process) {
            return state;
        }
        const changes = modifier(state.process);
        const changedProcess = { ...state.process, ...changes };
        return {
            process: changedProcess,
            isDirty: true,
        };
    }
}