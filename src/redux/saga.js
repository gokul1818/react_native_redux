import { put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { fetchDataGet } from "./action";

const searchQuery = 'action';

function* fetchDatasaga() {
    try {
        const data = yield axios.get(`http://www.omdbapi.com/?apikey=2e8a25a4&s=${encodeURIComponent(searchQuery)}`);
        yield put(fetchDataGet(data.data))
    }
    catch (error) {
        console.log(error)
    }
}
function* watchFetchData() {
    yield takeLatest("FETCH_DATA", fetchDatasaga);
}
export default function* rootsaga() {
    yield all([watchFetchData()])
}