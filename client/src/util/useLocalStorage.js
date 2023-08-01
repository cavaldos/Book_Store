import { useState, useEffect } from "react";

export function useCheckLocalStorage() {
    const [isLocalStorageSupported, setIsLocalStorageSupported] = useState(
        typeof Storage !== "undefined"
    );

    return isLocalStorageSupported;
}

export function useSaveLocalStorage(key, value) {
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    }, [key, value]);
}

export function useGetLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    return value;
}

export function useUpdateLocalStorage(key, value) {
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    }, [key, value]);
}