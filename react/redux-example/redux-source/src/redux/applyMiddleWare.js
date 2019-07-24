export default function (...middleWare) {
    return (createStore) => (...arg) => {
        // reducer, preloadState
        const store = createStore(...arg)
    }
}