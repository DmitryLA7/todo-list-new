const JsonData = {
    stringifyItem(i: unknown): string | null {
        try {
            return JSON.stringify(i)
        } catch (error) {
            console.error(error)

            return null
        }
    },
    parseItem(i: string): unknown {
        try {
            return JSON.parse(i);
        } catch (error) {
            console.error(error)

            return null;
        }
    }
}

export default JsonData;