class LottoNumbers extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.numbers = new Set();
        this.render();
    }

    generateNumbers() {
        this.numbers.clear();
        while (this.numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            this.numbers.add(randomNumber);
        }
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .lotto-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1rem;
                    padding: 1rem;
                }
                .lotto-ball {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #000;
                    animation: pop-in 0.5s ease forwards;
                }

                @keyframes pop-in {
                    0% {
                        transform: scale(0);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            </style>
            <div class="lotto-container">
                ${[...this.numbers].map((number, index) => `<div class="lotto-ball" style="background-color: ${this.getBallColor(number)}; animation-delay: ${index * 0.1}s">${number}</div>`).join('')}
            </div>
        `;
    }

    getBallColor(number) {
        if (number <= 10) return '#fbc400';
        if (number <= 20) return '#69c8f2';
        if (number <= 30) return '#ff7272';
        if (number <= 40) return '#aaa';
        return '#b0d840';
    }
}

customElements.define('lotto-numbers', LottoNumbers);

// AI Animal Face Test Logic
const MODEL_URL = "https://teachablemachine.withgoogle.com/models/R1rJ4WKUU/";
let model, maxPredictions;

async function loadModel() {
    const modelURL = MODEL_URL + "model.json";
    const metadataURL = MODEL_URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    console.log("Animal Test Model Loaded");
}

async function predict(imageElement) {
    const prediction = await model.predict(imageElement);
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");
    const dogBar = document.getElementById("dog-bar");
    const catBar = document.getElementById("cat-bar");
    const dogPercent = document.getElementById("dog-percent");
    const catPercent = document.getElementById("cat-percent");

    resultContainer.style.display = "block";
    
    let dogProb = 0, catProb = 0;
    
    prediction.forEach(p => {
        if (p.className.toLowerCase() === "dog") {
            dogProb = p.probability;
        } else if (p.className.toLowerCase() === "cat") {
            catProb = p.probability;
        }
    });

    dogBar.style.width = (dogProb * 100) + "%";
    catBar.style.width = (catProb * 100) + "%";
    dogPercent.textContent = Math.round(dogProb * 100) + "%";
    catPercent.textContent = Math.round(catProb * 100) + "%";

    if (dogProb > catProb) {
        resultText.textContent = "You look like a Friendly Dog! 🐶";
    } else if (catProb > dogProb) {
        resultText.textContent = "You look like a Chic Cat! 🐱";
    } else {
        resultText.textContent = "You are a mysterious mix! ✨";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Lotto Logic
    const lottoNumbersElement = document.querySelector('lotto-numbers');
    const generateBtn = document.getElementById('generate-btn');
    const themeBtn = document.getElementById('theme-btn');
    const htmlElement = document.documentElement;

    // Theme Logic
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeButtonText(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButtonText(newTheme);
    });

    function updateThemeButtonText(theme) {
        themeBtn.textContent = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }

    generateBtn.addEventListener('click', () => {
        lottoNumbersElement.generateNumbers();
    });

    lottoNumbersElement.generateNumbers();

    // Animal Test Event Listeners
    loadModel();
    const uploadArea = document.getElementById('upload-area');
    const imageInput = document.getElementById('image-input');
    const previewImage = document.getElementById('preview-image');
    const uploadPlaceholder = uploadArea.querySelector('.upload-placeholder');
    const loadingSpinner = document.getElementById('loading-spinner');

    uploadArea.addEventListener('click', () => imageInput.click());

    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (event) => {
                previewImage.src = event.target.result;
                previewImage.style.display = "block";
                uploadPlaceholder.style.display = "none";
                
                loadingSpinner.style.display = "block";
                document.getElementById("result-container").style.display = "none";
                
                // Wait for image to load before predicting
                previewImage.onload = async () => {
                    await predict(previewImage);
                    loadingSpinner.style.display = "none";
                };
            };
            reader.readAsDataURL(file);
        }
    });

    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.background = "rgba(255, 222, 0, 0.1)";
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.background = "transparent";
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.background = "transparent";
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            imageInput.files = e.dataTransfer.files;
            const event = new Event('change');
            imageInput.dispatchEvent(event);
        }
    });
});
