import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BottomTabBar } from './components/BottomTabBar';
import { DailyPlanView } from './components/DailyPlanView';
import { VocabFlashcardView } from './components/VocabFlashcardView';
import { VocabDrillView } from './components/VocabDrillView';
import { TacticsView } from './components/TacticsView';
import { QuestionPracticeView } from './components/QuestionPracticeView';
import { MistakesView } from './components/MistakesView';
import { InstallPromptModal } from './components/InstallPromptModal';
import { ReadingLabView } from './components/ReadingLabView';
import { FullMockExamView } from './components/FullMockExamView';
import { SyncModal } from './components/SyncModal';

import { UserStats, SRSItem, QuestionType } from './types';
import { StorageService } from './services/storageService';
import { SRSEngine } from './services/srsEngine';
import { BackupPayload } from './services/syncService';
import { getUnifiedQuestionById } from './data/ydsQuestions';
import { YDS_VOCABULARY_LIST } from './data/ydsVocabulary';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('vocab_drill');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('yds_dark_mode') === 'true';
  });

  const [stats, setStats] = useState<UserStats>(() => StorageService.loadStats());
  const [srsData, setSrsData] = useState<Record<string, SRSItem>>(() => SRSEngine.loadSRSData());
  const [isInstallModalOpen, setIsInstallModalOpen] = useState<boolean>(false);
  const [isSyncModalOpen, setIsSyncModalOpen] = useState<boolean>(false);

  const handleRestoreBackup = (payload: BackupPayload) => {
    setStats(payload.stats);
    StorageService.saveStats(payload.stats);
    setSrsData(payload.srsData);
    SRSEngine.saveSRSData(payload.srsData);
  };

  // Navigation state passed to specific views
  const [vocabDayFilter, setVocabDayFilter] = useState<number | undefined>(undefined);
  const [vocabInitialViewMode, setVocabInitialViewMode] = useState<'flashcard' | 'dictionary'>('flashcard');
  const [practiceTypeFilter, setPracticeTypeFilter] = useState<QuestionType | undefined>(undefined);
  const [tacticFilter, setTacticFilter] = useState<QuestionType | undefined>(undefined);

  // Apply dark mode class to HTML root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('yds_dark_mode', darkMode ? 'true' : 'false');
  }, [darkMode]);

  // Persist stats whenever changed
  useEffect(() => {
    StorageService.saveStats(stats);
  }, [stats]);

  // Persist SRS data
  const handleUpdateSRS = (newSRS: Record<string, SRSItem>) => {
    setSrsData(newSRS);
    SRSEngine.saveSRSData(newSRS);

    // Update mastered count
    const mastered = Object.values(newSRS).filter((i) => i.state === 'mastered').length;
    setStats((prev) => ({
      ...prev,
      masteredWordsCount: mastered,
      totalCardsReviewed: prev.totalCardsReviewed + 1
    }));
  };

  // Toggle Bookmark (with optional forceAdd)
  const handleToggleBookmark = (wordId: string, forceAdd?: boolean) => {
    setStats((prev) => {
      const exists = prev.bookmarkedWords.includes(wordId);
      if (forceAdd && exists) return prev;
      return {
        ...prev,
        bookmarkedWords: exists && !forceAdd
          ? prev.bookmarkedWords.filter((id) => id !== wordId)
          : [...prev.bookmarkedWords, wordId]
      };
    });
  };

  // Toggle Day Completed
  const handleToggleDayCompleted = (day: number) => {
    setStats((prev) => {
      const exists = prev.completedDays.includes(day);
      return {
        ...prev,
        completedDays: exists
          ? prev.completedDays.filter((d) => d !== day)
          : [...prev.completedDays, day]
      };
    });
  };

  // Record Question Result
  const handleRecordQuestionResult = (questionId: string, selected: string, isCorrect: boolean) => {
    setStats((prev) => {
      const alreadySolved = prev.solvedQuestions[questionId];
      const newSolved = {
        ...prev.solvedQuestions,
        [questionId]: { selected, isCorrect }
      };

      return {
        ...prev,
        solvedQuestions: newSolved,
        totalQuestionsSolved: alreadySolved ? prev.totalQuestionsSolved : prev.totalQuestionsSolved + 1,
        totalCorrect: isCorrect
          ? alreadySolved && alreadySolved.isCorrect
            ? prev.totalCorrect
            : prev.totalCorrect + 1
          : alreadySolved && alreadySolved.isCorrect
          ? prev.totalCorrect - 1
          : prev.totalCorrect,
        totalWrong: !isCorrect
          ? alreadySolved && !alreadySolved.isCorrect
            ? prev.totalWrong
            : prev.totalWrong + 1
          : alreadySolved && !alreadySolved.isCorrect
          ? prev.totalWrong - 1
          : prev.totalWrong
      };
    });
  };

  // Add / Remove Mistake
  const handleAddMistake = (qId: string) => {
    setStats((prev) => {
      let newMistakes = prev.mistakeQuestionIds;
      if (!newMistakes.includes(qId)) {
        newMistakes = [...newMistakes, qId];
      }

      // Check if question is a vocabulary question or matches a word in YDS_VOCABULARY_LIST
      let newBookmarked = prev.bookmarkedWords;
      let newPending = prev.pendingReviewVocabIds;

      const q = getUnifiedQuestionById(qId);
      if (q) {
        const correctText = q.options[q.answer]?.trim().toLowerCase();
        if (correctText) {
          const matched = YDS_VOCABULARY_LIST.find((w) => {
            const wText = w.word.toLowerCase();
            return wText === correctText || correctText.startsWith(wText) || wText.startsWith(correctText);
          });
          if (matched) {
            if (!newBookmarked.includes(matched.id)) {
              newBookmarked = [...newBookmarked, matched.id];
            }
            if (!newPending.includes(matched.id)) {
              newPending = [...newPending, matched.id];
            }
          }
        }
      }

      return {
        ...prev,
        mistakeQuestionIds: newMistakes,
        bookmarkedWords: newBookmarked,
        pendingReviewVocabIds: newPending
      };
    });
  };

  const handleRemoveMistake = (qId: string) => {
    setStats((prev) => ({
      ...prev,
      mistakeQuestionIds: prev.mistakeQuestionIds.filter((id) => id !== qId)
    }));
  };

  // Vocab Drill Handlers
  const handleMarkKnown = (wordId: string) => {
    setStats((prev) => {
      if (prev.knownVocabIds.includes(wordId)) return prev;
      return {
        ...prev,
        knownVocabIds: [...prev.knownVocabIds, wordId]
      };
    });
  };

  const handleMarkPendingReview = (wordId: string) => {
    setStats((prev) => {
      if (prev.pendingReviewVocabIds.includes(wordId)) return prev;
      return {
        ...prev,
        pendingReviewVocabIds: [...prev.pendingReviewVocabIds, wordId]
      };
    });
  };

  const handleRemovePendingReview = (wordId: string) => {
    setStats((prev) => ({
      ...prev,
      pendingReviewVocabIds: prev.pendingReviewVocabIds.filter((id) => id !== wordId)
    }));
  };

  // Calculate SRS Due Count for badge
  const dueCount = Object.values(srsData).filter((item) => SRSEngine.isDueToday(item)).length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
      {/* Top Navigation */}
      <Navbar
        stats={stats}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
        onOpenSyncModal={() => setIsSyncModalOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 pt-6">
        {activeTab === 'daily' && (
          <DailyPlanView
            completedDays={stats.completedDays}
            onToggleDayCompleted={handleToggleDayCompleted}
            onNavigateToVocabDay={(day) => {
              setVocabDayFilter(day);
              setActiveTab('vocab');
            }}
            onNavigateToTactic={(type) => {
              setTacticFilter(type as QuestionType);
              setActiveTab('tactics');
            }}
            onNavigateToPractice={(day) => {
              setPracticeTypeFilter(undefined);
              setActiveTab('practice');
            }}
          />
        )}

        {activeTab === 'vocab' && (
          <VocabFlashcardView
            initialDay={vocabDayFilter}
            initialViewMode={vocabInitialViewMode}
            srsData={srsData}
            onUpdateSRS={handleUpdateSRS}
            bookmarkedWords={stats.bookmarkedWords}
            onToggleBookmark={handleToggleBookmark}
            onNavigateToDrill={() => setActiveTab('vocab_drill')}
          />
        )}

        {activeTab === 'vocab_drill' && (
          <VocabDrillView
            knownVocabIds={stats.knownVocabIds}
            pendingReviewVocabIds={stats.pendingReviewVocabIds}
            bookmarkedWordIds={stats.bookmarkedWords}
            onMarkKnown={handleMarkKnown}
            onMarkPendingReview={handleMarkPendingReview}
            onRemovePendingReview={handleRemovePendingReview}
            onToggleBookmark={handleToggleBookmark}
            onAddMistakeWord={(wId) => {
              handleMarkPendingReview(wId);
              handleToggleBookmark(wId, true);
            }}
            onAddMistake={handleAddMistake}
            onNavigateToFlashcards={(mode) => {
              setVocabInitialViewMode(mode || 'flashcard');
              setActiveTab('vocab');
            }}
          />
        )}

        {activeTab === 'reading_lab' && (
          <ReadingLabView onAddMistake={handleAddMistake} />
        )}

        {activeTab === 'mock_exam' && (
          <FullMockExamView
            onAddMistake={handleAddMistake}
            onSaveExamResult={(res) => {
              setStats((prev) => ({
                ...prev,
                mockExamResults: [...(prev.mockExamResults || []), res],
                totalQuestionsSolved: prev.totalQuestionsSolved + res.correctCount + res.wrongCount,
                totalCorrect: prev.totalCorrect + res.correctCount,
                totalWrong: prev.totalWrong + res.wrongCount
              }));
            }}
          />
        )}

        {activeTab === 'tactics' && (
          <TacticsView
            initialType={tacticFilter}
            initialMode="tactic"
            mistakeIds={stats.mistakeQuestionIds}
            onAddMistake={handleAddMistake}
            onRemoveMistake={handleRemoveMistake}
            onRecordQuestionResult={handleRecordQuestionResult}
            onSelectPracticeType={(type) => {
              setPracticeTypeFilter(type);
              setActiveTab('practice');
            }}
          />
        )}

        {activeTab === 'practice' && (
          <TacticsView
            initialType={practiceTypeFilter}
            initialMode="practice"
            mistakeIds={stats.mistakeQuestionIds}
            onAddMistake={handleAddMistake}
            onRemoveMistake={handleRemoveMistake}
            onRecordQuestionResult={handleRecordQuestionResult}
            onSelectPracticeType={(type) => {
              setPracticeTypeFilter(type);
            }}
          />
        )}

        {activeTab === 'mistakes' && (
          <MistakesView
            mistakeQuestionIds={stats.mistakeQuestionIds}
            bookmarkedWords={stats.bookmarkedWords}
            pendingReviewWords={stats.pendingReviewVocabIds}
            onRemoveMistake={handleRemoveMistake}
            onRemoveBookmark={(wId) => {
              handleToggleBookmark(wId);
              handleRemovePendingReview(wId);
            }}
            onMarkWordKnown={(wId) => {
              handleMarkKnown(wId);
              handleRemovePendingReview(wId);
              setStats((prev) => ({
                ...prev,
                bookmarkedWords: prev.bookmarkedWords.filter((id) => id !== wId)
              }));
            }}
            onNavigateToPractice={() => setActiveTab('practice')}
            onNavigateToVocab={() => setActiveTab('vocab_drill')}
          />
        )}
      </main>

      {/* iOS & Mobile Bottom Tab Navigation */}
      <BottomTabBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mistakesCount={stats.mistakeQuestionIds.length}
        pendingReviewCount={stats.pendingReviewVocabIds.length}
      />

      {/* PWA / Native Installation Guide Modal */}
      <InstallPromptModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
      />

      {/* Progress Backup & Cross-Device Sync Modal */}
      <SyncModal
        isOpen={isSyncModalOpen}
        onClose={() => setIsSyncModalOpen(false)}
        stats={stats}
        srsData={srsData}
        onRestore={handleRestoreBackup}
      />
    </div>
  );
};
export default App;
