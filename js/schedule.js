// Schedule functionality
class ScheduleManager {
    constructor() {
        this.scheduleTimeline = document.querySelector('.schedule-timeline');
        this.sessions = [
            {
                title: 'Opening Keynote',
                speaker: 'John Doe',
                time: '9:00 AM',
                date: '2024-12-20',
                stage: 'Main Stage',
                description: 'Welcome to our virtual event!',
                day: 'day1'
            },
            // Add more sessions as needed
        ];
        this.initializeSchedule();
    }

    createSessionCard(session) {
        const card = document.createElement('div');
        card.className = `session-card ${session.day}`;
        card.innerHTML = `
            <div class="session-time">${session.time}</div>
            <div class="session-content">
                <h3>${session.title}</h3>
                <div class="session-speaker">
                    <i class="fas fa-user"></i> ${session.speaker}
                </div>
                <div class="session-stage">
                    <i class="fas fa-video"></i> ${session.stage}
                </div>
                <p>${session.description}</p>
                <button class="btn-secondary add-calendar-btn">
                    <i class="fas fa-calendar-plus"></i> Add to Calendar
                </button>
            </div>
        `;
        return card;
    }

    initializeSchedule() {
        this.renderSessions('all');
        this.initializeFilters();
    }

    renderSessions(filter) {
        this.scheduleTimeline.innerHTML = '';
        this.sessions
            .filter(session => filter === 'all' || session.day === filter)
            .forEach(session => {
                const card = this.createSessionCard(session);
                this.scheduleTimeline.appendChild(card);
            });
    }

    initializeFilters() {
        const filterButtons = document.querySelectorAll('.btn-filter');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                e.target.classList.add('active');
                // Filter sessions
                this.renderSessions(e.target.dataset.day);
            });
        });

        // Initialize calendar functionality
        this.initializeCalendar();
    }

    initializeCalendar() {
        document.querySelectorAll('.add-calendar-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const sessionCard = e.target.closest('.session-card');
                const title = sessionCard.querySelector('h3').textContent;
                const speaker = sessionCard.querySelector('.session-speaker').textContent;
                this.addToCalendar({
                    title,
                    speaker,
                    // Add other relevant session details
                });
            });
        });
    }

    addToCalendar(sessionDetails) {
        // Implement calendar integration
        console.log(`Adding to calendar: ${sessionDetails.title}`);
        // Here you would typically integrate with calendar APIs
    }

    // Method to add new sessions dynamically
    addSession(sessionData) {
        this.sessions.push(sessionData);
        if (document.querySelector('.btn-filter.active').dataset.day === 'all' ||
            document.querySelector('.btn-filter.active').dataset.day === sessionData.day) {
            const card = this.createSessionCard(sessionData);
            this.scheduleTimeline.appendChild(card);
        }
    }
}

// Initialize schedule when document is ready
document.addEventListener('DOMContentLoaded', () => {
    const scheduleManager = new ScheduleManager();
});
