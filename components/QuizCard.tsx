'use client';

import { QuizQuestion } from '@/hooks/useQuiz';

interface QuizCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | undefined;
  onAnswerSelect: (answerIndex: number) => void;
  showExplanation?: boolean;
}

export default function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  showExplanation = false
}: QuizCardProps) {
  return (
    <div className="bg-white/80 rounded-lg border border-amber-300 p-6 shadow-lg">
      {/* Question Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-xs text-amber-600">
            ID: {question.id}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-amber-900 leading-relaxed">
          {question.question}
        </h3>
      </div>

      {/* Answer Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correct;
          
          let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ";
          
          if (showExplanation) {
            if (isCorrect) {
              buttonClass += "bg-green-100 border-green-400 text-green-800 ";
            } else if (isSelected && !isCorrect) {
              buttonClass += "bg-red-100 border-red-400 text-red-800 ";
            } else {
              buttonClass += "bg-gray-50 border-gray-200 text-gray-600 ";
            }
          } else {
            if (isSelected) {
              buttonClass += "bg-amber-100 border-amber-400 text-amber-800 shadow-md ";
            } else {
              buttonClass += "bg-white border-amber-200 text-amber-700 hover:bg-amber-50 hover:border-amber-300 ";
            }
          }

          return (
            <button
              key={index}
              onClick={() => !showExplanation && onAnswerSelect(index)}
              disabled={showExplanation}
              className={buttonClass}
            >
              <div className="flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1 font-medium">
                  {option}
                </span>
                {showExplanation && isCorrect && (
                  <span className="flex-shrink-0 ml-2 text-green-600">
                    ✓
                  </span>
                )}
                {showExplanation && isSelected && !isCorrect && (
                  <span className="flex-shrink-0 ml-2 text-red-600">
                    ✗
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="bg-blue-50/50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-bold text-blue-800 mb-2 flex items-center">
            💡 Explanation
          </h4>
          <p className="text-blue-700 text-base leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
} 