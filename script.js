const usernameInput = document.getElementById('username');
const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const summaryScreen = document.getElementById('summary-screen');
const scenarioTitle = document.getElementById('scenario-title');
const scenarioDescription = document.getElementById('scenario-description');
const optionsDiv = document.getElementById('options');
const summaryUsername = document.getElementById('summary-username');
const finalScore = document.getElementById('final-score');
const rulesList = document.getElementById('rules-list');
const saveScoreButton = document.getElementById('save-score-button');

let username = '';
let score = 0;
let currentScenarioIndex = 0;

const scenarios = [
    {
        title: 'זימון דיון',
        description: 'אתה צריך לקיים דיון בנושא חשוב. מה תעשה?',
        options: [
            { text: 'אזמן את כל הצוות', score: -5 },
            { text: 'אבחן האם ניתן להשיג את המטרה בדרך אחרת', score: 10 },
            { text: 'אזמן רק את מי שחייב להשתתף', score: 5 },
        ],
    },
    {
        title: 'ניהול דיון',
        description: 'הדיון החל. מה תעשה?',
        options: [
            { text: 'אתן לכולם לדבר בחופשיות', score: 0 },
            { text: 'אציג את מטרת הפגישה ואת האג׳נדה', score: 10 },
            { text: 'אאפשר ויכוחים כדי להגיע לפתרון', score: -5 },
        ],
    },
    {
        title: 'סיכום דיון',
        description: 'הדיון הסתיים. מה תעשה?',
        options: [
            { text: 'אשלח מייל קצר עם סיכום כללי', score: 5 },
            { text: 'אשלח סיכום מפורט עם החלטות ומשימות', score: 10 },
            { text: 'לא אשלח סיכום', score: -10 },
        ],
    },
];

const rules = [
    'האם ניתן להשיג את מטרת הדיון בדרך אחרת?',
    'האם ניתן להחליף דיון מרובה משתתפים ב-1 על 1?',
    'האם הנושא רלוונטי לכל המשתתפים?',
    'מזמינים רק את מי שנדרש',
    'מזמינים את כל מי שנדרש',
    'חובה לאשר השתתפות או לתאם מועד אחר',
    'פירוט בזימון: מטרת הפגישה, אג\'נדה, מי מציג, סוג הפגישה',
    'הצגת מטרת הפגישה ואג\'נדה',
    'הקפדה על עמידה בזמנים',
    'סיכום תובנות ומשימות הדיון הקודם והסטטוס שלהן',
    'סיכום, החלטות ומשימות בסיום הדיון',
    'שיח מכבד',
    'דיון ענייני ללא ויכוחים',
];

startButton.addEventListener('click', () => {
    username = usernameInput.value;
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    loadScenario();
});

function loadScenario() {
    if (currentScenarioIndex < scenarios.length) {
        const scenario = scenarios[currentScenarioIndex];
        scenarioTitle.textContent = scenario.title;
        scenarioDescription.textContent = scenario.description;
        optionsDiv.innerHTML = '';
        scenario.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.addEventListener('click', () => handleOptionClick(option.score));
            optionsDiv.appendChild(button);
        });
    } else {
        showSummary();
    }
}

function handleOptionClick(optionScore) {
    score += optionScore;
    currentScenarioIndex++;
    loadScenario();
}

function showSummary() {
    gameScreen.style.display = 'none';
    summaryScreen.style.display = 'block';
    summaryUsername.textContent = username;
    finalScore.textContent = score;
    rules.forEach(rule => {
        const li = document.createElement('li');
        li.textContent = rule;
        rulesList.appendChild(li);
    });
}

saveScoreButton.addEventListener('click', () => {
    // כאן תוסיף קוד לשמירת הניקוד בשרת
    alert('הניקוד נשמר!');
});