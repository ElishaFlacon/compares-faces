import { useState, useContext } from "react";
import { AppContext } from "../context";


export const useFetching = (callback) => {
    const { setSnack } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        // это необходимо, чтобы при кажом вызове этой функции ошибка была равно пустой строке
        // так как, если ошибка отработала, то ее состояние не перезапишиться, при повторном вызове этой функции
        // из-за этого в компоненте Find не будет закрываться модальное окно, если ошибка выпала больше одного раза 
        setError('');

        try {
            setIsLoading(true);
            await callback();
        } catch (error) {
            setError(error.message);
            setSnack([true, 'Сервер не работает или произошла непредвиденная ошибка!', "error"]);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}