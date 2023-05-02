// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const questions = [
    {
        id: 1,
        question: "What are some healthy food recipe options?",
        answer:
            "Some healthy food recipe options include grilled chicken with roasted vegetables, quinoa and black bean salad, and baked salmon with asparagus. All of these options are high in protein, fiber, and healthy fats.",
    },
    {
        id: 2,
        question: "What are some easy food recipe options for beginners?",
        answer:
            "Some easy food recipe options for beginners include spaghetti with marinara sauce, scrambled eggs with toast, and grilled cheese sandwiches. These recipes are simple, require minimal ingredients, and can be prepared quickly.",
    },
    {
        id: 3,
        question: "What are some vegetarian food recipe options?",
        answer:
            "Some vegetarian food recipe options include roasted vegetable lasagna, lentil soup, and vegetable stir fry with tofu. These recipes are high in protein, fiber, and nutrients and are suitable for a vegetarian diet.",
    },
    {
        id: 4,
        question: "What are some healthy snack recipe options?",
        answer:
            "Some healthy snack recipe options include apple slices with almond butter, Greek yogurt with berries and granola, and homemade trail mix with nuts, seeds, and dried fruit. These options are high in protein, fiber, and nutrients and can help keep you feeling full between meals.",
    },
];

const Accordion = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (id) => {
        if (id === activeQuestion) {
            setActiveQuestion(null);
        } else {
            setActiveQuestion(id);
        }
    };

    return (
        <div className="max-w-lg mx-auto">
            {questions.map((q) => (
                <div
                    key={q.id}
                    className="border rounded-lg mb-4 p-4 cursor-pointer"
                    onClick={() => toggleQuestion(q.id)}
                >
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold">{q.question}</p>
                        {activeQuestion === q.id ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                            </svg>

                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>

                        )}
                    </div>
                    {activeQuestion === q.id && <p className="mt-4">{q.answer}</p>}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
