import React, { useState } from "react";
import {
  Leaf,
  ArrowRight,
  Check,
} from "lucide-react";

function PlantFinder({ onSelectPlant }) {
  const [step, setStep] = useState(0);

  const [answers, setAnswers] = useState({
    category: "",
    light: "",
    difficulty: "",
  });

  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const questions = [
    {
      key: "category",
      title: "What type of plant are you looking for?",
      options: [
        "Indoor Plants",
        "Outdoor Plants",
        "Flowering Plants",
        "Succulents",
        "Herbs & Vegetables",
        "Seeds",
      ],
    },
    {
      key: "light",
      title: "How much light does your space receive?",
      options: [
        "Low to bright indirect light",
        "Bright indirect light",
        "Medium indirect light",
      ],
    },
    {
      key: "difficulty",
      title: "How much plant-care experience do you have?",
      options: [
        "Easy",
        "Medium",
      ],
    },
  ];

  const handleAnswer = async (value) => {
    const currentQuestion = questions[step];

    const newAnswers = {
      ...answers,
      [currentQuestion.key]: value,
    };

    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      await getRecommendations(newAnswers);
    }
  };

  const getRecommendations = async (userAnswers) => {
    try {
      setLoading(true);
      setError("");

      console.log("Sending to backend:", userAnswers);

      const response = await fetch(
        `${API_BASE_URL}/api/plants/recommend`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userAnswers),
        }
      );

      if (!response.ok) {
        throw new Error("Backend request failed");
      }

      const data = await response.json();

      console.log("Backend response:", data);

      setResults(data.plants || []);

      setStep(questions.length);
    } catch (err) {
      console.error("Plant Finder Error:", err);

      setError(
        "Unable to connect to the Greenora server. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetFinder = () => {
    setStep(0);

    setAnswers({
      category: "",
      light: "",
      difficulty: "",
    });

    setResults([]);

    setError("");
  };

  return (
    <section className="plant-finder" id="finder">

      <div className="finder-header">

        <p>
          <Leaf size={16} />
          PLANT FINDER
        </p>

        <h2>Find the right plant for your space</h2>

        <span>
          Answer three simple questions and Greenora will
          find plants that match your preferences.
        </span>

      </div>

      {/* QUESTIONS */}

      {!loading && !error && step < questions.length && (
        <div className="finder-box">

          <div className="progress">

            <span>
              Question {step + 1} of {questions.length}
            </span>

            <div className="progress-bar">

              <div
                style={{
                  width: `${((step + 1) / questions.length) * 100}%`,
                }}
              />

            </div>

          </div>

          <h3>{questions[step].title}</h3>

          <div className="finder-options">

            {questions[step].options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleAnswer(option)}
              >

                <span>{option}</span>

                <ArrowRight size={18} />

              </button>
            ))}

          </div>

        </div>
      )}

      {/* LOADING */}

      {loading && (
        <div className="finder-box">

          <div className="finder-loading">

            <Leaf size={45} />

            <h3>Finding your plants...</h3>

            <p>
              We're checking the Greenora plant collection.
            </p>

          </div>

        </div>
      )}

      {/* ERROR */}

      {!loading && error && (
        <div className="finder-box">

          <div className="finder-error">

            <h3>Unable to find plants</h3>

            <p>{error}</p>

            <button
              type="button"
              className="primary-button"
              onClick={resetFinder}
            >
              Try Again
            </button>

          </div>

        </div>
      )}

      {/* RESULTS */}

      {!loading &&
        !error &&
        step === questions.length && (
          <div className="finder-result">

            <div className="result-icon">
              <Check size={28} />
            </div>

            <p>YOUR PLANT MATCH</p>

            {results.length > 0 ? (
              <>
                <h3>
                  We found {results.length} plant
                  {results.length > 1 ? "s" : ""} for you 🌱
                </h3>

                <span>
                  These plants match the preferences you
                  selected.
                </span>

                <div className="finder-results-grid">

                  {results.map((plant) => (
                    <div
                      className="finder-plant-card"
                      key={plant._id}
                      role="button"
                      tabIndex={0}
                      onClick={() => onSelectPlant(plant)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          onSelectPlant(plant);
                        }
                      }}
                    >

                      <img
                        src={plant.image}
                        alt={plant.name}
                      />

                      <div className="finder-plant-content">

                        <h4>{plant.name}</h4>

                        <p>{plant.description}</p>

                        <strong>
                          ₹{plant.price}
                        </strong>

                      </div>

                    </div>
                  ))}

                </div>
              </>
            ) : (
              <>
                <h3>No matching plants found</h3>

                <span>
                  We couldn't find a plant matching all
                  your preferences. Try different choices.
                </span>
              </>
            )}

            <div className="result-buttons">

              <button
                type="button"
                className="primary-button"
                onClick={resetFinder}
              >
                Find Again
              </button>

            </div>

          </div>
        )}
    </section>
  );
}

export default PlantFinder;