export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('fp_state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
};

export const saveState = (state) => {
    try {
        localStorage.setItem('fp_state', JSON.stringify(state))
    } catch (err) {
        // ignore write errors
    }
};