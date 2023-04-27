import { IRootState } from '../root-reducer';

export const selectCurrentUser = (state: IRootState) => state.user.currentUser;
