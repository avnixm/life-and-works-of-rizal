'use client';

import { useState, useEffect } from 'react';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface QuizCategory {
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface QuizData {
  categories: Record<string, QuizCategory>;
}

export interface QuizState {
  currentQuestion: number;
  selectedAnswers: number[];
  showResults: boolean;
  score: number;
  timeRemaining: number;
}

export function useQuiz() {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    selectedAnswers: [],
    showResults: false,
    score: 0,
    timeRemaining: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load quiz data
  useEffect(() => {
    const loadQuizData = async () => {
      try {
        const response = await fetch('/data/quiz-questions.json');
        if (!response.ok) {
          throw new Error('Failed to load quiz data');
        }
        const data: QuizData = await response.json();
        setQuizData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadQuizData();
  }, []);

  // Start quiz for a category
  const startQuiz = (categoryKey: string, timeLimit: number = 300) => {
    if (!quizData || !quizData.categories[categoryKey]) {
      setError('Category not found');
      return;
    }

    setSelectedCategory(categoryKey);
    setQuizState({
      currentQuestion: 0,
      selectedAnswers: [],
      showResults: false,
      score: 0,
      timeRemaining: timeLimit
    });
  };

  // Answer a question
  const answerQuestion = (answerIndex: number) => {
    if (!quizData || !selectedCategory) return;

    const newAnswers = [...quizState.selectedAnswers];
    newAnswers[quizState.currentQuestion] = answerIndex;
    
    setQuizState(prev => ({
      ...prev,
      selectedAnswers: newAnswers
    }));
  };

  // Go to next question
  const nextQuestion = () => {
    if (!quizData || !selectedCategory) return;

    const totalQuestions = quizData.categories[selectedCategory].questions.length;
    
    if (quizState.currentQuestion < totalQuestions - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    } else {
      finishQuiz();
    }
  };

  // Go to previous question
  const previousQuestion = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  };

  // Finish quiz and calculate score
  const finishQuiz = () => {
    if (!quizData || !selectedCategory) return;

    const questions = quizData.categories[selectedCategory].questions;
    let correctAnswers = 0;

    questions.forEach((question, index) => {
      if (quizState.selectedAnswers[index] === question.correct) {
        correctAnswers++;
      }
    });

    const score = Math.round((correctAnswers / questions.length) * 100);

    setQuizState(prev => ({
      ...prev,
      showResults: true,
      score
    }));
  };

  // Reset quiz
  const resetQuiz = () => {
    setSelectedCategory('');
    setQuizState({
      currentQuestion: 0,
      selectedAnswers: [],
      showResults: false,
      score: 0,
      timeRemaining: 0
    });
  };

  // Timer effect
  useEffect(() => {
    if (quizState.timeRemaining > 0 && !quizState.showResults && selectedCategory) {
      const timer = setTimeout(() => {
        setQuizState(prev => ({
          ...prev,
          timeRemaining: prev.timeRemaining - 1
        }));
      }, 1000);

      return () => clearTimeout(timer);
    } else if (quizState.timeRemaining === 0 && selectedCategory && !quizState.showResults) {
      finishQuiz();
    }
  }, [quizState.timeRemaining, quizState.showResults, selectedCategory]);

  // Get current question data
  const getCurrentQuestion = (): QuizQuestion | null => {
    if (!quizData || !selectedCategory) return null;
    return quizData.categories[selectedCategory].questions[quizState.currentQuestion] || null;
  };

  // Get quiz progress
  const getProgress = (): number => {
    if (!quizData || !selectedCategory) return 0;
    const totalQuestions = quizData.categories[selectedCategory].questions.length;
    return ((quizState.currentQuestion + 1) / totalQuestions) * 100;
  };

  // Format time
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return {
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
  };
} 