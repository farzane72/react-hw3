
let arrayCart=[]


export const SetLocalStorage=({nameLocalStorage,data})=>{
    
    arrayCart = GetLocalStorage(`${nameLocalStorage}`)

    arrayCart.push(data)

    localStorage.setItem(`${nameLocalStorage}`, JSON.stringify( arrayCart));

}

export const GetLocalStorage=(nameLocalStorage)=>{
    
    let emptyArray=[]
    let array = JSON.parse(localStorage.getItem(`${nameLocalStorage}`));
    if(array===null) return  emptyArray
    else
    return array
}
export const EditQtyLocalStorage=({nameLocalStorage,arrayCart,id,qty})=>{
    console.log('hi');
    //arrayCart = GetLocalStorage(`${nameLocalStorage}`)
    console.log(qty);
    // let editQty =  arrayCart.find((t) => t.id === id);
    // editQty.qty=5
    arrayCart=arrayCart.map(t=>t.id===id ?
        {...t,qty:qty}:
        t
        )

    localStorage.setItem(`${nameLocalStorage}`, JSON.stringify( arrayCart));
}

export const DeleteLocalStorage=({nameLocalStorage,id})=>{

    arrayCart = GetLocalStorage(`${nameLocalStorage}`)
    // arrayCart.forEach((item, index, arrayCart) => {
    //     if (item.id === id) {
    //         arrayCart.splice(index, 1);
    //     }
    // })
    arrayCart= arrayCart.filter(item=>item.id !== id)
    localStorage.setItem(`${nameLocalStorage}`, JSON.stringify( arrayCart));

}