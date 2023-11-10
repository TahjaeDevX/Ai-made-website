// JavaScript code goes here
// You can add interactivity or functionality to your website using JavaScript

// Example: Display a message when a button is clicked
const button = document.querySelector('#myButton');
button.addEventListener('click', function() {
  alert('Button clicked!');
});

// Example: Change the text color of a paragraph when hovered over
const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', function() {
  paragraph.style.color = 'red';
});
paragraph.addEventListener('mouseout', function() {
  paragraph.style.color = 'black';
});
