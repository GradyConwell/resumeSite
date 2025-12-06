document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const photoCards = document.querySelectorAll('.photo-card');

    // Open lightbox
    photoCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling
            lightbox.style.display = 'flex';
            // Small delay to allow display:flex to apply before adding visible class for transition
            setTimeout(() => {
                lightbox.classList.add('visible');
            }, 10);
            lightboxImg.src = card.src;
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close lightbox function
    const closeLightbox = () => {
        lightbox.classList.remove('visible');
        setTimeout(() => {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }, 300); // Match transition duration
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Close on button click
    closeBtn.addEventListener('click', closeLightbox);

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('visible')) {
            closeLightbox();
        }
    });

    // Cluster Navigation
    const categories = document.querySelectorAll('.gallery-category');
    
    categories.forEach(category => {
        const wrapper = category.querySelector('.cluster-wrapper');
        const prevBtn = category.querySelector('.prev-btn');
        const nextBtn = category.querySelector('.next-btn');
        
        if (!wrapper || !prevBtn || !nextBtn) return;
        
        const cards = Array.from(wrapper.querySelectorAll('.photo-card'));
        const totalCards = cards.length;
        
        // Initialize positions
        // We use a virtual index for each card.
        // card[i] has position (i - offset) % total
        let offset = 0;
        
        const updatePositions = (direction) => {
            // Add direction class for CSS transition logic
            category.classList.remove('direction-next', 'direction-prev');
            wrapper.classList.add('animating');
            
            // Force reflow to ensure class removal is processed
            void category.offsetWidth;
            
            if (direction) {
                category.classList.add(`direction-${direction}`);
            }
            
            cards.forEach((card, index) => {
                // Calculate position index (0 to total-1)
                // We want the visual order to rotate.
                // If offset increases (Next), card 0 goes to pos 4 (back), card 1 goes to pos 0 (front).
                // So pos = (index - offset) % total.
                // JS modulo of negative numbers is negative, so we fix that.
                let posIndex = (index - offset) % totalCards;
                if (posIndex < 0) posIndex += totalCards;
                
                // Remove all pos classes
                card.classList.remove('pos-0', 'pos-1', 'pos-2', 'pos-3', 'pos-4', 'pos-hidden');
                
                // Add new pos class
                if (posIndex < 5) {
                    card.classList.add(`pos-${posIndex}`);
                } else {
                    card.classList.add('pos-hidden');
                }
            });
            
            // Remove animating class after transition
            setTimeout(() => {
                wrapper.classList.remove('animating');
                category.classList.remove('direction-next', 'direction-prev');
            }, 800); // Match CSS transition duration
        };
        
        // Initial setup
        updatePositions();
        
        nextBtn.addEventListener('click', () => {
            offset++; // Move forward: Card 0 (Front) becomes Card 4 (Back)
            updatePositions('next');
        });
        
        prevBtn.addEventListener('click', () => {
            offset--; // Move backward: Card 4 (Back) becomes Card 0 (Front)
            updatePositions('prev');
        });
    });
});
