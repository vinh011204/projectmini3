export const fetApi=async (api)=>{
    const respons= await fetch(api);
    const result=await respons.json();
    return result;
}