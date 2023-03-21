import { axiosApi } from "."

export const signUp = async () => {
    const result = await axiosApi('get', 'addMessage', {
        text1: 123,
        text2: 321
    })

    console.log(result)
}
