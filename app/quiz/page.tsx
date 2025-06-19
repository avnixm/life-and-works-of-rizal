'use client';

import { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { useQuiz } from '../../hooks/useQuiz';
import QuizCard from '../../components/QuizCard';
import QuizResults from '../../components/QuizResults';

// Icon Components
const BookIcon = () => (
  <svg className="w-6 h-6 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const ErrorIcon = () => (
  <svg className="w-6 h-6 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.768 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const TimerIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckListIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const LightBulbIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const BarChartIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const TipsIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const ProgressIcon = () => (
  <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export default function Quiz() {
  const {
    quizData,
    selectedCategory,
    quizState,
    loading,
    error,
    startQuiz,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    finishQuiz,
    resetQuiz,
    getCurrentQuestion,
    getProgress,
    formatTime
  } = useQuiz();

  const [selectedTimeLimit, setSelectedTimeLimit] = useState(300); // 5 minutes default

  if (loading) {
    return (
      <PageLayout title="Quiz" subtitle="Test Your Knowledge About José Rizal">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
            <p className="text-amber-700">Loading quiz questions...</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout title="Quiz" subtitle="Test Your Knowledge About José Rizal">
        <div className="text-center py-12">
          <div className="text-red-600 text-xl mb-4 flex items-center justify-center">
            <ErrorIcon />
            Error Loading Quiz
          </div>
          <p className="text-red-700 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </PageLayout>
    );
  }

  // Category Selection Screen
  if (!selectedCategory && quizData) {
    return (
      <PageLayout title="Quiz" subtitle="Test Your Knowledge About José Rizal">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-4 md:p-6 mb-6 md:mb-8 border border-amber-300">
            <h3 className="text-xl md:text-2xl font-bold text-amber-900 mb-3 flex items-center">
              <BookIcon />
              Welcome to the Rizal Quiz!
            </h3>
            <p className="text-amber-800 mb-3 md:mb-4 text-sm md:text-base leading-relaxed">
              Test your knowledge about Dr. José Rizal, the national hero of the Philippines. 
              Choose a category below to begin your educational journey through his remarkable life and legacy.
            </p>
            <div className="flex flex-wrap gap-2 text-xs md:text-sm text-amber-700">
              <span className="bg-amber-200 px-2 md:px-3 py-1 rounded-full flex items-center">
                <CheckListIcon />
                Multiple Choice Questions
              </span>
              <span className="bg-amber-200 px-2 md:px-3 py-1 rounded-full flex items-center">
                <ClockIcon />
                Timed Quizzes
              </span>
              <span className="bg-amber-200 px-2 md:px-3 py-1 rounded-full flex items-center">
                <LightBulbIcon />
                Detailed Explanations
              </span>
              <span className="bg-amber-200 px-2 md:px-3 py-1 rounded-full flex items-center">
                <BarChartIcon />
                Instant Results
              </span>
            </div>
          </div>

          {/* Time Limit Selection */}
          <div className="bg-white/90 md:bg-white/80 rounded-lg p-4 md:p-6 mb-6 md:mb-8 border border-amber-300">
            <h4 className="text-base md:text-lg font-bold text-amber-900 mb-3 md:mb-4 flex items-center">
              <ClockIcon />
              Choose Time Limit
            </h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {[
                { time: 180, label: "3 minutes" },
                { time: 300, label: "5 minutes" },
                { time: 600, label: "10 minutes" },
                { time: 0, label: "No limit" }
              ].map(option => (
                <button
                  key={option.time}
                  onClick={() => setSelectedTimeLimit(option.time)}
                  className={`px-3 md:px-4 py-2 rounded-lg border-2 transition-colors text-xs md:text-sm ${
                    selectedTimeLimit === option.time
                      ? 'bg-amber-100 border-amber-400 text-amber-800'
                      : 'bg-white border-amber-200 text-amber-700 hover:bg-amber-50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Object.entries(quizData.categories).map(([key, category]) => (
              <div key={key} className="bg-white/90 md:bg-white/80 rounded-lg border border-amber-300 p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-amber-900 mb-2">{category.title}</h3>
                  <p className="text-amber-700 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{category.description}</p>
                  
                  <div className="flex justify-between text-xs text-amber-600 mb-3 md:mb-4">
                    <span className="flex items-center">
                      <DocumentIcon />
                      {category.questions.length} questions
                    </span>
                    <span className="flex items-center">
                      <TimerIcon />
                      {selectedTimeLimit ? formatTime(selectedTimeLimit) : 'No limit'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => startQuiz(key, selectedTimeLimit)}
                  className="w-full bg-amber-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-700 transition-colors text-sm md:text-base"
                >
                  Start Quiz
                </button>
              </div>
            ))}
          </div>

          {/* Study Tips */}
          <div className="mt-6 md:mt-8 bg-blue-50/80 md:bg-blue-50/50 rounded-lg p-4 md:p-6 border border-blue-200">
            <h4 className="text-base md:text-lg font-bold text-blue-800 mb-3 md:mb-4 flex items-center">
              <TipsIcon />
              Study Tips
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm text-blue-700">
              <ul className="space-y-1 md:space-y-2 leading-relaxed">
                <li>• Review the course materials before taking the quiz</li>
                <li>• Read each question carefully before selecting an answer</li>
                <li>• Pay attention to the explanations after each question</li>
              </ul>
              <ul className="space-y-1 md:space-y-2 leading-relaxed">
                <li>• Don't rush - take your time to think</li>
                <li>• You can retake quizzes to improve your score</li>
                <li>• Use the detailed results to identify areas for improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  // Quiz Results Screen
  if (quizState.showResults && quizData && selectedCategory) {
    const categoryData = quizData.categories[selectedCategory];
    
    return (
      <PageLayout title="Quiz Results" subtitle={`${categoryData.title} - Your Performance`}>
        <QuizResults
          score={quizState.score}
          totalQuestions={categoryData.questions.length}
          questions={categoryData.questions}
          userAnswers={quizState.selectedAnswers}
          categoryTitle={categoryData.title}
          onRetakeQuiz={() => startQuiz(selectedCategory, selectedTimeLimit)}
          onBackToCategories={resetQuiz}
        />
      </PageLayout>
    );
  }

  // Active Quiz Screen
  if (selectedCategory && quizData) {
    const categoryData = quizData.categories[selectedCategory];
    const currentQuestion = getCurrentQuestion();
    const totalQuestions = categoryData.questions.length;
    
    if (!currentQuestion) {
      return (
        <PageLayout title="Quiz" subtitle="Error">
          <div className="text-center py-12">
            <p className="text-red-600">Question not found. Please restart the quiz.</p>
            <button onClick={resetQuiz} className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg">
              Back to Categories
            </button>
          </div>
        </PageLayout>
      );
    }

    return (
      <PageLayout title={`Quiz: ${categoryData.title}`} subtitle={`Question ${quizState.currentQuestion + 1} of ${totalQuestions}`}>
        <div className="max-w-4xl mx-auto">
          {/* Progress and Timer Header */}
          <div className="bg-white/90 md:bg-white/80 rounded-lg border border-amber-300 p-3 md:p-4 mb-4 md:mb-6">
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <div className="text-amber-700 text-sm md:text-base flex items-center">
                <ProgressIcon />
                <span className="font-medium">Progress: </span>
                {quizState.currentQuestion + 1} / {totalQuestions}
              </div>
              
              {quizState.timeRemaining > 0 && (
                <div className={`font-mono text-base md:text-lg flex items-center ${
                  quizState.timeRemaining <= 60 ? 'text-red-600' : 'text-amber-700'
                }`}>
                  <ClockIcon />
                  {formatTime(quizState.timeRemaining)}
                </div>
              )}
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-amber-200 rounded-full h-2 md:h-3">
              <div
                className="bg-amber-600 h-2 md:h-3 rounded-full transition-all duration-300"
                style={{ width: `${getProgress()}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <QuizCard
            question={currentQuestion}
            questionNumber={quizState.currentQuestion + 1}
            totalQuestions={totalQuestions}
            selectedAnswer={quizState.selectedAnswers[quizState.currentQuestion]}
            onAnswerSelect={answerQuestion}
          />

          {/* Navigation Buttons */}
          <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-0 mt-4 md:mt-6">
            <button
              onClick={previousQuestion}
              disabled={quizState.currentQuestion === 0}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base ${
                quizState.currentQuestion === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              ← Previous
            </button>

            <div className="flex gap-2 md:gap-3">
              <button
                onClick={resetQuiz}
                className="px-4 md:px-6 py-2 md:py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors text-sm md:text-base flex-1 md:flex-none"
              >
                Exit Quiz
              </button>

              {quizState.currentQuestion === totalQuestions - 1 ? (
                <button
                  onClick={finishQuiz}
                  disabled={quizState.selectedAnswers[quizState.currentQuestion] === undefined}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base flex-1 md:flex-none ${
                    quizState.selectedAnswers[quizState.currentQuestion] === undefined
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  Finish Quiz →
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled={quizState.selectedAnswers[quizState.currentQuestion] === undefined}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base flex-1 md:flex-none ${
                    quizState.selectedAnswers[quizState.currentQuestion] === undefined
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-amber-600 text-white hover:bg-amber-700'
                  }`}
                >
                  Next →
                </button>
              )}
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return null;
} 