import React from 'react';
import { Printer, ArrowLeft, School, User, Briefcase, FileText, Upload, CheckSquare, ShieldCheck } from 'lucide-react';

interface HelpManualProps {
  onBack: () => void;
}

export const HelpManual: React.FC<HelpManualProps> = ({ onBack }) => {
  
  const handlePrint = () => {
    window.print();
  };

  const ScreenshotPlaceholder = ({ label }: { label: string }) => (
    <div className="w-full h-48 bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-400 my-4 print:border-slate-200">
        <span className="text-xs uppercase font-bold tracking-wider mb-2">Paparan Skrin</span>
        <p className="font-medium text-sm text-center px-4">{label}</p>
        <p className="text-[10px] mt-1">(Gambar akan muncul di sini dalam sistem sebenar)</p>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto pb-12 print:max-w-none print:pb-0">
        
        {/* Header - Hidden on Print */}
        <div className="flex justify-between items-center mb-8 print:hidden">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Panduan Pengguna Sistem</h1>
                <p className="text-gray-500 text-sm">Manual operasi KokuLite Digital (SMK)</p>
            </div>
            <div className="flex gap-3">
                <button 
                    onClick={onBack}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                    <ArrowLeft size={18} /> Kembali
                </button>
                <button 
                    onClick={handlePrint}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 shadow-md transition-colors flex items-center gap-2"
                >
                    <Printer size={18} /> Cetak / Simpan PDF
                </button>
            </div>
        </div>

        {/* DOCUMENT CONTAINER - A4 Style */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 print:shadow-none print:border-none print:p-0">
            
            {/* TITLE PAGE */}
            <div className="text-center border-b-2 border-gray-100 pb-8 mb-8">
                <div className="inline-flex p-4 bg-blue-600 text-white rounded-2xl mb-4 print:text-black print:bg-transparent print:border print:border-black">
                    <School size={48} />
                </div>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2 uppercase tracking-tight">Manual Pengguna</h1>
                <h2 className="text-2xl font-bold text-blue-600 mb-4 print:text-black">KokuLite Digital (Sekolah Menengah)</h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    Panduan lengkap penggunaan sistem pengurusan kokurikulum untuk Guru Penasihat, Setiausaha Kokurikulum dan Pentadbir Sekolah Menengah.
                </p>
            </div>

            {/* TABLE OF CONTENTS */}
            <div className="bg-slate-50 p-6 rounded-xl mb-12 print:bg-transparent print:border print:border-gray-200">
                <h3 className="font-bold text-gray-800 mb-4 uppercase text-sm">Isi Kandungan</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                    <li>1. Pengenalan & Pendaftaran</li>
                    <li>2. Peranan: Guru Penasihat</li>
                    <li>3. Peranan: Setiausaha Kokurikulum</li>
                    <li>4. Peranan: PK Kokurikulum</li>
                    <li>5. Soalan Lazim (FAQ)</li>
                </ul>
            </div>

            {/* SECTION 1: PENDAFTARAN */}
            <section className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 border-l-4 border-blue-500 pl-3">
                    1. Pendaftaran & Log Masuk
                </h3>
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                    <p>
                        Sistem KokuLite menggunakan konsep <b>"Satu Kod Sekolah"</b>. Semua guru perlu mendaftar menggunakan Kod Sekolah yang sama untuk berada dalam pangkalan data yang sama.
                    </p>
                    <div className="pl-4 border-l-2 border-gray-200 ml-2 space-y-2">
                        <p><b>Langkah 1:</b> Di halaman utama, klik "Daftar Sekolah" jika anda belum mempunyai akaun.</p>
                        <p><b>Langkah 2:</b> Masukkan <b>Kod Sekolah (Cth: MBA1234)</b> yang betul.</p>
                        <p><b>Langkah 3:</b> Pilih jawatan anda:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><b>Guru Penasihat:</b> Perlu mendaftarkan nama Unit (Cth: Kadet Polis).</li>
                            <li><b>Setiausaha / PK Koku:</b> Hanya seorang pengguna dibenarkan untuk setiap jawatan ini bagi satu sekolah.</li>
                        </ul>
                    </div>
                    <ScreenshotPlaceholder label="Halaman Pendaftaran Akaun Baru" />
                </div>
            </section>

            <hr className="my-8 border-gray-100 print:hidden"/>

            {/* SECTION 2: GURU PENASIHAT */}
            <section className="mb-12 break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 text-blue-700 rounded-lg print:bg-gray-100 print:text-black"><User size={24}/></div>
                    <h3 className="text-2xl font-bold text-gray-900">2. Modul Guru Penasihat</h3>
                </div>

                <div className="space-y-6">
                    {/* 2.1 Dashboard */}
                    <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2">2.1 Dashboard Utama</h4>
                        <p className="text-gray-600 text-sm mb-3">
                            Paparan pertama selepas log masuk. Memaparkan ringkasan data bagi unit yang anda pegang.
                        </p>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                            <li><b>Keahlian:</b> Jumlah pelajar berdaftar dalam unit anda.</li>
                            <li><b>Aktiviti:</b> Bilangan sesi perjumpaan yang telah direkodkan.</li>
                            <li><b>Notifikasi:</b> Papan kenyataan digital daripada pentadbir sekolah.</li>
                        </ul>
                        <ScreenshotPlaceholder label="Dashboard Guru Penasihat - Paparan Statistik Unit" />
                    </div>

                    {/* 2.2 Attendance */}
                    <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2">2.2 Merekod Kehadiran</h4>
                        <p className="text-gray-600 text-sm mb-3">
                            Menu: <b>Rekod Kehadiran</b> di sisi kiri.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm print:bg-transparent print:border-gray-300">
                            <p><b>Cara Guna:</b></p>
                            <ol className="list-decimal pl-5 mt-2 space-y-1">
                                <li>Klik butang <b>"Rekod Sesi Baru"</b>.</li>
                                <li>Masukkan <b>Tajuk Aktiviti</b> (Cth: Latihan Kawad Kaki).</li>
                                <li>Senarai nama pelajar akan terpapar. Klik pada nama pelajar untuk menanda kehadiran (Hijau = Hadir).</li>
                                <li>Tekan <b>"Simpan Rekod"</b>.</li>
                            </ol>
                        </div>
                        <ScreenshotPlaceholder label="Modul Kehadiran - Menanda Nama Pelajar" />
                    </div>

                    {/* 2.3 Reports */}
                    <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2">2.3 Laporan Aktiviti & AI</h4>
                        <p className="text-gray-600 text-sm mb-3">
                            Menu: <b>Laporan Aktiviti</b>. Selepas kehadiran direkodkan, guru perlu menghantar laporan.
                        </p>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                            <li><b>Jana Automatik (AI):</b> Masukkan kata kunci aktiviti, dan sistem akan menulis ayat laporan yang lengkap secara automatik.</li>
                            <li><b>Muat Naik Gambar:</b> Boleh memuat naik sehingga 5 keping gambar sebagai bukti.</li>
                            <li><b>Status Laporan:</b> 
                                <span className="ml-1 text-xs font-bold bg-yellow-100 px-1 rounded">DRAF</span> (Belum hantar),
                                <span className="ml-1 text-xs font-bold bg-green-100 px-1 rounded">DIHANTAR</span> (Menunggu semakan SU).
                            </li>
                        </ul>
                        <ScreenshotPlaceholder label="Editor Laporan dengan Bantuan AI" />
                    </div>
                </div>
            </section>

            <div className="page-break print:block hidden h-8"></div>

            {/* SECTION 3: SU KOKU */}
            <section className="mb-12 break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-100 text-purple-700 rounded-lg print:bg-gray-100 print:text-black"><Briefcase size={24}/></div>
                    <h3 className="text-2xl font-bold text-gray-900">3. Modul Setiausaha (SU)</h3>
                </div>

                <div className="space-y-6">
                    {/* 3.1 Setup */}
                    <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2">3.1 Persediaan Awal (Import Data)</h4>
                        <p className="text-gray-600 text-sm mb-3">
                            Tugas utama SU adalah memuat naik data induk sekolah.
                        </p>
                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 text-sm print:bg-transparent print:border-gray-300">
                            <p><b>Menu: Import Data</b></p>
                            <ol className="list-decimal pl-5 mt-2 space-y-1">
                                <li>Muat turun <b>Template Excel</b> yang disediakan.</li>
                                <li>Isi maklumat pelajar, tingkatan/kelas, dan unit dalam Excel tersebut.</li>
                                <li>Muat naik semula fail ke dalam sistem.</li>
                                <li>Sistem akan secara automatik mencipta Unit, mendaftarkan Pelajar, dan melantik Guru (jika ada dalam Excel).</li>
                            </ol>
                        </div>
                        <ScreenshotPlaceholder label="Paparan Import Data Excel" />
                    </div>

                    {/* 3.2 Report Review */}
                    <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2">3.2 Semakan Laporan</h4>
                        <p className="text-gray-600 text-sm mb-3">
                            Menu: <b>Laporan / Analisis</b>.
                        </p>
                        <p className="text-sm text-gray-600">SU bertanggungjawab menyemak laporan yang dihantar oleh guru.</p>
                         <ul className="list-disc pl-5 text-sm text-gray-600 mt-2 space-y-1">
                            <li><b>Sahkan (Verify):</b> Jika laporan lengkap, hantar ke PK Kokurikulum.</li>
                            <li><b>Minta Pembetulan (Reject):</b> Jika gambar tidak jelas atau laporan terlalu ringkas, tulis ulasan dan hantar kembali kepada guru.</li>
                        </ul>
                         <ScreenshotPlaceholder label="Antaramuka Semakan Laporan SU" />
                    </div>
                </div>
            </section>

            <div className="page-break print:block hidden h-8"></div>

            {/* SECTION 4: PK KOKU */}
            <section className="mb-12 break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-100 text-green-700 rounded-lg print:bg-gray-100 print:text-black"><ShieldCheck size={24}/></div>
                    <h3 className="text-2xl font-bold text-gray-900">4. Modul PK Kokurikulum</h3>
                </div>

                <div className="space-y-6">
                    {/* 4.1 Dashboard */}
                    <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2">4.1 Pemantauan KPI</h4>
                        <p className="text-gray-600 text-sm mb-3">
                            Dashboard PK memaparkan graf analisis kehadiran dan status penghantaran laporan mengikut unit.
                        </p>
                        <ScreenshotPlaceholder label="Dashboard PK - Carta Analisis" />
                    </div>

                     {/* 4.2 Validation */}
                     <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2">4.2 Pengesahan Akhir</h4>
                        <p className="text-gray-600 text-sm mb-3">
                            Menu: <b>Pengesahan</b>.
                        </p>
                        <p className="text-sm text-gray-600">Laporan yang telah disemak oleh SU akan muncul di sini untuk pengesahan akhir pentadbir sebelum dicetak.</p>
                    </div>

                    {/* 4.3 Printing */}
                    <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2">4.3 Cetakan & Muat Turun</h4>
                        <p className="text-gray-600 text-sm mb-3">
                            Menu: <b>Cetakan / Laporan</b>.
                        </p>
                        <p className="text-sm text-gray-600">PK boleh memuat turun data dalam format Excel untuk tujuan fail sekolah atau laporan PPD:</p>
                        <ul className="list-disc pl-5 text-sm text-gray-600 mt-2 space-y-1">
                            <li>Analisis Kehadiran Bulanan.</li>
                            <li>Laporan Aktiviti Mingguan.</li>
                            <li>Data Keahlian Pelajar.</li>
                            <li>Rekod Pencapaian Sekolah.</li>
                        </ul>
                        <ScreenshotPlaceholder label="Menu Muat Turun Laporan Excel" />
                    </div>
                </div>
            </section>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200 text-center print:border-none">
                <p className="text-sm text-gray-500 font-medium">Dokumen ini dijana secara automatik oleh Sistem KokuLite Digital.</p>
                <p className="text-xs text-gray-400 mt-1">&copy; {new Date().getFullYear()} Hak Cipta Terpelihara.</p>
            </div>
        </div>
    </div>
  );
};