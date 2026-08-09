let score = 0;

let answeredQuestions = [];

function answerQuestion(questionNumber, selectedAnswer) {

    if (answeredQuestions.includes(questionNumber)) {
        return;
    }

    answeredQuestions.push(questionNumber);

    const correctAnswers = {
        1: 3,
        2: 1,
        3: 1,
        4: 2,
        5: 3
    };

    const feedback = {
        1: "Always verify unexpected bank messages through the bank's official website or application.",
        2: "Phishing messages often use urgency or pressure to make victims act without thinking.",
        3: "Always check the website address before entering sensitive information.",
        4: "Smishing is phishing performed through SMS or text messages.",
        5: "Multi-factor authentication provides an additional layer of protection."
    };

    const question = document.querySelectorAll(".question")[questionNumber - 1];

    const result = document.createElement("p");

    if (selectedAnswer === correctAnswers[questionNumber]) {

        score++;

        result.textContent = "✅ Correct! " + feedback[questionNumber];

        result.className = "correct";

    } else {

        result.textContent =
            "❌ Incorrect. " + feedback[questionNumber];

        result.className = "incorrect";
    }

    question.appendChild(result);

    document.getElementById("score").textContent =
        score + " / 5";

    document.getElementById("progress").textContent =
    answeredQuestions.length + " / 5";

    if (answeredQuestions.length === 5) {

        const message = document.getElementById("quiz-message");

        if (score === 5) {

            message.textContent =
                "Excellent! You have a strong understanding of phishing awareness.";

        } else if (score >= 3) {

            message.textContent =
                "Good job! Review the topics once more to strengthen your knowledge.";

        } else {

            message.textContent =
                "Keep learning! Review the phishing awareness sections and try again.";

        }
    }
}
