import React from 'react';
import { X, Smartphone, Monitor, Share, PlusSquare, Download } from 'lucide-react';

interface InstallPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallPromptModal: React.FC<InstallPromptModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 text-xs font-bold">
            <Download className="w-3.5 h-3.5" />
            <span>PWA Native Kurulum Rehberi</span>
          </div>
          <h3 className="text-xl font-black text-slate-900 dark:text-white">
            iOS ve Bilgisayara Nasıl Yüklenir?
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Tek tıkla App Store beklemeden ve internet bağımlılığı olmadan native bir app gibi kullanın.
          </p>
        </div>

        {/* Platform 1: iPhone / iOS Safari */}
        <div className="p-4 rounded-2xl bg-sky-50/60 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/50 space-y-3">
          <div className="flex items-center gap-2 text-sky-700 dark:text-sky-300 font-extrabold text-sm">
            <Smartphone className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <span>iPhone / iPad (Safari)</span>
          </div>
          <ol className="text-xs text-slate-700 dark:text-slate-300 space-y-2 list-decimal list-inside font-medium leading-relaxed">
            <li>
              Uygulamayı iPhone'unda <strong>Safari</strong> tarayıcısında aç.
            </li>
            <li className="flex items-center gap-1.5">
              <span>Ekranın altındaki</span>
              <Share className="w-3.5 h-3.5 text-sky-600 inline" />
              <span><strong>"Paylaş" (Share)</strong> simgesine dokun.</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span>Açılan menüyü kaydırıp</span>
              <PlusSquare className="w-3.5 h-3.5 text-sky-600 inline" />
              <span><strong>"Ana Ekrana Ekle"</strong>yi seç.</span>
            </li>
            <li>
              Sağ üstteki <strong>"Ekle"</strong> butonuna bas. Logo ana ekranına yerleşir, tam ekran açılır!
            </li>
          </ol>
        </div>

        {/* Platform 2: Bilgisayar (Chrome / Edge / Mac) */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-sm">
            <Monitor className="w-5 h-5 text-indigo-500" />
            <span>Bilgisayar (PC / Mac - Chrome / Edge)</span>
          </div>
          <ol className="text-xs text-slate-700 dark:text-slate-300 space-y-2 list-decimal list-inside font-medium leading-relaxed">
            <li>
              Tarayıcının üst adres çubuğunun sağ tarafındaki <strong>"Uygulamayı Yükle" (Install App)</strong> simgesine tıklayın.
            </li>
            <li>
              <strong>"Yükle"</strong> butonuna basın. Uygulama masaüstü yazılımı gibi bağımsız pencerede açılacaktır.
            </li>
          </ol>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-sky-600 text-white rounded-xl font-bold text-xs hover:bg-sky-700 transition-colors"
        >
          Anladım, Kapat
        </button>
      </div>
    </div>
  );
};
