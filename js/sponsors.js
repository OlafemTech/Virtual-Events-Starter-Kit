// Sponsors functionality
class SponsorManager {
    constructor() {
        this.sponsorsGrid = document.querySelector('.sponsors-grid');
        this.sponsors = [
            {
                name: 'TechCorp',
                level: 'platinum',
                logo: 'path/to/techcorp-logo.png',
                description: 'Leading technology solutions provider',
                website: 'https://example.com'
            },
            // Add more sponsor data as needed
        ];
        this.initializeSponsors();
    }

    createSponsorCard(sponsor) {
        const card = document.createElement('div');
        card.className = `sponsor-card ${sponsor.level}`;
        card.innerHTML = `
            <div class="sponsor-logo">
                <img src="${sponsor.logo}" alt="${sponsor.name} Logo">
            </div>
            <h3>${sponsor.name}</h3>
            <p>${sponsor.description}</p>
            <div class="sponsor-actions">
                <a href="${sponsor.website}" target="_blank" class="btn-secondary">Visit Website</a>
                <button class="btn-secondary chat-btn">Chat with Rep</button>
            </div>
        `;
        return card;
    }

    initializeSponsors() {
        this.sponsors.forEach(sponsor => {
            const card = this.createSponsorCard(sponsor);
            this.sponsorsGrid.appendChild(card);
        });

        // Initialize chat functionality
        this.initializeChat();
    }

    initializeChat() {
        document.querySelectorAll('.chat-btn').forEach(button => {
            button.addEventListener('click', () => {
                // Implement chat functionality
                console.log('Chat initiated with sponsor');
            });
        });
    }

    // Method to add new sponsors dynamically
    addSponsor(sponsorData) {
        this.sponsors.push(sponsorData);
        const card = this.createSponsorCard(sponsorData);
        this.sponsorsGrid.appendChild(card);
    }
}

// Initialize sponsors when document is ready
document.addEventListener('DOMContentLoaded', () => {
    const sponsorManager = new SponsorManager();
});
