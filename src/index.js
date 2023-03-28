const ramenMenu = document.getElementById("ramen-menu")

const bigImage = document.querySelector(".detail-image")
const name = document.querySelector(".name")
const resturant = document.querySelector(".restaurant")
const rating = document.getElementById("rating-display")
const comment = document.getElementById("comment-display")
const form = document.getElementById("new-ramen")

const newImageInput = document.getElementById("new-image")
const newNameInput = document.getElementById("new-name")
const newResturantInput = document.getElementById("new-restaurant")
const newRatingInput = document.getElementById("new-rating")
const newCommentInput = document.getElementById("new-comment")

function fetchRamen() {
    fetch("http://localhost:3000/ramens")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);

        for (const ramen of data) {
            console.log(ramen)

            const image = document.createElement("img")
            image.src = ramen.image
            ramenMenu.append(image)
            image.addEventListener("click", function() {
                console.log("I have been clicked!")

                bigImage.src = ramen.image

                name.textContent = ramen.name
                resturant.textContent = ramen.restaurant
                
                rating.textContent = ramen.rating
                comment.textContent = ramen.comment


                form.addEventListener("submit", function(event) {
                    event.preventDefault();
                
                    console.log("the form has been clicked!")
                    
                    const formImage = document.createElement("img")
                    formImage.src = newImageInput.value
                    ramenMenu.append(formImage)

                    formImage.addEventListener("click", function() {
                        console.log("New image has been clicked!")

                        bigImage.src = newImageInput.value

                        name.textContent = newNameInput.value
                        resturant.textContent = newResturantInput.value
                        
                        rating.textContent = newRatingInput.value
                        comment.textContent = newCommentInput.value
                    })
                
                })
            })
        }
    })
}
fetchRamen();






