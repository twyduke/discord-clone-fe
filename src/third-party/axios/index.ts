/**
 * @description
 * apply facade-pattern on 3rd party to reduce
 * / code density (hide the complexity )
 * / maintenance
 * / migration 3rd party
 * */

export const gets = (url: string) => {
    //axios gets
    return url
}

export const get = (url: string, param: string | number) => {
    //axios get by param
    return param && url
}

export const create = <T>(url: string, payload: T)  => {
    //axios post
    return payload && url
}

type TRequest <T> = {
    param: string | number,
    body: T
}

export const update = <T>(url: string, payload: TRequest<T>) => {
    //axios update
    return payload && url
}