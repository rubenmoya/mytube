import { put, take, call } from 'redux-saga/effects';
import axios from 'axios';
import config from '../../config';

const API_BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = config.apiKey;

function* performRequest({ endpoint, method, params = {}, actions }) {
  const [successAction, errorAction] = actions;
  const url = `${API_BASE_URL + endpoint}&key=${API_KEY}`;

  try {
    const response = yield call(axios[method.toLowerCase()], url, params);
    const { data } = response;
    if (successAction) yield put(successAction({ response, data }));
  } catch (error) {
    console.error(error);  // eslint-disable-line
    if (errorAction) yield put(errorAction({ error }));
  }
}

export function* watchForApiRequests() {
  while (true) { // eslint-disable-line no-constant-condition
    const action = yield take('*');
    if (action.type.startsWith('API_REQUEST')) {
      yield performRequest(action);
    }
  }
}

export default watchForApiRequests;
