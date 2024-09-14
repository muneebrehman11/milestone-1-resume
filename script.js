// Get the button and the skills section
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Function to toggle the visibility of the skills section
function toggleSkillsVisibility() {
    console.log("Button clicked!"); // Debugging line
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
}
// Add event listener to the button
toggleButton.addEventListener('click', toggleSkillsVisibility);
