import { takeLatest, put, all, call } from 'redux-saga/effects';
import { User } from 'firebase/auth';

import { emailSignInStartAction, USER_ACTION_TYPES } from './user.types';
import { signInSuccess, signInFailed } from './user.action';

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalDetails?: any
) {
  try {
    yield call<any>(createUserDocumentFromAuth, userAuth, additionalDetails);
    yield put(signInSuccess(userAuth));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: emailSignInStartAction) {
  try {
    const user: User = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );

    yield signInSuccess(user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth: User = yield call(getCurrentUser);
    if (!userAuth) {
      return;
    }

    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
  ]);
}
