const photocontainer = document.querySelector(".carousel-items");
const photos = document.querySelectorAll('.carousel-items img');
const watch = document.querySelector('.watch');
const background = document.querySelector('body'); // Use body to apply background changes
const title = document.querySelector('.title');
const year = document.querySelector('.year');
const age = document.querySelector('.age');
const duration = document.querySelector('.duration');
const category = document.querySelector('.category');
const paragraphe = document.querySelector('.description p')
const navA = document.querySelectorAll('.option');
const watchLink = document.querySelector('.watchLink');
const trailerLink = document.querySelector('.trailerLink');
const siteName = document.querySelector('.siteName');
const contact = document.querySelectorAll('.social-media');
// Initial setup
let counter = 1; // Start with the second image, assuming index 1 is middle
const size = photos[0].clientWidth;
photocontainer.style.transform = `translateX(${-size * counter}px)`;

// Button references
const nextbtn = document.querySelector('.next-btn');
const prevbtn = document.querySelector('.prv-btn');

// Initialize the transition class
photos[counter].classList.add('transition');

// Function to update details
function updateDetailes(imageSrc) {
    
    if (imageSrc.includes('Movies/the-tank.jpeg')) {
        title.src = 'the-tank-title.png';
        year.innerHTML = '2023';
        age.innerHTML = '+18';
        category.innerHTML = 'Horreur';
        duration.innerHTML = '1h 40min';
        paragraphe.innerHTML = '"The Tank" (2023) is a gripping action-packed thriller that follows a seasoned military <br>operative tasked with retrieving a stolen, state-of-the-art tank. Set against a backdrop<br> of escalating global tensions, the film plunges the operative into a high-stakes battle <br> involving a ruthless faction intent on using the tank for devastating purposes.As he<br> navigates through intense combat sequences and intricate plots, he uncovers <br> a deeper conspiracy threatening world security. Combining breathtaking action<br> scenes, advanced military technology, and a suspenseful storyline, "The Tank"<br> delivers an adrenaline-fueled cinematic experience that keeps viewers on <br>the edge of their seats.';
        age.classList.remove('green', 'orange', 'red', 'age');
        age.classList.add('red');
        watch.classList.remove('green', 'orange', 'red');
        watch.classList.add('red');
        siteName.addEventListener('mouseover', ()=>{
            siteName.classList.remove('greenHover', 'orangeHover', 'redHover');
            siteName.classList.add('redHover');
            
            })
            siteName.addEventListener('mouseout' , ()=>{
                siteName.classList.remove('redHover');
            })    
            navA.forEach(anchor => {
                anchor.addEventListener('mouseover', () => {
                    // Remove all hover effect classes
                    anchor.classList.remove('greenNav', 'orangeNav', 'redNav');
                    
                    // Add the desired hover effect class
                    anchor.classList.add('redNav');
                });
                
                anchor.addEventListener('mouseout', () => {
                    // Remove the hover effect class to return to the default state
                    anchor.classList.remove('redNav');
                    // Optionally add a default class if needed
                    // anchor.classList.add('defaultNav'); // Uncomment if you have a default state class
                });
            });
            contact.forEach(icon => {
                icon.addEventListener('mouseover', () => {
                    // Remove all hover effect classes
                    icon.classList.remove('social-media-orange', 'social-media-red', 'social-media-green');
                    
                    // Add the desired hover effect class
                    icon.classList.add('social-media-red');
                });
                
                icon.addEventListener('mouseout', () => {
                    // Remove the hover effect class to return to the default state
                    icon.classList.remove('social-media-red');
                    // Optionally add a default class if needed
                    // anchor.classList.add('defaultNav'); // Uncomment if you have a default state class
                });
            });
        watchLink.href = '';
        watchLink.href = 'https://www.strem.io/s/movie/the-tank-1468741';
        trailerLink.href = '';
        trailerLink.href = 'https://www.imdb.com/video/vi2352858137/?playlistId=tt14687418&ref_=tt_ov_vi';
        return;
    } else if (imageSrc.includes('Movies/65.jpg')) {
        title.src = 'the-65-title.png';
        year.innerHTML = '2023';
        age.innerHTML = '+16';
        category.innerHTML = 'Action';
        duration.innerHTML = '1h 33min';
        paragraphe.innerHTML = '"65" (2023) is a gripping science fiction thriller that follows a pilot stranded on an Earth-like planet,<br>65 million years in the past. As he battles prehistoric creatures and navigates the harsh environment,<br>he discovers that he is not alone and must uncover a hidden conspiracy. With high-stakes action and<br> intense survival drama, the film combines stunning visuals with a suspenseful narrative. The pilot quest<br>for survival is marked by fierce battles and thrilling encounters, exploring themes of resilience and <br>adaptation. "65" delivers a pulse-pounding cinematic experience that keeps audiences on the edge of their seats.';
        age.classList.remove('green', 'orange', 'red', 'age');
        age.classList.add('orange');
        watch.classList.remove('green', 'orange', 'red');
        watch.classList.add('orange');
        watch.classList.remove('green', 'orange', 'red');
        siteName.addEventListener('mouseover', ()=>{
            siteName.classList.remove('greenHover', 'orangeHover', 'redHover');
            siteName.classList.add('orangeHover');
            
        });
        siteName.addEventListener('mouseout' , ()=>{
            siteName.classList.remove('orangeHover');
        });     
        navA.forEach(anchor => {
            anchor.addEventListener('mouseover', () => {
                // Remove all hover effect classes
                anchor.classList.remove('greenNav', 'orangeNav', 'redNav');
                
                // Add the desired hover effect class
                anchor.classList.add('orangeNav');
            });
            
            anchor.addEventListener('mouseout', () => {
                // Remove the hover effect class to return to the default state
                anchor.classList.remove('orangeNav');
                // Optionally add a default class if needed
                // anchor.classList.add('defaultNav'); // Uncomment if you have a default state class
            });
        });
        contact.forEach(icon => {
            icon.addEventListener('mouseover', () => {
                // Remove all hover effect classes
                icon.classList.remove('social-media-orange', 'social-media-red', 'social-media-green');
                
                // Add the desired hover effect class
                icon.classList.add('social-media-orange');
            });
            
            icon.addEventListener('mouseout', () => {
                // Remove the hover effect class to return to the default state
                icon.classList.remove('social-media-orange');
                // Optionally add a default class if needed
                // anchor.classList.add('defaultNav'); // Uncomment if you have a default state class
            });
        });
        watchLink.href = '';
        watchLink.href = 'https://www.strem.io/s/movie/65-12261776';
        trailerLink.href = '';
        trailerLink.href = 'https://www.imdb.com/video/vi2956444953/?playlistId=tt12261776&ref_=tt_ov_vi';

        return;
    } else if (imageSrc.includes('Movies/the-black-demon.jpg')) {
        title.src = 'the-black-demon-title.png';
        year.innerHTML = '2023';
        age.innerHTML = '+16';
        paragraphe.innerHTML = 'The Black Demon is described as a huge, dark-skinned shark, much larger than a typical Great White, reportedly reaching lengths of 20 to 60 feet. Its skin is nearly black, giving it a menacing appearance, and it is said to have a massive tail and powerful jaws filled with sharp teeth. Often rumored to lurk in the waters off Baja California, this mythical sea creature is feared for its size and strength, capable of creating large waves and striking terror in those who claim to have seen it.';
        category.innerHTML = 'Horreur';
        duration.innerHTML = '1h 40min';
        age.classList.remove('green', 'orange', 'red', 'age');
        age.classList.add('orange');
        watch.classList.remove('green', 'orange', 'red');
        watch.classList.add('orange');
        siteName.addEventListener('mouseover', ()=>{
        siteName.classList.remove('greenHover', 'orangeHover', 'redHover');
        siteName.classList.add('orangeHover');
       })
       siteName.addEventListener('mouseout' , ()=>{
        siteName.classList.remove('orangeHover');
       })    
       navA.forEach(anchor => {
        anchor.addEventListener('mouseover', () => {
            // Remove all hover effect classes
            anchor.classList.remove('greenNav', 'orangeNav', 'redNav');
            
            // Add the desired hover effect class
            anchor.classList.add('orangeNav');
        });
        
        anchor.addEventListener('mouseout', () => {
            // Remove the hover effect class to return to the default state
            anchor.classList.remove('orangeNav');
            // Optionally add a default class if needed
            // anchor.classList.add('defaultNav'); // Uncomment if you have a default state class
        });
    });
    contact.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            // Remove all hover effect classes
            icon.classList.remove('social-media-orange', 'social-media-red', 'social-media-green');
            
            // Add the desired hover effect class
            icon.classList.add('social-media-orange');
        });
        
        icon.addEventListener('mouseout', () => {
            // Remove the hover effect class to return to the default state
            icon.classList.remove('social-media-orange');
            // Optionally add a default class if needed
            // anchor.classList.add('defaultNav'); // Uncomment if you have a default state class
        });
    });
        
        watchLink.href = '';
        watchLink.href = 'https://www.strem.io/s/movie/the-black-demon-1027947';
        trailerLink.href = '';
        trailerLink.href = 'https://www.imdb.com/video/vi1846658073/?playlistId=tt10279472&ref_=tt_pr_ov_vi';
        return;
    } else if (imageSrc.includes('Movies/the-covenant.jpg')) {
        title.src = 'the-covenant-title.png';
        year.innerHTML = '2023';
        age.innerHTML = '+18';
        paragraphe.innerHTML = 'The Covenant is an alliance of alien species in the "Halo" universe, united by a shared religious belief in the "Great Journey." It includes powerful races like the Elites, Brutes, and Prophets, each with distinct roles, from warriors to leaders. The Covenant is known for its advanced technology, formidable military forces, and a fanatical devotion to their cause, leading to a fierce conflict with humanity in their quest to activate the Halo rings.';
        category.innerHTML = 'Action';
        duration.innerHTML = '2h 03min';
        age.classList.remove('green', 'orange', 'red', 'age');
        age.classList.add('red');
        watch.classList.remove('green', 'orange', 'red');
        watch.classList.add('red');
        siteName.addEventListener('mouseover', ()=>{
            siteName.classList.remove('greenHover', 'orangeHover', 'redHover');
            siteName.classList.add('redHover');
            
            })
            siteName.addEventListener('mouseout' , ()=>{
                siteName.classList.remove('redHover');
            })    
 // Select all anchor elements with the class 'option'


// Loop through each anchor element
navA.forEach(anchor => {
    anchor.addEventListener('mouseover', () => {
        // Remove all hover effect classes
        anchor.classList.remove('greenNav', 'orangeNav', 'redNav');
        
        // Add the desired hover effect class
        anchor.classList.add('redNav');
    });
    
    anchor.addEventListener('mouseout', () => {
        // Remove the hover effect class to return to the default state
        anchor.classList.remove('redNav');
        // Optionally add a default class if needed
        // anchor.classList.add('defaultNav'); // Uncomment if you have a default state class
    });
});
contact.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        // Remove all hover effect classes
        icon.classList.remove('social-media-orange', 'social-media-red', 'social-media-green');
        
        // Add the desired hover effect class
        icon.classList.add('social-media-red');
    });
    
    icon.addEventListener('mouseout', () => {
        // Remove the hover effect class to return to the default state
        icon.classList.remove('social-media-red');
        // Optionally add a default class if needed
        // anchor.classList.add('defaultNav'); // Uncomment if you have a default state class
    });
});

        watchLink.href = '';
        watchLink.href = 'https://www.strem.io/s/movie/guy-ritchies-the-covenant-487311';
        trailerLink.href = '';
        trailerLink.href = 'https://www.imdb.com/video/vi1880737049/?playlistId=tt4873118&ref_=tt_ov_vi';
        return;
    } else if (imageSrc.includes('Movies/the-little-mermaid.jpeg')) {
        title.src = 'the-little-mermaid-title.png';
        year.innerHTML = '2023';
        age.innerHTML = '+5';
        category.innerHTML = 'Fantastique';
        duration.innerHTML = '2h 15min';
        paragraphe.innerHTML = 'The Little Mermaid is a beloved fairy tale by Hans Christian Andersen about a young mermaid who dreams of living on land. She is captivated by the human world and falls in love with a human prince after saving him from drowning. To be with him, she makes a deal with a sea witch, trading her voice for legs. However, the transformation comes with great sacrifice and risks, as she must win the prince’s love or face dire consequences. The story is known for its themes of love, sacrifice, and longing, often portrayed in both tragic and hopeful adaptations, such as Disney’s animated and live-action versions.';
        age.classList.remove('green', 'orange', 'red', 'age');
        age.classList.add('green');
        watch.classList.remove('green', 'orange', 'red');
        watch.classList.add('green');
        siteName.addEventListener('mouseover', ()=>{
            siteName.classList.remove('greenHover', 'orangeHover', 'redHover');
            siteName.classList.add('greenHover');
            })
            siteName.addEventListener('mouseout' , ()=>{
                siteName.classList.remove('greenHover');
            })    
            navA.forEach(anchor => {
                anchor.addEventListener('mouseover', () => {
                    // Remove all hover effect classes
                    anchor.classList.remove('greenNav', 'orangeNav', 'redNav');
                    
                    // Add the desired hover effect class
                    anchor.classList.add('greenNav');
                });
                
                anchor.addEventListener('mouseout', () => {
                    // Remove the hover effect class to return to the default state
                    anchor.classList.remove('greenNav');
                    // Optionally add a default class if needed
                    // anchor.classList.add('defaultNav'); // Uncomment if you have a default state class
                });
            });
            contact.forEach(icon => {
                icon.addEventListener('mouseover', () => {
                    // Remove all hover effect classes
                    icon.classList.remove('social-media-orange', 'social-media-red', 'social-media-green');
                    
                    // Add the desired hover effect class
                    icon.classList.add('social-media-green');
                });
                
                icon.addEventListener('mouseout', () => {
                    // Remove the hover effect class to return to the default state
                    icon.classList.remove('social-media-green');
                    // Optionally add a default class if needed
                    // anchor.classList.add('defaultNav'); // Uncomment if you have a default state class
                });
            });
        watchLink.href = '';
        watchLink.href = 'https://www.strem.io/s/movie/the-little-mermaid-597147';
        trailerLink.href = '';
        trailerLink.href = 'https://www.imdb.com/video/vi1211810841/?playlistId=tt5971474&ref_=tt_pr_ov_vi';
        return;
    }
}

