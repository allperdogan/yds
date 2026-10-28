import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Download,
  Upload,
  Cloud,
  Smartphone,
  ShieldCheck,
  RefreshCw,
  AlertCircle,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { UserStats, SRSItem } from '../types';
import { SyncService, BackupPayload } from '../services/syncService';

interface SyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: UserStats;
  srsData: Record<string, SRSItem>;
  onRestore: (payload: BackupPayload) => void;
}

export const SyncModal: React.FC<SyncModalProps> = ({
  isOpen,
  onClose,
  stats,
  srsData,
  onRestore
}) => {
  const [activeTab, setActiveTab] = useState<'export' | 'import' | 'guide'>('export');
  const [copied, setCopied] = useState<boolean>(false);
  const [importCode, setImportCode] = useState<string>('');
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  if (!isOpen) return null;

  const currentBackupCode = SyncService.generateBackupCode(stats, srsData);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(currentBackupCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownloadFile = () => {
    SyncService.downloadBackupFile(stats, srsData);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const payload = await SyncService.parseBackupFile(file);
    if (payload) {
      onRestore(payload);
      setImportStatus('success');
      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      setImportStatus('error');
      setErrorMessage('Geçersiz yedek dosyası formatı.');
    }
  };

  const handleRestoreFromText = () => {
    if (!importCode.trim()) {
      setImportStatus('error');
      setErrorMessage('Lütfen bir senkronizasyon kodu yapıştırın.');
      return;
    }

    const payload = SyncService.restoreFromBackupCode(importCode);
    if (payload) {
      onRestore(payload);
      setImportStatus('success');
      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      setImportStatus('error');
      setErrorMessage('Kod çözülemedi. Lütfen eksiksiz kopyaladığınızdan emin olun.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-200 dark:border-sky-800">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                İlerleme Yedekleme & Cihaz Eşitleme
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Verileriniz asla kaybolmaz, telefonunuz ve bilgisayarınız arasında aktarılabilir
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex p-2 bg-slate-100 dark:bg-slate-800/60 m-4 rounded-xl text-xs font-bold gap-1">
          <button
            onClick={() => setActiveTab('export')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              activeTab === 'export'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            📤 Yedek Al (Dışa Aktar)
          </button>
          <button
            onClick={() => setActiveTab('import')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              activeTab === 'import'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            📥 Geri Yükle (İçe Aktar)
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              activeTab === 'guide'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🌐 7/24 Dışarıda Açma
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 pt-0 overflow-y-auto space-y-4">
          {/* Current Stats Summary Pill */}
          <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-2 text-center text-xs">
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold block">🔥 Streak</span>
              <span className="font-extrabold text-slate-900 dark:text-white text-sm">{stats.streak} Gün</span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold block">🧠 Öğrenilen</span>
              <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-sm">{stats.knownVocabIds?.length || 0} Kelime</span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold block">⏱️ Çözülen</span>
              <span className="font-extrabold text-sky-600 dark:text-sky-400 text-sm">{stats.totalQuestionsSolved} Soru</span>
            </div>
          </div>

          {/* 1. EXPORT TAB */}
          {activeTab === 'export' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Tüm çözdüğünüz sorular, SRS aralıklı tekrar aralıkları, ezberlediğiniz kelimeler ve deneme sonuçlarınız bu kodun içinde şifrelenmiştir.
              </p>

              {/* Copy Code Box */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Cihazlar Arası Hızlı Kod:</span>
                  <span className="text-[10px] text-slate-400">Tek tıkla kopyala</span>
                </div>
                <div className="relative">
                  <textarea
                    readOnly
                    rows={3}
                    value={currentBackupCode}
                    className="w-full p-3 font-mono text-[11px] rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 select-all focus:outline-none"
                  />
                  <button
                    onClick={handleCopyCode}
                    className="absolute right-2.5 bottom-3.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Kopyalandı!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Kodu Kopyala</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  💡 Bu kodu kopyalayıp WhatsApp veya Notlar ile iPhone'unuza gönderin. iPhone'da "İçe Aktar" kısmına yapıştırdığınız an tüm ilerlemeniz anında yüklenir!
                </p>
              </div>

              {/* Download JSON Button */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={handleDownloadFile}
                  className="w-full py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4 text-sky-500" />
                  <span>Yedek Dosyası Olarak İndir (.json)</span>
                </button>
              </div>
            </div>
          )}

          {/* 2. IMPORT TAB */}
          {activeTab === 'import' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Bilgisayarınızdan aldığınız kodu buraya yapıştırarak veya yedek dosyasını yükleyerek tüm ilerlemenizi anında geri yükleyebilirsiniz.
              </p>

              {/* Paste Text Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                  Senkronizasyon Kodunu Buraya Yapıştırın:
                </label>
                <textarea
                  rows={4}
                  value={importCode}
                  onChange={(e) => {
                    setImportCode(e.target.value);
                    setImportStatus('idle');
                  }}
                  placeholder="Kopyaladığınız kodu buraya yapıştırın..."
                  className="w-full p-3 font-mono text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />

                {importStatus === 'error' && (
                  <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2 border border-rose-200 dark:border-rose-900">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {importStatus === 'success' && (
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2 border border-emerald-200 dark:border-emerald-900">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Tüm verileriniz ve SRS tekrarlarınız başarıyla geri yüklendi!</span>
                  </div>
                )}

                <button
                  onClick={handleRestoreFromText}
                  className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-extrabold shadow-sm transition-transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>İlerlemeyi Geri Yükle</span>
                </button>
              </div>

              {/* Upload File Section */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-center">
                <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors">
                  <Upload className="w-4 h-4" />
                  <span>Yedek Dosyası Seç (.json)</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          )}

          {/* 3. PERMANENT GUIDE TAB */}
          {activeTab === 'guide' && (
            <div className="space-y-3.5 text-xs">
              <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 space-y-2">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-extrabold text-sm">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  <span>Farklı Ağda & Dışarıda 7/24 Kesintisiz Erişim</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  Uygulama GitHub Pages'te <strong>ücretsiz ve sınırsız</strong> yayında: <strong>allperdogan.github.io/yds</strong>. Bilgisayarın kapalıyken de her ağda açılır, bir kez açtıktan sonra internetsiz de çalışır.
                </p>
              </div>

              {/* Method 1: Install as app */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-black">1</span>
                  <span>Telefona Uygulama Olarak Kur</span>
                </span>
                <ol className="list-decimal list-inside space-y-1 text-slate-600 dark:text-slate-400 text-[11px] pl-1">
                  <li>iPhone'da linki <strong>Safari</strong>'de aç, <strong>Paylaş → Ana Ekrana Ekle</strong> de.</li>
                  <li>Android'de Chrome menüsünden <strong>Uygulamayı yükle</strong> de.</li>
                  <li>Bundan sonra hep ana ekrandaki simgeden aç: ilerlemen o simgenin içinde saklanır.</li>
                </ol>
              </div>

              {/* Method 2: Where progress lives */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-sky-600 text-white text-[10px] flex items-center justify-center font-black">2</span>
                  <span>İlerlemen Nerede Saklanıyor?</span>
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                  İlerlemen sunucuda değil, <strong>bu cihazın bu tarayıcısında</strong> saklanır. Telefon, bilgisayar, Safari ve ana ekran simgesi birbirini görmez. Cihaz değiştirirken veya eski linkten yenisine geçerken <strong>Yedek Al</strong> ile kodu kopyala, diğer tarafta <strong>Geri Yükle</strong>'ye yapıştır. Ara ara .json yedeği indirmek de iyi bir sigortadır.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Ücretsiz ve gizli: verilerin yalnızca sende</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-300 transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
