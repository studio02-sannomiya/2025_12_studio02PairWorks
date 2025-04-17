
// function initQuiz() {
    document.getElementById("startBtn").addEventListener("click", function () {
        document.querySelector(".intro").style.display = "none";
        document.getElementById("quiz").style.display = "block";
        startQuiz();
    });
// }

let answers = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
};

let currentQuestion = 1;

function startQuiz() {
    const questionCounter = document.getElementById("questionCounter");
    loadQuestion();

    function loadQuestion() {
        const quizItems = document.querySelectorAll(".quiz-option"); // 変更

        quizItems.forEach((item) => {
            item.addEventListener("click", function () {
                let selectedAnswer = item.getAttribute("data-answer");
                answers[selectedAnswer]++;

                if (currentQuestion === 1) {
                    document.querySelector(".quiz h2").innerHTML = "質問2：理想の癒しタイムは？";
                    item.parentElement.innerHTML = `
                        <li class="quiz-option" data-answer="A">A. とにかく熱いお風呂に入って「修行かな？」ってくらいの達成感を味わいたい🔥</li>
                        <li class="quiz-option" data-answer="B">B. 外の風を感じながら、ふぅ〜っと深呼吸してボーッとしたい🍃</li>
                        <li class="quiz-option" data-answer="C">C. 全身にビリビリ刺激を感じて、「おおお！」って叫びながら目覚めたい⚡️</li>
                        <li class="quiz-option" data-answer="D">D. じっくりじんわり温まって、「私って水蒸気だったんだ…」って気づきたい🌫️</li>
                    `;
                    questionCounter.innerText = `残りの質問数: 1`;
                    currentQuestion++;
                    loadQuestion();
                } else if (currentQuestion === 2) {
                    document.querySelector(".quiz h2").innerHTML = "質問3：今日の一言で自分を表すなら？";
                    item.parentElement.innerHTML = `
                        <li class="quiz-option" data-answer="A">A. 「戦士とは、熱湯に耐えし者なり…！」💪</li>
                        <li class="quiz-option" data-answer="B">B. 「自然と一体化したい、むしろ私はもう森」🌲</li>
                        <li class="quiz-option" data-answer="C">C. 「ちょっと刺激が欲しい、なんなら感電してもいい」⚡️</li>
                        <li class="quiz-option" data-answer="D">D. 「今すぐストレスごと蒸発したい…」💨</li>
                    `;
                    questionCounter.innerText = `残りの質問数: 0`;
                    currentQuestion++;
                    loadQuestion();
                } else if (currentQuestion === 3) {
                    showResults();
                }
            });
        });
    }
}

function showResults() {
    const result = getResult();
    document.getElementById("resultMessage").innerHTML = result.message; // 結果メッセージを表示
    document.getElementById("resultImage").src = result.image; // 画像のsrcを設定
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
}

function getResult() {
    let resultText = "";
    let imageSrc = ""; // 画像のパスを格納する変数
    let maxAnswer = Math.max(answers.A, answers.B, answers.C, answers.D);

    if (answers.A === maxAnswer) {
        resultText = "高温風呂 ";
        imageSrc = "img/img11.png"; // 高温風呂の画像パス
    } else if (answers.B === maxAnswer) {
        resultText = "露天風呂 ";
        imageSrc = "img/img12.png"; // 露天風呂の画像パス
    } else if (answers.C === maxAnswer) {
        resultText = "電気風呂 ⚡️";
        imageSrc = "img/img15.png"; // 電気風呂の画像パス
    } else if (answers.D === maxAnswer) {
        resultText = "ロウリュウ ";
        imageSrc = "img/img14.png"; // ロウリュウの画像パス
    }

    return {
        message: `あなたにおすすめのお風呂は… ${resultText}!`,
        image: imageSrc,
    };
}

// function restartQuiz() {
    document.getElementById("restartBtn").addEventListener("click", function () {
        location.reload();
    });
// }

// function returnMain() {
    document.getElementById("returnBtn").addEventListener("click", function () {
        window.location.href = "furo01.html"; // メインページのURLに修正
    });
// }
