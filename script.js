const deleteButton=document.getElementById("Delete")
deleteButton.addEventListener('click',()=>{
    const parentDiv=deleteButton.closest('.grid-item'); 
    parentDiv.remove(); 
})