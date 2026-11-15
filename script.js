// MUSEUM EXPLORER - JAVASCRIPT


// 1. LANGUAGE TRANSLATION

function changeLanguage() {

    let lang = document.getElementById("language").value;
    let hindi = lang === "hi";

    function changeText(id, english, hindiText) {
        let element = document.getElementById(id);

        if (element) {
            element.innerText = hindi ? hindiText : english;
        }
    }

    // Home page
    changeText("welcome-title",
        "Explore The World Of History",
        "इतिहास की दुनिया का अन्वेषण करें");

    changeText("welcome-text",
        "Every object has a story. Come and discover yours!",
        "हर वस्तु की एक कहानी है। आइए और जानें!");

    changeText("explore-btn",
        "Explore Exhibits",
        "प्रदर्शनी देखें");

    changeText("exhibit-title",
        "Discover Our Exhibits",
        "हमारी प्रदर्शनियों को जानें");

    // Navigation
    let navEnglish = ["Home", "Exhibits", "About",
        "Visitor Info", "Contact", "Feedback"];

    let navHindi = ["होम", "प्रदर्शनियाँ", "हमारे बारे में",
        "आगंतुक जानकारी", "संपर्क", "प्रतिक्रिया"];

    document.querySelectorAll(".nav-links a").forEach(
        function(link, index) {
            link.innerText = hindi ?
                navHindi[index] : navEnglish[index];
        }
    );

    // Categories
    let categoriesEnglish = [
        "All", "History", "Art", "Science", "Culture"
    ];

    let categoriesHindi = [
        "सभी", "इतिहास", "कला", "विज्ञान", "संस्कृति"
    ];

    document.querySelectorAll(".categories button").forEach(
        function(button, index) {
            button.innerText = hindi ?
                categoriesHindi[index] : categoriesEnglish[index];
        }
    );

    // Exhibit names
    let titlesEnglish = [
        "Ancient History",
        "Art Gallery",
        "Science World",
        "Cultural Heritage"
    ];

    let titlesHindi = [
        "प्राचीन इतिहास",
        "कला दीर्घा",
        "विज्ञान की दुनिया",
        "सांस्कृतिक विरासत"
    ];

    let descriptionsEnglish = [
        "Discover ancient civilizations, historical objects and their stories.",
        "Explore beautiful paintings and creative masterpieces.",
        "Learn about scientific discoveries, experiments and inventions.",
        "Experience traditional art, cultural objects and heritage."
    ];

    let descriptionsHindi = [
        "प्राचीन सभ्यताओं, ऐतिहासिक वस्तुओं और उनकी कहानियों को जानें।",
        "सुंदर चित्रों और कलात्मक उत्कृष्ट कृतियों को देखें।",
        "वैज्ञानिक खोजों, प्रयोगों और आविष्कारों के बारे में जानें।",
        "पारंपरिक कला और सांस्कृतिक विरासत का अनुभव करें।"
    ];

    document.querySelectorAll(".card").forEach(
        function(card, index) {

            card.querySelector("h3").innerText =
                hindi ? titlesHindi[index] : titlesEnglish[index];

            card.querySelector("p").innerText =
                hindi ? descriptionsHindi[index] :
                descriptionsEnglish[index];

            let button = card.querySelector(".favorite");

            button.innerText = button.dataset.added === "yes"
                ? (hindi ? "♥ पसंदीदा में जोड़ा गया" :
                   "♥ Added to Favourites")
                : (hindi ? "♡ पसंदीदा जोड़ें" :
                   "♡ Add Favourite");
        }
    );

    // About section
    changeText("about-title",
        "About Our Platform",
        "हमारे प्लेटफॉर्म के बारे में");

    changeText("about-description",
        "Museum Explorer is a visitor experience platform designed to make museum visits interesting and enjoyable. Visitors can explore exhibits, search collections, discover categories and save their favourite exhibits. Our goal is to make learning through museums easier and fun.",
        "म्यूजियम एक्सप्लोरर एक ऐसा प्लेटफॉर्म है जो संग्रहालय की यात्रा को रोचक और आनंददायक बनाता है। आगंतुक प्रदर्शनियों को देख सकते हैं, संग्रह खोज सकते हैं और अपनी पसंदीदा वस्तुओं को सहेज सकते हैं।");

    // Visitor information
    changeText("visit-title",
        "Plan Your Visit",
        "अपनी यात्रा की योजना बनाएं");

    changeText("visit-description",
        "Everything you need to know before exploring.",
        "यात्रा से पहले आवश्यक सभी जानकारी।");

    // Contact section
    changeText("contact-title",
        "Contact Us",
        "हमसे संपर्क करें");

    changeText("contact-description",
        "We would love to hear from you!",
        "हम आपसे सुनना पसंद करेंगे!");

    // Feedback section
    changeText("feedback-title",
        "Visitor Feedback",
        "आगंतुक प्रतिक्रिया");

    changeText("feedback-description",
        "Your feedback helps us improve!",
        "आपकी प्रतिक्रिया हमें बेहतर बनने में मदद करती है!");

    document.getElementById("visitorName").placeholder =
        hindi ? "अपना नाम लिखें" : "Enter Your Name";

    document.getElementById("visitorEmail").placeholder =
        hindi ? "अपना ईमेल लिखें" : "Enter Your Email";

    document.getElementById("visitorMessage").placeholder =
        hindi ? "अपनी प्रतिक्रिया लिखें" : "Write your feedback...";

    document.querySelector("#rating option[value='']").innerText =
        hindi ? "अपने अनुभव को रेट करें" : "Rate Your Experience";

    document.querySelector("#rating option[value='5']").innerText =
        hindi ? "⭐⭐⭐⭐⭐ उत्कृष्ट" : "⭐⭐⭐⭐⭐ Excellent";

    document.querySelector("#rating option[value='4']").innerText =
        hindi ? "⭐⭐⭐⭐ बहुत अच्छा" : "⭐⭐⭐⭐ Very Good";

    document.querySelector("#rating option[value='3']").innerText =
        hindi ? "⭐⭐⭐ अच्छा" : "⭐⭐⭐ Good";

    document.querySelector("#rating option[value='2']").innerText =
        hindi ? "⭐⭐ ठीक" : "⭐⭐ Fair";

    document.querySelector("#rating option[value='1']").innerText =
        hindi ? "⭐ खराब" : "⭐ Poor";

    document.querySelector("#feedbackForm button").innerText =
        hindi ? "प्रतिक्रिया भेजें" : "Submit Feedback";

    document.getElementById("search").placeholder =
        hindi ? "प्रदर्शनी खोजें..." : "Search for an exhibit...";

    document.getElementById("language").value = lang;
}


