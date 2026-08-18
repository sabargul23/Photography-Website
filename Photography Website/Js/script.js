//---- Gallery filter
const filterButtons = 
document.querySelectorAll (".filter-btn");

const photoItems = 
document.querySelectorAll(".photo.item");

filterButtons.forEach(function(button)
{
button.addEventListener("click", function()
{
// Remove active from all buttons
filterButtons.forEach(function(btn){
    btn.classList.remove("active");
});
// add active to clicked button
const filter =
button.getAttribute("data-filter");
// Check photos
photoItems.forEach(function(photo){
    const categories =
    photo.getAttribute("data-category");
    if(
        filter === "all" ||
        categories.includes(filter)
    ) {
        photo.Style.display = "block";
    }
    else {
        photo.style.display = "none"
    }
});
});
}); 