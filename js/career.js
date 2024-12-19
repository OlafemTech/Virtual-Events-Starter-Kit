// Career Fair functionality
class CareerFairManager {
    constructor() {
        this.careerOpportunities = document.querySelector('.career-opportunities');
        this.jobs = [
            {
                title: 'Senior Software Engineer',
                company: 'TechCorp',
                location: 'Remote',
                type: 'Full-time',
                description: 'Looking for an experienced software engineer...',
                requirements: ['5+ years experience', 'JavaScript', 'React', 'Node.js']
            },
            // Add more job listings as needed
        ];
        this.initializeCareerFair();
    }

    createJobCard(job) {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <h3>${job.title}</h3>
            <div class="job-company">${job.company}</div>
            <div class="job-details">
                <span class="job-location"><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                <span class="job-type"><i class="fas fa-briefcase"></i> ${job.type}</span>
            </div>
            <p class="job-description">${job.description}</p>
            <div class="job-requirements">
                <h4>Requirements:</h4>
                <ul>
                    ${job.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            </div>
            <div class="job-actions">
                <button class="btn-primary apply-btn">Apply Now</button>
                <button class="btn-secondary chat-btn">Chat with Recruiter</button>
            </div>
        `;
        return card;
    }

    initializeCareerFair() {
        this.jobs.forEach(job => {
            const card = this.createJobCard(job);
            this.careerOpportunities.appendChild(card);
        });

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Handle job applications
        document.querySelectorAll('.apply-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const jobCard = e.target.closest('.job-card');
                const jobTitle = jobCard.querySelector('h3').textContent;
                this.handleJobApplication(jobTitle);
            });
        });

        // Handle recruiter chat
        document.querySelectorAll('.chat-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const jobCard = e.target.closest('.job-card');
                const company = jobCard.querySelector('.job-company').textContent;
                this.initializeRecruiterChat(company);
            });
        });
    }

    handleJobApplication(jobTitle) {
        // Implement job application logic
        console.log(`Application submitted for: ${jobTitle}`);
        // Here you would typically open a modal with an application form
    }

    initializeRecruiterChat(company) {
        // Implement chat with recruiter
        console.log(`Chat initiated with recruiter from: ${company}`);
        // Here you would typically initialize a chat widget
    }

    // Method to add new job listings dynamically
    addJob(jobData) {
        this.jobs.push(jobData);
        const card = this.createJobCard(jobData);
        this.careerOpportunities.appendChild(card);
    }
}

// Initialize career fair when document is ready
document.addEventListener('DOMContentLoaded', () => {
    const careerFairManager = new CareerFairManager();
});
