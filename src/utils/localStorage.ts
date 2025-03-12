export type LocalStorageItemTuple = [Key: string, Value: string];

const localStorageData = {
    setItem(tuple: LocalStorageItemTuple) {
        localStorage.setItem(...tuple)
    },
    getItem(key: LocalStorageItemTuple['0']) {
        return localStorage.getItem(key)
    }
}

export default localStorageData