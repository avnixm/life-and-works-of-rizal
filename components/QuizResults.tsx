'use client';

import { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import { QuizQuestion } from '@/hooks/useQuiz';

// Icon Components
const ChartIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  questions: QuizQuestion[];
  userAnswers: number[];
  categoryTitle: string;
  onRetakeQuiz: () => void;
  onBackToCategories: () => void;
}

export default function QuizResults({
  score,
  totalQuestions,
  questions,
  userAnswers,
  categoryTitle,
  onRetakeQuiz,
  onBackToCategories
}: QuizResultsProps) {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState(200);

  const correctAnswers = userAnswers.filter((answer, index) => 
    answer === questions[index].correct
  ).length;

  const shouldShowConfetti = score >= 80;

  // Trigger confetti effect for high scores
  useEffect(() => {
    if (shouldShowConfetti) {
      setShowConfetti(true);
      // Start with a burst of confetti
      setConfettiPieces(300);
      
      // Reduce confetti after 3 seconds
      const reduceTimer = setTimeout(() => {
        setConfettiPieces(100);
      }, 3000);

      // Stop confetti after 8 seconds
      const stopTimer = setTimeout(() => {
        setShowConfetti(false);
      }, 8000);

      return () => {
        clearTimeout(reduceTimer);
        clearTimeout(stopTimer);
      };
    }
  }, [shouldShowConfetti]);

  const getScoreMessage = (score: number) => {
    if (score >= 90) return { 
      message: "Excellent! Outstanding knowledge of Rizal!", 
      color: "text-green-600", 
      icon: "🏆",
      bgColor: "from-green-100 to-emerald-100"
    };
    if (score >= 80) return { 
      message: "Very Good! You know Rizal well!", 
      color: "text-blue-600", 
      icon: "🎉",
      bgColor: "from-blue-100 to-cyan-100"
    };
    if (score >= 70) return { 
      message: "Good job! Keep learning about our hero!", 
      color: "text-yellow-600", 
      icon: "👍",
      bgColor: "from-yellow-100 to-amber-100"
    };
    if (score >= 60) return { 
      message: "Fair performance. Review the materials!", 
      color: "text-orange-600", 
      icon: "📚",
      bgColor: "from-orange-100 to-yellow-100"
    };
    return { 
      message: "Keep studying! Rizal's story is worth knowing!", 
      color: "text-red-600", 
      icon: "💪",
      bgColor: "from-red-100 to-pink-100"
    };
  };

  const scoreInfo = getScoreMessage(score);

  return (
    <>
      {/* Confetti Effect for High Scores */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={confettiPieces}
          recycle={confettiPieces > 0}
          colors={['#f59e0b', '#d97706', '#92400e', '#451a03', '#fbbf24', '#f3e8ff', '#ddd6fe', '#c4b5fd']}
          gravity={0.1}
          wind={0.02}
          friction={0.99}
          initialVelocityY={15}
          confettiSource={{
            x: 0,
            y: 0,
            w: width,
            h: height * 0.1
          }}
        />
      )}

      <div className="bg-white/90 rounded-lg border border-amber-300 p-8 shadow-lg max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{scoreInfo.icon}</div>
          <h2 className="text-3xl font-bold text-amber-900 mb-2">Quiz Complete!</h2>
          <h3 className="text-xl text-amber-700 mb-4">{categoryTitle}</h3>
          
          {/* High Score Celebration Banner */}
          {shouldShowConfetti && (
            <div className={`bg-gradient-to-r ${scoreInfo.bgColor} rounded-lg p-4 mb-6 border-2 border-amber-300`}>
              <div className="text-2xl font-bold text-amber-800 mb-2">
                🎉 Congratulations! Excellent Performance! 🎉
              </div>
              <div className="text-amber-700">
                You've demonstrated outstanding knowledge of Dr. José Rizal!
              </div>
            </div>
          )}
          
          {/* Score Display */}
          <div className="bg-amber-50 rounded-lg p-6 mb-6">
            <div className="text-5xl font-bold text-amber-800 mb-2">{score}%</div>
            <div className="text-lg text-amber-700 mb-2">
              {correctAnswers} out of {totalQuestions} correct
            </div>
            <div className={`text-lg font-medium ${scoreInfo.color}`}>
              {scoreInfo.message}
            </div>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
            <ChartIcon />
            Question Review
          </h4>
          <div className="space-y-4">
            {questions.map((question, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer === question.correct;
              
              return (
                <div 
                  key={question.id}
                  className={`p-4 rounded-lg border-2 ${
                    isCorrect 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-medium text-gray-700">
                      Question {index + 1}:
                    </span>
                    <span className={`text-lg flex items-center ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {isCorrect ? <CheckIcon /> : <XIcon />}
                    </span>
                  </div>
                  
                  <p className="text-gray-800 mb-3">{question.question}</p>
                  
                  <div className="space-y-2 text-base">
                    <div className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                      Your answer: {question.options[userAnswer] || 'No answer'}
                    </div>
                    
                    {!isCorrect && (
                      <div className="text-green-700 font-medium">
                        Correct answer: {question.options[question.correct]}
                      </div>
                    )}
                    
                    <div className="text-gray-600 italic">
                      {question.explanation}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{correctAnswers}</div>
            <div className="text-base text-blue-700">Correct Answers</div>
          </div>
          
          <div className="bg-red-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-600">{totalQuestions - correctAnswers}</div>
            <div className="text-base text-red-700">Incorrect Answers</div>
          </div>
          
          <div className="bg-amber-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-amber-600">{Math.round((correctAnswers / totalQuestions) * 100)}%</div>
            <div className="text-base text-amber-700">Accuracy</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRetakeQuiz}
            className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center justify-center"
          >
            <RefreshIcon />
            Retake Quiz
          </button>
          
          <button
            onClick={onBackToCategories}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <BookIcon />
            Choose Another Category
          </button>
        </div>

        {/* Motivational Message */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-4">
            <p className="text-amber-800 italic">
              "The youth is the hope of our future" - Dr. José Rizal
            </p>
            <p className="text-amber-700 text-base mt-2">
              Keep learning about our national hero and be inspired by his legacy!
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 