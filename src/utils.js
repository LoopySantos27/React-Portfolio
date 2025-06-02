/*Vamos a exportar una funcion para conseguir el url de las imagenes */
/*export const getImageUrl = (path)=>{
    console.log(`/assets/${path}`);
    return new URL(`/assets/${path}`, import.meta.url).href;
};*/
/*
export const src= computed(()=>{
    const path = new URL('/assets/', import.meta.url);
    return `${path}`
});*/

export const getImageUrl = (path)=>{
    return new URL('/assets/${path}', import.meta.url).href;
};