import {  getproduct } from "./Services/Service";

export const incNumber = (num,count) => {
   return async (dispatch)=>{
        // ajax()
       const data = await getproduct(num,count)
       console.log(count,"INCREMENT");
        dispatch(setIncrement(num,data))
   }
};

export const setIncrement = (num,data) => {
    return{
        type: "INCREMENT",
        payload:{num,data}
    }
}

export const decNumber = (num,count) => {
    return async (dispatch)=>{
        // ajax()
        const data = await getproduct(count)
       console.log(count,"DECREMENT");
       dispatch(setDecrement(num,data))
   }
    
};

export const setDecrement = (num,data) =>{
    return{
        type: "DECREMENT",
        payload:{num,data}

    }
}

export const AddListText = (List) => {
    return {
        type: "Listing",
        payload:List
    }
}

export const DeleteListText = (id) => {
    return {
        type: "DeleteListing",
        payload:id
    }
}

export const EditListText = (id) => {
    return {
        type: "EditListing",
        payload:id
    }
}


