import { take, put, call, fork } from 'redux-saga/effects'
import axios from 'axios'
import { receiveHelp, receiveHelpArticle } from './actions'

export function* fetchHelpSaga() {
    const apiResponse = yield call(
        axios.get, "http"
    )

    yield put(receiveHelp(apiResponse.data))
}

export function* fetchHelpArticleSaga(articleId) {
    const apiResponse = yield call(
        axios.get, "http"
    )

    yield put(receiveHelpArticle(apiResponse.data))
}

export function* fetchHelp() {
    while (true) {
        const {} = yield take('SEARCH_HELP')
        yield call(fetchHelpSaga)
    }
}

export function* fetchHelpArticle() {
    while (true) {
        const { articleId } = yield take('FETCH_HELP_ARTICLE')
        yield call(fetchHelpArticleSaga, articleId)
    }
}

// export function* receiveHelpArticle() {
//     while (true) {
//         const { content } = yield take('RECEIVE_HELP_ARTICLE')
//         yield call(receiveHelpArticleSaga, content)
//     }
// }

export default function* () {
    yield fork(fetchHelpArticle)
    yield fork(fetchHelp)
  }