// 2. SEARCH EXHIBITS

let activeCategory = "all";

function searchExhibits() {

    let input = document.getElementById("search")
        .value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        let title = card.querySelector("h3").innerText.toLowerCase();

        let categoryMatch =
            activeCategory === "all" ||
            card.dataset.category === activeCategory;

        let searchMatch = title.includes(input);

        card.style.display =
            categoryMatch && searchMatch ? "block" : "none";

    });

}


// 3. FILTER CATEGORIES

function filterExhibits(category) {

    activeCategory = category;

    searchExhibits();

}


// 4. ADD FAVOURITES

function addFavorite(button) {

    let hindi =
        document.getElementById("language").value === "hi";

    if (button.dataset.added === "yes") {

        button.dataset.added = "no";

        button.innerText = hindi ?
            "♡ पसंदीदा जोड़ें" : "♡ Add Favourite";

    } else {

        button.dataset.added = "yes";

        button.innerText = hindi ?
            "♥ पसंदीदा में जोड़ा गया" :
            "♥ Added to Favourites";

    }

}


// 5. VISITOR FEEDBACK

document.getElementById("feedbackForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("visitorName").value;

    let hindi =
        document.getElementById("language").value === "hi";

    let message = document.getElementById("feedbackMessage");

    message.innerText = hindi ?
        "धन्यवाद " + name + "! आपकी प्रतिक्रिया प्राप्त हुई।" :
        "Thank you " + name + "! Your feedback has been received.";

    this.reset();

});