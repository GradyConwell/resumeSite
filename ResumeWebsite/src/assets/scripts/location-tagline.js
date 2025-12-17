// Location-based tagline feature
// Displays specific taglines based on user's zipcode

// Found 109 unique zipcodes across 37 cities

// Configuration object mapping zipcodes to specific taglines
// Generated from 109 zipcodes across 37 cities
const locationTaglines = {
    // I know how goofy this is. And maybe a little pathetic.
    // But, it's exactly the wacky nonsense that I'm known for. So, here we are.
    // See, it's seems so dumb, but like, what if it works? Then what?

    // Acalanes Ridge
    "94597": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Alameda
    "94501": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94502": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Alamo
    "94507": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Albany
    "94706": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94707": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Ashland
    "94546": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94580": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Berkeley
    "94702": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94703": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94709": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Burlingame
    "94402": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Castro Valley
    "94552": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94578": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Cherryland
    "94541": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Clayton
    "94517": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Concord
    "94518": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94519": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94520": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94521": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Daly City
    "94014": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Danville
    "94506": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94526": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Diablo
    "94528": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Dublin
    "94568": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // East Richmond Heights
    "94805": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // El Cerrito
    "94530": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Foster City
    "94404": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Hayward
    "94542": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94544": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94545": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94586": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94588": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Hercules
    "94547": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94553": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Lafayette
    "94549": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Livermore
    "94551": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Millbrae
    "94030": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Moraga
    "94556": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94575": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Norris Canyon
    "94583": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Oakland
    "94601": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94602": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94603": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94605": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94606": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94607": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94608": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94609": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94610": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94611": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94612": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94613": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94618": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94621": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94704": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94708": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94710": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94720": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Pacifica
    "94010": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94044": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Pinole
    "94564": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Pleasant Hill
    "94523": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Richmond
    "94563": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94801": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94803": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94804": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94806": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // San Bruno
    "94066": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // San Francisco
    "94005": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94015": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94102": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94103": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94104": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94105": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94107": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94108": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94109": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94110": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94111": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94112": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94114": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94115": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94116": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94117": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94118": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94121": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94122": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94123": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94124": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94127": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94129": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94130": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94131": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94132": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94133": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94134": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94158": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94188": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // San Leandro
    "94577": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94579": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // San Mateo
    "94401": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94403": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // San Ramon
    "94582": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // South San Francisco
    "94080": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94128": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Walnut Creek
    "94595": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94596": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "94598": "Professional Email Sender. I've probably sent you an email, or two. You should check.",

    // Chico
    "95926": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "95928": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
    "95973": "Professional Email Sender. I've probably sent you an email, or two. You should check.",
};

// Default taglines if location is not in the list or can't be determined
const defaultTaglines = [
    "Look ma! He's got a website.",
    "Mechanical and Mechatronic Engineering Student",
    "Pretend Machinist",
    "The pigeons on the street are free. You can just grab em.",
    "Please send me your Chai recommendations.",
    "Selling stationary to strangers on the internent since 2023.",
    "I promise, I don't bite.",
    "Humanoid Robotics Skeptist.",
    "I sometimes update the website.",
];

// Function to get user's location using IP geolocation API
async function getUserLocation() {
    // Try multiple geolocation services in order
    const services = [
        {
            url: 'https://ipapi.co/json/',
            parseZip: (data) => data.postal || data.zip_code
        },
        {
            url: 'http://ip-api.com/json/',
            parseZip: (data) => data.zip
        }
    ];
    
    for (const service of services) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout
            
            const response = await fetch(service.url, { 
                signal: controller.signal,
                mode: 'cors'
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                continue; // Try next service
            }
            
            const data = await response.json();
            const zip = service.parseZip(data);
            
            if (zip) {
                return zip;
            }
        } catch (error) {
            console.log(`Location service failed:`, error.message);
            // Continue to next service
        }
    }
    
    return null; // All services failed
}

// Function to select tagline based on zipcode
function getTaglineForZipcode(zipcode) {
    if (zipcode && locationTaglines[zipcode]) {
        return locationTaglines[zipcode];
    }
    // Return random default tagline if no match
    return defaultTaglines[Math.floor(Math.random() * defaultTaglines.length)];
}

// Main function to set the tagline
async function setLocationBasedTagline() {
    const taglineElement = document.querySelector('.overlapping-title-card p');
    
    if (!taglineElement) {
        console.error('Tagline element not found');
        return;
    }
    
    // Show a default tagline immediately while we fetch location
    taglineElement.textContent = defaultTaglines[Math.floor(Math.random() * defaultTaglines.length)];
    
    // Fetch user location and update tagline if specific location found
    const zipcode = await getUserLocation();
    
    if (zipcode) {
        console.log('User zipcode detected:', zipcode);
        const tagline = getTaglineForZipcode(zipcode);
        taglineElement.textContent = tagline;
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setLocationBasedTagline);
} else {
    setLocationBasedTagline();
}
