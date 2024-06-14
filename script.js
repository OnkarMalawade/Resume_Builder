document.getElementById('generateResumeButton').addEventListener('click', generateResume);
document.getElementById('downloadPdfButton').addEventListener('click', downloadPDF);

function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    const resumeContent = `
        <div class="pdf-content">
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

    const resumeDiv = document.getElementById('resume');
    resumeDiv.innerHTML = resumeContent;

    document.getElementById('downloadPdfButton').classList.remove('hidden');
}

function downloadPDF() {
    const element = document.getElementById('resume');

    const opt = {
        margin: [20, 20, 20, 20], // Top, Right, Bottom, Left margins
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }

    };

    html2pdf()
        .from(element)
        .set(opt)
        .save();
}
