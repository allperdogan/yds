import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TopicPracticeView } from '../components/TopicPracticeView';
import { getTopicById } from '../services/studyTopics';

const grammar = getTopicById('grammar')!;
const noop = vi.fn();
const props = {
  topic: grammar,
  onRecordQuestionResult: noop,
  onAddMistake: noop,
  onMistakeCorrect: noop,
  onBack: noop
};

describe('TopicPracticeView', () => {
  it('opens on the review list when asked to repeat mistakes', () => {
    const mistake = grammar.questions[5];
    render(<TopicPracticeView {...props} solvedQuestions={{}} mistakeIds={[mistake.id]} initialMode="review" />);
    expect(screen.getByText('1/1')).toBeInTheDocument();
    expect(screen.getByText(mistake.question)).toBeInTheDocument();
  });

  it('shows the grammar subject, says how many solved questions are left out, and can show them all', () => {
    const solved = grammar.questions[0];
    render(
      <TopicPracticeView
        {...props}
        solvedQuestions={{ [solved.id]: { selected: solved.answer, isCorrect: true } }}
        mistakeIds={[]}
      />
    );
    expect(screen.getByText(/Daha önce doğru çözdüğün 1 soru bu listede yok/)).toBeInTheDocument();
    expect(screen.getByText(/Zamanlar · 2\//)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Hepsi/ }));
    expect(screen.getByText(`1/${grammar.questions.length}`)).toBeInTheDocument();
    expect(screen.getByText(/Zamanlar · 1\//)).toBeInTheDocument();
  });
});
