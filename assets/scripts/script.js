const myGitHubAccount = document.getElementById('my-github-account').innerHTML.split('@')[0];

function onHamburgerClick(event) {
    event.classList.toggle("change");
}

function rotateTriangle(element, isDropdownVisible) {
    if (element === document.querySelector('.triangle-box')) {
        const angle = "-45deg";
        const triangle = element.querySelector(".toptriangle");
        triangle.style.transform = `rotate(${isDropdownVisible ? angle : "135deg"})`;
    } else {
        const angle = "-45deg";
        const triangle = element.querySelector(".triangle");
        triangle.style.transform = `rotate(${isDropdownVisible ? angle : "45deg"})`;
    }
}
async function fetchReadme(owner, repo, innerElement) {
    const url = `https://api.github.com/repos/${owner}/${repo}/readme`;

    try {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching README: ${response.statusText}`);
        }

        const data = await response.json();
        const markdownContent = atob(data.content); // Decode Base64

        // Convert Markdown to HTML using Marked.js
        const htmlContent = marked.parse(markdownContent);

        // Insert the HTML into the target element
        innerElement.innerHTML = htmlContent;
    } catch (error) {
        console.error('Failed to fetch README:', error);
    }
}

function toggleTopDropdown(element) {
    const dropdownContent = element.querySelector('.dropdown-menu-content');
    const triangleBox = element.querySelector('.triangle-box');
    dropdownContent.classList.toggle('show');

    const isDropdownVisible = dropdownContent.classList.contains('show');

    const switchContainer = document.querySelector('.switch');

    rotateTriangle(triangleBox, isDropdownVisible); // Rotate triangle icon if dropdown is shown or hidden

    if (isDropdownVisible) {
        triangleBox.style.position = 'absolute';
        triangleBox.style.bottom = '0';
        triangleBox.style.paddingBottom = '0';
        dropdownContent.style.opacity = 1; // Set opacity to 1 to show dropdown content
        dropdownContent.style.visibility = 'visible'; // Set visibility to visible to show dropdown content
        element.style.height = dropdownContent.offsetHeight + 100 + 'px';
    } else {
        switchContainer.style.paddingBottom = '0';
        dropdownContent.style.opacity = 0; // Set opacity to 0 to hide dropdown content
        dropdownContent.style.visibility = 'hidden'; // Set visibility to hidden to hide dropdown content
        element.style.height = '40px'; // Reset height if dropdown is hidden
        triangleBox.style.position = 'unset';
        triangleBox.style.bottom = 'unset';
        triangleBox.style.paddingBottom = '30px'; // Reset padding if dropdown is hidden
    }
}

function toggleDropdown(element) {
    const dropdownContent = element.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');

    const repository = element.id;

    const textFlexContainer = document.querySelector('.flex-container-text');

    // Temporarily set the dropdown to block to measure height
    const isDropdownVisible = dropdownContent.classList.contains('show');

    rotateTriangle(element, isDropdownVisible); // Rotate triangle icon if dropdown is shown or hidden

    if (isDropdownVisible) {
        fetchReadme(myGitHubAccount, repository, dropdownContent.querySelector('.markdown-body'));
        dropdownContent.style.opacity = 1; // Set opacity to 1 to show dropdown content
        dropdownContent.style.visibility = 'visible'; // Set visibility to visible to show dropdown content
        const dropdownHeight = dropdownContent.clientHeight + 100; // Now, offsetHeight will be accurate
        textFlexContainer.style.paddingBottom = `${dropdownHeight}px`; // Set padding-bottom equal to dropdown height
        dropdownContent.style.width = element.style.width; // Set width equal to parent element width
    } else {
        textFlexContainer.style.paddingBottom = '20px'; // Reset padding if dropdown is hidden
        dropdownContent.style.opacity = 0; // Set opacity to 0 to hide dropdown content
        dropdownContent.style.visibility = 'hidden'; // Set visibility to hidden to hide dropdown content
    }
    try {
        if (myGitHubAccount !== 'jaccet')
            throw new Error('This code should only run on my GitHub account'); {
        }
        if (repository === null || repository === '') {
            throw new Error('repository should not be null or empty');
        }
    } catch (error) {
        console.error('Failed to verify GitHub account or get repository:', error);
    }
}

document.addEventListener("click", function (event) {
    if (!event.target.closest('.project-card')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
});

function sayHello() {
    alert('Hello!');
}