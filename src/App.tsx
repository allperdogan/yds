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
import { TodayView } from './components/TodayView';
import { StudyHubView } from './components/StudyHubView';
import { TopicPracticeView } from './components/TopicPracticeView';
import { VocabListsView } from './components/VocabListsView';
import { countDueWords, recordWordReview } from './services/vocabReview';
import { getTopicById, topicForType } from './services/studyTopics';

import { UserStats, SRSItem, QuestionType } from './types';
import { StorageService } from './services/storageService';
import { SRSEngine } from './services/srsEngine';
import { BackupPayload } from './services/syncService';
import { getUnifiedQuestionById } from './data/ydsQuestions';
import { YDS_VOCABULARY_LIST } from './data/ydsVocabulary';
import { wordForms } from './services/vocabBlank';

export const App: React.FC = () => {
  const [activeTab, setActiveTabState] = useState<string>('today');
  const [studyTopicId, setStudyTopicId] = useState<string | undefined>(undefined);
  const [studyTopicMode, setStudyTopicMode] = useState<'new' | 'review' | undefined>(undefined);

  // Choosing a main tab always lands on its first screen.
  const setActiveTab = (tab: string) => {
    if (tab === 'study') setStudyTopicId(undefined);
    setActiveTabState(tab);
    window.scrollTo?.(0, 0);
  };

  const openTopic = (topicId: string, mode?: 'new' | 'review') => {
    setStudyTopicId(topicId);
    setStudyTopicMode(mode);
    setActiveTabState('study');
    window.scrollTo?.(0, 0);
  };

  const openVocabDrill = () => {
    setVocabDayFilter(undefined);
    setActiveTab('vocab_drill');
  };
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('yds_dark_mode') === 'true';
  });
  const [eyeCareMode, setEyeCareMode] = useState<boolean>(() => {
    return localStorage.getItem('yds_eyecare_mode') === 'true';
  });

  const [stats, setStats] = useState<UserStats>(() => StorageService.loadStats());
  const [srsData, setSrsData] = useState<Record<string, SRSItem>>(() => SRSEngine.loadSRSData());
  const [isInstallModalOpen, setIsInstallModalOpen] = useState<boolean>(false);
  const [isSyncModalOpen, setIsSyncModalOpen] = useState<boolean>(false);

  // Backups from older versions lack newer fields; fill them before use.
  const handleRestoreBackup = (payload: BackupPayload) => {
    const restored = StorageService.normalizeStats(payload.stats);
    setStats(restored);
    StorageService.saveStats(restored);
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

  // Apply eye-care sepia / anti-blue-light mode
  useEffect(() => {
    if (eyeCareMode) {
      document.documentElement.classList.add('theme-eyecare');
    } else {
      document.documentElement.classList.remove('theme-eyecare');
    }
    localStorage.setItem('yds_eyecare_mode', eyeCareMode ? 'true' : 'false');
  }, [eyeCareMode]);

  // Persist stats whenever changed
  useEffect(() => {
    StorageService.saveStats(stats);
  }, [stats]);

  // The streak counts days with at least one answered question, card or word.
  const markStudied = () => setStats((prev) => StorageService.withStudyToday(prev));

  // Persist SRS data
  const handleUpdateSRS = (newSRS: Record<string, SRSItem>) => {
    markStudied();
    setSrsData(newSRS);
    SRSEngine.saveSRSData(newSRS);

    // Flashcard grades feed the same word progress as the drill: a recalled
    // card counts as learned, a forgotten one goes back to "learning".
    const changed = Object.values(newSRS).filter((item) => item !== srsData[item.wordId]);
    const recalled = changed.filter((i) => i.repetition > 0).map((i) => i.wordId);
    const forgotten = changed.filter((i) => i.repetition === 0 && i.lastReviewed).map((i) => i.wordId);

    const mastered = Object.values(newSRS).filter((i) => i.state === 'mastered').length;
    setStats((prev) => {
      const reviews = { ...(prev.vocabReviews || {}) };
      recalled.forEach((id) => (reviews[id] = recordWordReview(reviews[id], true)));
      forgotten.forEach((id) => (reviews[id] = recordWordReview(reviews[id], false)));
      const known = new Set(prev.knownVocabIds);
      const pending = new Set(prev.pendingReviewVocabIds);
      recalled.forEach((id) => {
        known.add(id);
        pending.delete(id);
      });
      forgotten.forEach((id) => pending.add(id));
      return {
        ...prev,
        masteredWordsCount: mastered,
        totalCardsReviewed: prev.totalCardsReviewed + 1,
        knownVocabIds: [...known],
        pendingReviewVocabIds: [...pending],
        vocabReviews: reviews
      };
    });
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
  const handleRecordQuestionResult = (questionId: string, selected: string, isCorrect: boolean, seconds?: number) => {
    markStudied();
    setStats((prev) => {
      const alreadySolved = prev.solvedQuestions[questionId];
      const newSolved = {
        ...prev.solvedQuestions,
        [questionId]: {
          selected,
          isCorrect,
          firstIsCorrect: alreadySolved ? alreadySolved.firstIsCorrect ?? alreadySolved.isCorrect : isCorrect,
          ...(alreadySolved?.seconds || seconds ? { seconds: alreadySolved?.seconds || seconds } : {})
        }
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

  // First answer per word feeds the score estimate's vocabulary rate.
  const handleRecordVocabAnswer = (wordId: string, isCorrect: boolean) => {
    markStudied();
    setStats((prev) => {
      const first = prev.vocabFirstAnswers || {};
      if (wordId in first) return prev;
      return { ...prev, vocabFirstAnswers: { ...first, [wordId]: isCorrect } };
    });
  };

  // Every drill answer moves the word's next review: known words come back
  // rarely, missed ones right away.
  const handleRecordVocabReview = (wordId: string, isCorrect: boolean) => {
    markStudied();
    setStats((prev) => {
      const reviews = prev.vocabReviews || {};
      return { ...prev, vocabReviews: { ...reviews, [wordId]: recordWordReview(reviews[wordId], isCorrect) } };
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
          // Only the word itself or an inflected form ("inspired" -> inspire),
          // so a missed preposition like "in" never flags "indigenous".
          const matched = YDS_VOCABULARY_LIST.find((w) => {
            const wText = w.word.toLowerCase();
            return wText === correctText || (!wText.includes(' ') && wordForms(wText).includes(correctText));
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

  // Reset entire progress to Day 0
  const handleResetProgress = () => {
    const fresh = StorageService.getInitialStats();
    setStats(fresh);
    StorageService.saveStats(fresh);
    setSrsData({});
    SRSEngine.saveSRSData({});
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

  // Words the vocabulary drill will bring back first today.
  const dueCount = countDueWords(stats.vocabReviews || {}, stats.pendingReviewVocabIds);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
      {/* Top Navigation */}
      <Navbar
        stats={stats}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        eyeCareMode={eyeCareMode}
        onToggleEyeCare={() => setEyeCareMode(!eyeCareMode)}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
        onOpenSyncModal={() => setIsSyncModalOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 pt-6">
        {activeTab === 'today' && (
          <TodayView
            stats={stats}
            dueWordCount={dueCount}
            onOpenTopic={openTopic}
            onOpenVocab={openVocabDrill}
            onOpenFlashcards={openVocabDrill}
            onOpenPlan={() => setActiveTab('daily')}
          />
        )}

        {activeTab === 'study' && !studyTopicId && (
          <StudyHubView
            solvedQuestions={stats.solvedQuestions}
            mistakeQuestionIds={stats.mistakeQuestionIds}
            knownVocabIds={stats.knownVocabIds}
            pendingReviewVocabIds={stats.pendingReviewVocabIds}
            onOpenTopic={openTopic}
            onOpenVocab={openVocabDrill}
            onOpenWordLists={() => setActiveTab('vocab_lists')}
            onOpenTactics={() => {
              setTacticFilter(undefined);
              setActiveTab('tactics');
            }}
          />
        )}

        {activeTab === 'vocab_lists' && (
          <VocabListsView
            knownVocabIds={stats.knownVocabIds}
            pendingReviewVocabIds={stats.pendingReviewVocabIds}
            vocabReviews={stats.vocabReviews || {}}
            vocabFirstAnswers={stats.vocabFirstAnswers}
            onBack={() => setActiveTab('study')}
            onStudy={openVocabDrill}
          />
        )}

        {activeTab === 'study' && studyTopicId && getTopicById(studyTopicId) && (
          <TopicPracticeView
            key={`${studyTopicId}:${studyTopicMode ?? ''}`}
            topic={getTopicById(studyTopicId)!}
            initialMode={studyTopicMode}
            solvedQuestions={stats.solvedQuestions}
            mistakeIds={stats.mistakeQuestionIds}
            onRecordQuestionResult={handleRecordQuestionResult}
            onAddMistake={handleAddMistake}
            onRemoveMistake={handleRemoveMistake}
            onBack={() => setActiveTab('study')}
            onOpenTactic={(type) => {
              setTacticFilter(type);
              setActiveTab('tactics');
            }}
          />
        )}

        {activeTab === 'daily' && (
          <DailyPlanView
            completedDays={stats.completedDays}
            onToggleDayCompleted={handleToggleDayCompleted}
            onResetProgress={handleResetProgress}
            onBack={() => setActiveTab('today')}
            onNavigateToVocabDay={(day) => {
              setVocabDayFilter(day);
              setActiveTab('vocab');
            }}
            onNavigateToTactic={(type) => {
              setTacticFilter(type as QuestionType);
              setActiveTab('tactics');
            }}
            onNavigateToPractice={() => setActiveTab('study')}
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
            initialDay={vocabDayFilter}
            knownVocabIds={stats.knownVocabIds}
            pendingReviewVocabIds={stats.pendingReviewVocabIds}
            bookmarkedWordIds={stats.bookmarkedWords}
            vocabReviews={stats.vocabReviews}
            onMarkKnown={handleMarkKnown}
            onRecordVocabAnswer={handleRecordVocabAnswer}
            onRecordReview={handleRecordVocabReview}
            onOpenWordLists={() => setActiveTab('vocab_lists')}
            onBack={() => setActiveTab('study')}
            onMarkPendingReview={handleMarkPendingReview}
            onRemovePendingReview={handleRemovePendingReview}
            onToggleBookmark={handleToggleBookmark}
            onAddMistakeWord={(wId) => {
              handleMarkPendingReview(wId);
              handleToggleBookmark(wId, true);
            }}
            onAddMistake={handleAddMistake}
            onRemoveMistake={handleRemoveMistake}
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
              markStudied();
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
            onBack={() => setActiveTab('study')}
            mistakeIds={stats.mistakeQuestionIds}
            onAddMistake={handleAddMistake}
            onRemoveMistake={handleRemoveMistake}
            onRecordQuestionResult={handleRecordQuestionResult}
            onSelectPracticeType={(type) => {
              const topic = topicForType(type);
              if (topic) openTopic(topic.id);
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
            onRecordQuestionResult={handleRecordQuestionResult}
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
            onNavigateToPractice={() => setActiveTab('study')}
            onNavigateToVocab={openVocabDrill}
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
