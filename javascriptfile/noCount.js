// Select all elements with class "counter"
const counters = document.querySelectorAll(".counter");

// Loop through each counter
counters.forEach((counter) => {
  // Get the target value from the data-target attribute and convert it to a number
  const target = +counter.getAttribute("data-target");
  let count = 0; // Initialize the count to 0

  // Define a function to update the count
  const updateCount = () => {
    // Calculate the increment value based on the target value
    const increment = target / 100; // Divide the target by 100 to distribute the animation evenly

    // Increment the count by the calculated increment value, ensuring it doesn't exceed the target
    count = count + increment > target ? target : count + increment;

    // Set the inner text of the counter to the current count (rounded up to the nearest integer)
    counter.innerText = Math.ceil(count);

    // If the current count is less than the target, call the updateCount function again after a short delay
    if (count < target) {
      setTimeout(updateCount, 20); // Short delay to give the appearance of animation
    }
  };

  updateCount();
});