// Function to update background based on current image
function updateBackground(imageSrc) {
    // Remove all background classes
    background.classList.remove('tank', 'sixty-five', 'black-demon', 'covenant', 'little-mermaid');
    
    // Add class based on current image
    if (imageSrc.includes('Movies/the-tank.jpeg')) {
        background.classList.add('tank');
        return;
    } else if (imageSrc.includes('Movies/65.jpg')) {
        background.classList.add('sixty-five');
        return;
    } else if (imageSrc.includes('Movies/the-black-demon.jpg')) {
        background.classList.add('black-demon');
        return;
    } else if (imageSrc.includes('Movies/the-covenant.jpg')) {
        background.classList.add('covenant');
        return;
    } else if (imageSrc.includes('Movies/the-little-mermaid.jpeg')) {
        background.classList.add('little-mermaid');
        return;
    }
}


navA.forEach(anchor => {
    anchor.addEventListener('mouseover', () => {
        // Remove all hover effect classes
        anchor.classList.remove('greenNav', 'orangeNav', 'redNav');
        
        // Add the desired hover effect class
        anchor.classList.add('orangeNav');
    });
    
    anchor.addEventListener('mouseout', () => {
        // Remove the hover effect class to return to the default state
        anchor.classList.remove('orangeNav');
        // Optionally add a default class if needed
        // anchor.classList.add('defaultNav'); // Uncomment if you have a default state class
    });
});

