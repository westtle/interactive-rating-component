// HTML.
const componentContainer = document.querySelector(".interactive-rating-component");
const ratingForm = document.querySelector(".rating");

ratingForm.addEventListener("submit", (event) => {
	const ratingValue = document.querySelector(".rating-inputs__item input[name='rating']:checked").value;
	componentContainer.innerHTML = `
	    <div class="thank-you">
	        <div class="thank-you__illustration">
	            <img src="./assets/images/illustration-thank-you.svg" width="162" height="108" alt="Thank you!">
	        </div>
	        <p class="thank-you__selected-rating">You selected ${ratingValue} out of 5</p>
	        <h1 class="thank-you__heading general__heading">Thank you!</h1>
	        <p class="thank-you__paragraph general__paragraph">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
	    </div>
	`;

	event.preventDefault();
});