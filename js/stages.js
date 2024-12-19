// Stages functionality
class StageManager {
    constructor() {
        this.stages = {
            mainStage: document.getElementById('mainStage'),
            workshopStage: document.getElementById('workshopStage')
        };
        this.initializeStages();
    }

    initializeStages() {
        // Example YouTube embed
        this.embedYouTube('mainStage', 'DEMO_VIDEO_ID');
        
        // Example 100ms integration
        this.initialize100ms('workshopStage');
    }

    embedYouTube(stageId, videoId) {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        
        this.stages[stageId].appendChild(iframe);
    }

    initialize100ms(stageId) {
        // Placeholder for 100ms integration
        const placeholder = document.createElement('div');
        placeholder.textContent = 'Live Stream Coming Soon';
        placeholder.style.cssText = `
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #000;
            color: #fff;
        `;
        
        this.stages[stageId].appendChild(placeholder);
    }

    switchStage(stageId, streamType, streamId) {
        // Clear current stage content
        this.stages[stageId].innerHTML = '';
        
        if (streamType === 'youtube') {
            this.embedYouTube(stageId, streamId);
        } else if (streamType === 'live') {
            this.initialize100ms(stageId);
        }
    }
}

// Initialize stages when document is ready
document.addEventListener('DOMContentLoaded', () => {
    const stageManager = new StageManager();
    
    // Example of switching stages
    document.querySelectorAll('.stage-controls button').forEach(button => {
        button.addEventListener('click', function() {
            const stageId = this.closest('.stage-card').querySelector('.video-container').id;
            if (this.textContent === 'Join Stream') {
                stageManager.switchStage(stageId, 'live');
            }
        });
    });
});