siteName.addEventListener('mouseover', ()=>{
    siteName.classList.remove('greenHover', 'orangeHover', 'redHover');
    siteName.classList.add('orangeHover');
    })
    siteName.addEventListener('mouseout' , ()=>{
        siteName.classList.remove('orangeHover');
    })    

    contact.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            // Remove all hover effect classes
            icon.classList.remove('social-media-orange', 'social-media-red', 'social-media-green');
            
            // Add the desired hover effect class
            icon.classList.add('social-media-orange');
        });
        
        icon.addEventListener('mouseout', () => {
            // Remove the hover effect class to return to the default state
            icon.classList.remove('social-media-orange');
            // Optionally add a default class if needed
            // anchor.classList.add('defaultNav'); // Uncomment if you have a default state class
        });
    });
// Next button functionality
nextbtn.addEventListener('click', function() {
    if (counter >= photos.length - 1) return; // Ensure we don't go out of bounds
    photocontainer.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    photocontainer.style.transform = `translateX(${-size * counter}px)`;
    
    // Manage transition class
    photos.forEach(photo => photo.classList.remove('transition'));
    photos[counter].classList.add('transition');
    
    // Update background
    updateBackground(photos[counter].src);
    updateDetailes(photos[counter].src);
});

// Previous button functionality
prevbtn.addEventListener('click', function() {
    if (counter <= 0) return; // Ensure we don't go out of bounds
    photocontainer.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    photocontainer.style.transform = `translateX(${-size * counter}px)`;
    
    // Manage transition class
    photos.forEach(photo => photo.classList.remove('transition'));
    photos[counter].classList.add('transition');
    
    // Update background
    updateBackground(photos[counter].src);
    updateDetailes(photos[counter].src);
});

// Transition end event for looping the carousel
photocontainer.addEventListener('transitionend', function() {
    // Loop to the first slide (skip the clone)
    if (counter >= photos.length - 1) {
        photocontainer.style.transition = 'none';
        counter = 1; // Reset to the first image in the visible set
        photocontainer.style.transform = `translateX(${-size * counter}px)`;
        photos[counter].classList.add('transition');
    }

    // Loop to the last slide (skip the clone)
    if (counter <= 0) {
        photocontainer.style.transition = 'none';
        counter = photos.length - 2; // Set to the last image in the visible set
        photocontainer.style.transform = `translateX(${-size * counter}px)`;
        photos[counter].classList.add('transition');
    }
});
