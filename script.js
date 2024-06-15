// script.js

// Resume data
let resumeData = {
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    skills: ''
};

// Template selection
let currentTemplate = 'template1';

// Generate Resume function
function generateResume() {
    const { name, email, phone, address, education, experience, skills } = resumeData;

    let resumeHTML = `
        <div class="resume-template ${currentTemplate}">
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Address: ${address}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
    `;

    document.getElementById('resume').innerHTML = resumeHTML;
}

// Update resume data based on form inputs
function updateResumeData() {
    resumeData.name = document.getElementById('name').value;
    resumeData.email = document.getElementById('email').value;
    resumeData.phone = document.getElementById('phone').value;
    resumeData.address = document.getElementById('address').value;
    resumeData.education = document.getElementById('education').value;
    resumeData.experience = document.getElementById('experience').value;
    resumeData.skills = document.getElementById('skills').value;
}

// Initialize resume generation on page load
document.addEventListener('DOMContentLoaded', function() {
    generateResume();
});

// Handle form submission
document.getElementById('generateResumeButton').addEventListener('click', function() {
    updateResumeData();
    generateResume();
});

// Handle template selection
document.querySelectorAll('.template-button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'active' class from all template buttons
        document.querySelectorAll('.template-button').forEach(btn => {
            btn.classList.remove('active');
        });

        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Update current template
        currentTemplate = button.getAttribute('data-template');

        // Regenerate the resume with the new template
        generateResume();
    });
});

// Reset form
document.getElementById('resetFormButton').addEventListener('click', function() {
    document.getElementById('resumeForm').reset();
    resumeData = {
        name: '',
        email: '',
        phone: '',
        address: '',
        education: '',
        experience: '',
        skills: ''
    };
    generateResume();
});

// Download PDF
document.getElementById('downloadPdfButton').addEventListener('click', function() {
    const element = document.getElementById('resume');
    html2pdf()
        .from(element)
        .set({ margin: 1, filename: 'resume.pdf', image: { type: 'jpeg', quality: 0.98 } })
        .save();
});
