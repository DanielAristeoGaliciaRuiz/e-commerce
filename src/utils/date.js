export const changeDateFormat=(oldFormat)=>{
    const newDate=new Date(oldFormat)
    const options={
        year:"numeric",
        month:"long",
        day:"2-digit"
    }
    return newDate.toLocaleDateString("ns-En",options)
}