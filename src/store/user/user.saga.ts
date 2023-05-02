import { takeLatest, put, all, call } from 'redux-saga/effects';
import { User } from 'firebase/auth';

import {
  emailSignInStartAction,
  signUpStartAction,
  signUpSuccessAction,
  USER_ACTION_TYPES,
} from './user.types';
import { signInSuccess, signInFailed, signUpSuccess } from './user.action';

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
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

export function* signUp({ payload: { email, password } }: signUpStartAction) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInAfterSignUp({ payload }: signUpSuccessAction) {
  yield call(getSnapshotFromUserAuth, payload);
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

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
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
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
