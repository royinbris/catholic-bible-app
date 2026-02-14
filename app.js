/**
 * Catholic Bible App - Core Logic (v3 - Robust Matching & Full Metadata)
 */

const BIBLE_METADATA = {
    testaments: [
        { id: 'old', name: '구약 성경', booksCount: 46 },
        { id: 'new', name: '신약 성경', booksCount: 27 }
    ],
    old: [
        { name: '창세기', chapters: 50, file: '01_Genesis.md' },
        { name: '탈출기', chapters: 40, file: '02_Exodus.md' },
        { name: '레위기', chapters: 27, file: '03_Leviticus.md' },
        { name: '민수기', chapters: 36, file: '04_Numbers.md' },
        { name: '신명기', chapters: 34, file: '05_Deuteronomy.md' },
        { name: '여호수아기', chapters: 24, file: '06_Joshua.md' },
        { name: '판관기', chapters: 21, file: '07_Judges.md' },
        { name: '룻기', chapters: 4, file: '08_Ruth.md' },
        { name: '사무엘기 상권', chapters: 31, file: '09_1Samuel.md' },
        { name: '사무엘기 하권', chapters: 24, file: '10_2Samuel.md' },
        { name: '열왕기 상권', chapters: 22, file: '11_1Kings.md' },
        { name: '열왕기 하권', chapters: 25, file: '12_2Kings.md' },
        { name: '역대기 상권', chapters: 29, file: '13_1Chronicles.md' },
        { name: '역대기 하권', chapters: 36, file: '14_2Chronicles.md' },
        { name: '에즈라기', chapters: 10, file: '15_Ezra.md' },
        { name: '느헤미야기', chapters: 13, file: '16_Nehemiah.md' },
        { name: '토빗기', chapters: 14, file: '17_Tobit.md' },
        { name: '유딧기', chapters: 16, file: '18_Judith.md' },
        { name: '에스테르기', chapters: 10, file: '19_Esther.md' },
        { name: '마카베오기 상권', chapters: 16, file: '20_1Maccabees.md' },
        { name: '마카베오기 하권', chapters: 15, file: '21_2Maccabees.md' },
        { name: '욥기', chapters: 42, file: '22_Job.md' },
        { name: '시편', chapters: 150, file: '23_Psalms.md' },
        { name: '잠언', chapters: 31, file: '24_Proverbs.md' },
        { name: '코헬렛', chapters: 12, file: '25_Ecclesiastes.md' },
        { name: '아가', chapters: 8, file: '26_SongOfSongs.md' },
        { name: '지혜서', chapters: 19, file: '27_Wisdom.md' },
        { name: '집회서', chapters: 51, file: '28_Sirach.md' },
        { name: '이사야서', chapters: 66, file: '29_Isaiah.md' },
        { name: '예레미야서', chapters: 52, file: '30_Jeremiah.md' },
        { name: '애가', chapters: 5, file: '31_Lamentations.md' },
        { name: '바룩서', chapters: 6, file: '32_Baruch.md' },
        { name: '에제키엘서', chapters: 48, file: '33_Ezekiel.md' },
        { name: '다니엘서', chapters: 14, file: '34_Daniel.md' },
        { name: '호세아서', chapters: 14, file: '35_Hosea.md' },
        { name: '요엘서', chapters: 4, file: '36_Joel.md' },
        { name: '아모스서', chapters: 9, file: '37_Amos.md' },
        { name: '오바드야서', chapters: 1, file: '38_Obadiah.md' },
        { name: '요나서', chapters: 4, file: '39_Jonah.md' },
        { name: '미카서', chapters: 7, file: '40_Micah.md' },
        { name: '나훔서', chapters: 3, file: '41_Nahum.md' },
        { name: '하바쿡서', chapters: 3, file: '42_Habakkuk.md' },
        { name: '스바니야서', chapters: 3, file: '43_Zephaniah.md' },
        { name: '하까이서', chapters: 2, file: '44_Haggai.md' },
        { name: '즈카르야서', chapters: 14, file: '45_Zechariah.md' },
        { name: '말라키서', chapters: 3, file: '46_Malachi.md' }
    ],
    new: [
        { name: '마태오 복음서', chapters: 28, file: '47_Matthew.md' },
        { name: '마르코 복음서', chapters: 16, file: '48_Mark.md' },
        { name: '루카 복음서', chapters: 24, file: '49_Luke.md' },
        { name: '요한 복음서', chapters: 21, file: '50_John.md' },
        { name: '사도행전', chapters: 28, file: '51_Acts.md' },
        { name: '로마 신자들에게 보낸 서간', chapters: 16, file: '52_Romans.md' },
        { name: '코린토 신자들에게 보낸 첫째 서간', chapters: 16, file: '53_1Corinthians.md' },
        { name: '코린토 신자들에게 보낸 둘째 서간', chapters: 13, file: '54_2Corinthians.md' },
        { name: '갈라티아 신자들에게 보낸 서간', chapters: 6, file: '55_Galatians.md' },
        { name: '에페소 신자들에게 보낸 서간', chapters: 6, file: '56_Ephesians.md' },
        { name: '필리피 신자들에게 보낸 서간', chapters: 4, file: '57_Philippians.md' },
        { name: '콜로새 신자들에게 보낸 서간', chapters: 4, file: '58_Colossians.md' },
        { name: '테살로니카 신자들에게 보낸 첫째 서간', chapters: 5, file: '59_1Thessalonians.md' },
        { name: '테살로니카 신자들에게 보낸 둘째 서간', chapters: 3, file: '60_2Thessalonians.md' },
        { name: '티모테오에게 보낸 첫째 서간', chapters: 6, file: '61_1Timothy.md' },
        { name: '티모테오에게 보낸 둘째 서간', chapters: 4, file: '62_2Timothy.md' },
        { name: '티토에게 보낸 서간', chapters: 3, file: '63_Titus.md' },
        { name: '필레몬에게 보낸 서간', chapters: 1, file: '64_Philemon.md' },
        { name: '히브리인들에게 보낸 서간', chapters: 13, file: '65_Hebrews.md' },
        { name: '야고보 서간', chapters: 5, file: '66_James.md' },
        { name: '베드로의 첫째 서간', chapters: 5, file: '67_1Peter.md' },
        { name: '베드로의 둘째 서간', chapters: 3, file: '68_2Peter.md' },
        { name: '요한의 첫째 서간', chapters: 5, file: '69_1John.md' },
        { name: '요한의 둘째 서간', chapters: 1, file: '70_2John.md' },
        { name: '요한의 셋째 서간', chapters: 1, file: '71_3John.md' },
        { name: '유다 서간', chapters: 1, file: '72_Jude.md' },
        { name: '요한 묵시록', chapters: 22, file: '73_Revelation.md' }
    ]
};

const AppState = {
    currentView: 'home',
    testament: null,
    book: null,
    chapter: null,
    userBooks: [], // Loaded from IndexedDB

    // New Feature States
    selectionMode: false,
    selectedVerses: new Map(),  // Map<verseId, {chapter, text}>
    theme: 'system', // system, light, dark
    fontSize: 18.0,   // Default pixel size
    showFontSizeControl: false // Header popover state
};

const App = {
    async init() {
        this.viewContainer = document.getElementById('view-container');
        this.headerTitle = document.getElementById('header-title');
        this.loading = document.getElementById('loading');

        // Settings elements
        this.settingsModal = document.getElementById('settings-modal');
        this.closeSettings = document.getElementById('close-settings');
        this.closeModalFooter = document.getElementById('close-modal-footer');
        this.dropZone = document.getElementById('drop-zone');
        this.fileInput = document.getElementById('file-input');
        this.dataStatusText = document.getElementById('data-status-text');
        this.clearDataBtn = document.getElementById('clear-data-btn');

        // Font Size elements
        this.fontDecrease = document.getElementById('font-decrease');
        this.fontIncrease = document.getElementById('font-increase');
        this.fontSizeDisplay = document.getElementById('font-size-display');

        this.initTheme();
        this.initFontSize();

        // Initialize DB
        try {
            await BibleDB.init();
            await this.updateDataStatus();
        } catch (err) {
            console.error(err);
        }

        this.bindEvents();
        this.handleRouting();
    },

    bindEvents() {
        window.addEventListener('popstate', () => this.handleRouting());
        // this.headerTitle.addEventListener('click', () => this.navigate('home')); // Removed to prevent bubbling issues

        // Settings Modal
        this.closeSettings.addEventListener('click', () => this.toggleModal(false));
        this.closeModalFooter.addEventListener('click', () => this.toggleModal(false));

        // File Upload
        this.dropZone.addEventListener('click', () => this.fileInput.click());
        this.fileInput.addEventListener('change', (e) => this.handleFiles(e.target.files));

        this.dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.dropZone.classList.add('drag-over');
        });
        this.dropZone.addEventListener('dragleave', () => this.dropZone.classList.remove('drag-over'));
        this.dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            this.dropZone.classList.remove('drag-over');
            this.handleFiles(e.dataTransfer.files);
        });

        this.clearDataBtn.addEventListener('click', async () => {
            if (confirm('모든 사용자 데이터를 삭제하시겠습니까?')) {
                await BibleDB.clearData();
                await this.updateDataStatus();
            }
        });

        // Font Size Adjustment
        this.fontDecrease.addEventListener('click', () => this.adjustFontSize(-0.5));
        this.fontIncrease.addEventListener('click', () => this.adjustFontSize(0.5));

        // Global click listener for closing font popover
        document.addEventListener('click', (e) => {
            if (!AppState.showFontSizeControl) return;

            const fontBtn = document.getElementById('header-font-btn');
            const popover = e.target.closest('.absolute');

            if (fontBtn && !fontBtn.contains(e.target) && !popover) {
                AppState.showFontSizeControl = false;
                this.renderHeader();
            }
        });

        this.setupThemeEvents();
    },

    initTheme() {
        const savedTheme = localStorage.getItem('app-theme') || 'system';
        this.applyTheme(savedTheme);
    },

    applyTheme(theme) {
        AppState.theme = theme;
        localStorage.setItem('app-theme', theme);
        document.documentElement.setAttribute('data-theme', theme);

        // Update UI buttons
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.themeVal === theme);
        });
    },

    initFontSize() {
        const savedSize = parseFloat(localStorage.getItem('app-font-size')) || 18.0;
        this.applyFontSize(savedSize);
    },

    applyFontSize(size) {
        AppState.fontSize = size;
        document.documentElement.style.setProperty('--font-size', `${size}px`);

        // Update settings modal display if it exists
        if (this.fontSizeDisplay) {
            this.fontSizeDisplay.innerText = size.toFixed(1);
        }

        // Also update header display if control is open
        if (AppState.showFontSizeControl) {
            this.renderHeader();
        } else {
            // Update only the button text in header if it exists to avoid full re-render
            const fontBtn = document.getElementById('header-font-btn');
            if (fontBtn) fontBtn.innerText = size.toFixed(1);
        }

        localStorage.setItem('app-font-size', size);
    },

    adjustFontSize(delta) {
        const newSize = Math.max(12, Math.min(40, AppState.fontSize + delta));
        this.applyFontSize(newSize);
    },

    toggleFontSizeControl() {
        AppState.showFontSizeControl = !AppState.showFontSizeControl;
        this.renderHeader(); // Re-render to show/hide popover
    },

    setupThemeEvents() {
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.dataset.themeVal;
                this.applyTheme(theme);
            });
        });
    },

    cycleTheme() {
        const themes = ['system', 'light', 'dark'];
        let nextIndex = (themes.indexOf(AppState.theme) + 1) % themes.length;
        this.applyTheme(themes[nextIndex]);
        this.renderHeader(); // Refresh header to update icon
    },

    toggleModal(show) {
        this.settingsModal.style.display = show ? 'flex' : 'none';
    },

    async handleFiles(files) {
        if (!files.length) return;

        this.dataStatusText.innerText = '업로드 중...';
        let count = 0;
        let errors = [];

        for (const file of files) {
            if (file.name.endsWith('.md')) {
                try {
                    const content = await file.text();
                    await BibleDB.saveBook(file.name, content);
                    count++;
                } catch (e) {
                    errors.push(file.name);
                }
            }
        }

        if (errors.length > 0) {
            alert(`${count}개의 파일이 저장되었습니다.\n실패: ${errors.join(', ')}`);
        } else {
            alert(`${count}개의 파일이 모두 성공적으로 저장되었습니다.`);
        }
        await this.updateDataStatus();
        this.render(); // Refresh the current view to show the newly loaded data
    },

    async updateDataStatus() {
        const names = await BibleDB.getAllBookNames();
        // Normalize names to NFC for sorting and consistency
        AppState.userBooks = names.map(n => n.normalize('NFC')).sort();

        const summaryEl = document.getElementById('data-summary');
        const fileListEl = document.getElementById('file-list');
        const totalExpected = 73;

        if (names.length > 0) {
            this.dataStatusText.innerText = '사용자 데이터 사용 중';
            this.dataStatusText.classList.add('text-accent');
            this.clearDataBtn.classList.remove('hidden');

            summaryEl.classList.remove('hidden');
            const progress = Math.min(Math.round((names.length / totalExpected) * 100), 100);
            summaryEl.innerHTML = `
                <div class="flex justify-between items-center mb-1">
                    <span class="font-bold">${names.length} / ${totalExpected} (완료 ${progress}%)</span>
                    ${names.length >= totalExpected ? '<span class="text-green-600 font-bold">전체 완료!</span>' : ''}
                </div>
                <div class="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
                    <div class="bg-accent h-full transition-all duration-500" style="width: ${progress}%"></div>
                </div>
            `;

            fileListEl.innerHTML = names.map(name => `
                <div class="px-2 py-1 bg-stone-50 rounded border border-stone-100 flex items-center gap-1 overflow-hidden overflow-ellipsis whitespace-nowrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="text-green-500 shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    ${name}
                </div>
            `).join('');
        } else {
            this.dataStatusText.innerText = '샘플 데이터 사용 중';
            this.dataStatusText.classList.remove('text-accent');
            this.clearDataBtn.classList.add('hidden');
            summaryEl.classList.add('hidden');
            fileListEl.innerHTML = '<div class="col-span-2 py-4 text-center text-stone-300 italic">업로드된 파일이 없습니다.</div>';
        }
    },

    navigate(view, params = {}) {
        // Use Hash-based routing for compatibility with file:// protocol
        // Format: #view?t=old&b=Genesis&c=1
        const searchParams = new URLSearchParams();
        if (params.testament) searchParams.set('t', params.testament);
        if (params.book) searchParams.set('b', params.book);
        if (params.chapter) searchParams.set('c', params.chapter);

        const newHash = `${view}?${searchParams.toString()}`;

        // Push state manually
        window.history.pushState({}, '', '#' + newHash);
        this.handleRouting();
    },

    handleRouting() {
        // Parse Hash: #view?params
        const rawHash = window.location.hash.slice(1); // Remove #
        const [viewPart, queryPart] = rawHash.split('?');

        const hash = viewPart || 'home';
        const searchParams = new URLSearchParams(queryPart || '');

        AppState.currentView = hash;
        AppState.testament = searchParams.get('t');
        AppState.book = searchParams.get('b');
        AppState.chapter = searchParams.get('c');

        this.render();
    },

    showLoading(show) {
        if (show) {
            this.loading.classList.replace('opacity-0', 'opacity-100');
            this.loading.classList.remove('hidden');
            this.viewContainer.classList.replace('opacity-100', 'opacity-0');
            this.viewContainer.classList.add('hidden');
        } else {
            this.loading.classList.replace('opacity-100', 'opacity-0');
            this.loading.classList.add('hidden');
            this.viewContainer.classList.replace('opacity-0', 'opacity-100');
            this.viewContainer.classList.remove('hidden');
        }
    },

    render() {
        this.viewContainer.innerHTML = '';

        // Render Persistent Navigation Header
        this.renderHeader();

        // Ensure main content scrolls to top on view change
        const contentEl = document.getElementById('content');
        if (contentEl) contentEl.scrollTop = 0;

        switch (AppState.currentView) {
            case 'home': this.renderHome(); break;
            case 'books': this.renderBooks(); break;
            case 'chapters': this.renderChapters(); break;
            case 'read': this.renderRead(); break;
        }
    },

    renderHeader() {
        // Persistent Navigation Buttons
        // Hide nav buttons on Home screen as requested
        const navStyle = AppState.currentView === 'home' ? 'style="visibility: hidden;"' : '';
        const backBtnHidden = AppState.currentView === 'home' ? 'hidden' : '';
        const oldActive = AppState.testament === 'old' ? 'active' : '';
        const newActive = AppState.testament === 'new' ? 'active' : '';

        // Chapter Info - Now positioned on the far left
        let chapterDisplay = '';
        if (AppState.currentView === 'read' || AppState.currentView === 'chapters') {
            chapterDisplay = `
                <div class="flex items-center text-sm font-bold mr-1 chapter-display">
                    <span class="text-stone-400 mr-2">|</span>
                    <span class="text-primary">${AppState.book || ''} ${AppState.chapter ? AppState.chapter + '장' : ''}</span>
                </div>
            `;
        }

        // Select/Copy Button Logic (Only visible in read view)
        let selectionActionBtn = '';
        if (AppState.currentView === 'read') {
            const isSelectionMode = AppState.selectionMode;
            const hasSelection = AppState.selectedVerses.size > 0;
            const btnText = hasSelection ? '복사' : '선택';
            const btnClass = hasSelection ? 'bg-accent text-white border-accent' : 'bg-white text-stone-500 border-stone-200';

            selectionActionBtn = `
                <button id="selection-btn" class="nav-btn nav-text-btn ${btnClass}" onclick="App.handleSelectionAction()">
                    ${btnText}
                </button>
            `;
        }


        // Font Size Control (Visible in all views but optimized for read)
        const fontSizeVal = AppState.fontSize.toFixed(1);
        const fontSizeBtn = `
            <div class="relative flex items-center">
                <button id="header-font-btn" class="nav-btn nav-text-btn font-mono" onclick="App.toggleFontSizeControl(); event.stopPropagation();">
                    ${fontSizeVal}
                </button>
                ${AppState.showFontSizeControl ? `
                <div class="absolute top-full right-0 mt-2 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl shadow-xl p-3 z-[100] flex items-center gap-4 animate-in fade-in slide-in-from-top-2 duration-200" style="min-width: 140px;">
                    <button class="w-10 h-10 flex items-center justify-center bg-stone-100 dark:bg-stone-700 rounded-lg active:scale-95 transition-transform text-stone-700 dark:text-stone-200" onclick="App.adjustFontSize(-0.5); event.stopPropagation();">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    </button>
                    <div class="flex flex-col items-center flex-1">
                        <span class="text-base font-bold text-stone-900 dark:text-white">${fontSizeVal}</span>
                        <span class="text-[10px] text-stone-400 uppercase font-black">PX</span>
                    </div>
                    <button class="w-10 h-10 flex items-center justify-center bg-stone-100 dark:bg-stone-700 rounded-lg active:scale-95 transition-transform text-stone-700 dark:text-stone-200" onclick="App.adjustFontSize(0.5); event.stopPropagation();">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    </button>
                </div>
                ` : ''}
            </div>
        `;

        // Use headerTitle element as the container for our nav
        this.headerTitle.innerHTML = `
            <div class="w-full flex justify-between items-center px-4 header-container-inner">
                <div class="flex items-center gap-3 sm:gap-6 header-nav-main">
                    ${chapterDisplay}
                    <button class="nav-btn nav-text-btn ${backBtnHidden}" onclick="window.history.back()">
                        뒤로
                    </button>
                    <div class="flex items-center gap-2 sm:gap-3 header-nav-group">
                        <button class="nav-btn nav-text-btn ${oldActive}" onclick="App.navigate('books', {testament: 'old'})">구약</button>
                        <button class="nav-btn nav-text-btn ${newActive}" onclick="App.navigate('books', {testament: 'new'})">신약</button>
                    </div>
                </div>
                <div class="flex items-center gap-2 sm:gap-4 header-controls" id="header-controls">
                    ${selectionActionBtn}
                    ${fontSizeBtn}
                    
                    <button id="theme-toggle-header" class="theme-toggle-btn" onclick="App.cycleTheme()" aria-label="테마 변경">
                        ${AppState.theme === 'dark' ? `
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                        ` : AppState.theme === 'light' ? `
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                        ` : `
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                        `}
                    </button>

                    ${AppState.currentView === 'home' ? `
                    <button id="settings-btn" class="flex items-center justify-center rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors" style="width: 40px; height: 40px; min-width: 40px; min-height: 40px;" onclick="App.toggleModal(true)" aria-label="설정">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;">
                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    </button>
                    ` : ''}
                </div>
            </div>
        `;
    },

    renderHome() {
        // No title needed in header anymore as we have nav buttons? 
        // Or we can reset nav to show just "Catholic Bible" text if preferred on Home.
        // But user asked for persistent "Back | Old | New".
        // Let's keep the nav visible even on home (Back button hidden).

        const html = `
            <div class="fade-in" style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:calc(100vh - 80px);">
                <h2 class="text-3xl font-bold mb-8 text-stone-800">성서 선택</h2>
                <div class="grid-container" style="width:100%; max-width:400px;">
                    ${BIBLE_METADATA.testaments.map(t => {
            const total = t.booksCount;
            const uploaded = BIBLE_METADATA[t.id].filter(b => {
                const normBookName = b.name.normalize('NFC');
                return AppState.userBooks.some(fileName => {
                    const normFileName = fileName.normalize('NFC');
                    return normFileName.includes(normBookName) || normFileName === b.file.normalize('NFC');
                });
            }).length;

            return `
                        <div class="card" onclick="App.navigate('books', {testament: '${t.id}'})">
                            <div class="card-title">${t.name}</div>
                            <div class="card-subtitle text-stone-500">${uploaded} / ${total} 권 입력됨</div>
                        </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
        this.viewContainer.innerHTML = html;
    },

    renderBooks() {
        const testamentData = BIBLE_METADATA.testaments.find(t => t.id === AppState.testament);
        if (!testamentData) return this.navigate('home');

        // Header handled by global renderHeader
        const books = BIBLE_METADATA[AppState.testament] || [];

        const html = `
            <div class="fade-in">
                <h2 class="text-2xl font-bold mb-6 text-stone-700">${testamentData.name} 목록</h2>
                <div class="grid-container">
                    ${books.map((b, index) => {
            // Normalize names to NFC for robust matching on Mac
            const normBookName = b.name.normalize('NFC');
            const hasUserContent = AppState.userBooks.some(fileName => {
                const normFileName = fileName.normalize('NFC');
                return normFileName.includes(normBookName) || normFileName === b.file.normalize('NFC');
            });

            const cardClass = hasUserContent ? 'card-saved' : 'card-unsaved';
            const statusIndicator = hasUserContent ? '' : ''; // Removed badge as requested

            return `
                        <div class="card ${cardClass}" 
                             onclick="App.navigate('chapters', {testament: '${AppState.testament}', book: '${b.name}'})">
                            <div class="card-title flex items-baseline gap-2">
                                <span class="text-stone-400 text-sm font-normal">${index + 1}.</span>
                                ${b.name}
                            </div>
                            <div class="card-subtitle">${b.chapters}장</div>
                        </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
        this.viewContainer.innerHTML = html;
    },

    renderChapters() {
        const bookName = AppState.book;
        // Header info handled by renderHeader

        const testamentData = BIBLE_METADATA[AppState.testament];
        const bookInfo = testamentData.find(b => b.name === bookName);

        if (!bookInfo) return this.navigate('home');

        const chaptersCount = bookInfo.chapters || 50;
        const chapters = Array.from({ length: chaptersCount }, (_, i) => i + 1);

        const html = `
            <div class="fade-in">
                <h2 class="text-2xl font-bold mb-6 text-stone-700">${bookName} - 장 선택</h2>
                <div class="chapter-grid">
                    ${chapters.map(c => `
                        <button class="chapter-btn" onclick="App.navigate('read', {testament: '${AppState.testament}', book: '${bookName}', chapter: '${c}'})">
                            ${c}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
        this.viewContainer.innerHTML = html;
    },

    async renderRead() {
        const bookName = AppState.book;
        const chapter = AppState.chapter;
        const testamentData = BIBLE_METADATA[AppState.testament];
        const bookInfo = testamentData.find(b => b.name === bookName);

        if (!bookInfo) return this.navigate('home');

        this.showLoading(true);

        try {
            let markdown;

            // 1. Try Matching in IndexedDB
            const normBookName = bookName.normalize('NFC');
            const matchedFileName = AppState.userBooks.find(name => {
                const normName = name.normalize('NFC');
                return normName.includes(normBookName) || normName === bookInfo.file.normalize('NFC');
            });

            if (matchedFileName) {
                const originalNames = await BibleDB.getAllBookNames();
                const actualKey = originalNames.find(n => n.normalize('NFC') === matchedFileName);
                const userBook = await BibleDB.getBook(actualKey || matchedFileName);
                markdown = userBook.content;
            } else {
                const response = await fetch(`bible_data/${bookInfo.file}`);
                if (!response.ok) throw new Error('파일을 불러올 수 없습니다.');
                markdown = await response.text();
            }

            // Using the updated parser
            const chapters = BibleParser.parseBook(markdown);
            this.showLoading(false);

            // Remove all text within parentheses ( ) from the HTML content
            Object.keys(chapters).forEach(key => {
                chapters[key] = chapters[key].replace(/\([^)]*\)/g, '');
            });

            // Apply Font Size (Removed per user request - use system zoom)
            // const fontSizeStyle = `font-size: ${AppState.fontSize}px;`; 
            const selectionClass = AppState.selectionMode ? 'selection-mode' : '';

            // Inject Checkboxes into Content
            // We need to re-process the HTML slightly or handle click events carefully.
            // A simpler way: The parser returns <p> tags. We can wrap them or inject checkbox inside.
            // Let's modify the HTML string manipulation here.

            const contentHtml = Object.entries(chapters).map(([num, content]) => {
                // Determine if this is the current chapter
                // Note: The parser returns ALL chapters. We want to show ALL? 
                // The current app shows ALL chapters in one scroll View? 
                // Wait, parseBook returns an object {1: html, 2: html}.
                // The original code was iterating keys and rendering ALL. 
                // Let's keep that but ensure we can scroll to the right one.

                // We need to inject checkboxes before <p>.
                // Simple regex replace for <p> -> <div class="verse-container"><input...><p>
                let processedContent = content;
                // Always inject checkboxes (hidden by default via CSS)
                // This avoids re-rendering the whole text when toggling selection mode
                processedContent = content.replace(/<p>/g, (match, offset) => {
                    const verseId = `${num}-${Math.random().toString(36).substr(2, 9)}`;
                    return `<div class="verse-container">
                                <input type="checkbox" class="verse-checkbox" data-verse-id="${verseId}" onchange="App.toggleVerse(this)">
                                <p data-verse-id="${verseId}" onclick="App.triggerCheckbox(this)">`;
                }).replace(/<\/p>/g, '</p></div>');

                return `
                    <div id="chapter-${num}" class="mb-12">
                        ${num !== '0' ? `<h3 id="scroll-target-${num}">${num}장</h3>` : ''}
                        ${processedContent}
                    </div>
                `;
            }).join('');

            const html = `
                <div class="fade-in reading-container ${selectionClass}">
                    <div class="bible-text">
                        ${contentHtml}
                    </div>
                </div>
            `;
            this.viewContainer.innerHTML = html;

            // Scroll to selected chapter after a short delay for rendering
            setTimeout(() => {
                const target = document.getElementById(`scroll-target-${chapter}`);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);

            // Re-check previously selected items if needed (not persisted for now)

        } catch (err) {
            console.error(err);
            this.showLoading(false);
            // Error handling UI (simplified)
            this.viewContainer.innerHTML = `<div class="p-8 text-center">데이터를 불러올 수 없습니다.</div>`;
        }
    },

    // Optimized Helper Methods
    // adjustFontSize removed per user request

    handleSelectionAction() {
        // Check state BEFORE toggling to determine the correct action
        if (AppState.selectionMode && AppState.selectedVerses.size > 0) {
            // Currently in selection mode WITH selections → Copy
            this.copySelection();
            return;
        }

        if (AppState.selectionMode && AppState.selectedVerses.size === 0) {
            // Currently in selection mode with NO selections → Cancel
            AppState.selectionMode = false;
        } else {
            // Not in selection mode → Enter selection mode
            AppState.selectionMode = true;
            AppState.selectedVerses.clear();
        }

        // Update UI
        const container = document.querySelector('.reading-container');
        if (container) {
            container.classList.toggle('selection-mode', AppState.selectionMode);
        }
        this.updateSelectionButton();
    },

    toggleVerse(checkbox) {
        const p = checkbox.nextElementSibling;
        const text = p.innerText;
        const verseId = checkbox.dataset.verseId;

        const chapterDiv = checkbox.closest('[id^="chapter-"]');
        const chapterNum = chapterDiv ? chapterDiv.id.replace('chapter-', '') : '?';

        if (checkbox.checked) {
            AppState.selectedVerses.set(verseId, { chapter: chapterNum, text: text });
        } else {
            AppState.selectedVerses.delete(verseId);
        }

        this.updateSelectionButton();
    },

    updateSelectionButton() {
        const btn = document.getElementById('selection-btn');
        if (!btn) return;

        if (AppState.selectionMode && AppState.selectedVerses.size > 0) {
            btn.innerText = '복사';
            btn.classList.add('bg-accent', 'text-white', 'border-accent');
            btn.classList.remove('bg-white', 'text-stone-500', 'border-stone-200');
        } else {
            btn.innerText = '선택';
            btn.classList.remove('bg-accent', 'text-white', 'border-accent');
            btn.classList.add('bg-white', 'text-stone-500', 'border-stone-200');
        }
    },

    triggerCheckbox(pTag) {
        if (!AppState.selectionMode) return;
        const checkbox = pTag.previousElementSibling;
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
            this.toggleVerse(checkbox);
        }
    },

    copySelection() {
        if (AppState.selectedVerses.size === 0) return;

        // Group verses by chapter, maintaining insertion order
        const byChapter = new Map();
        for (const [, data] of AppState.selectedVerses) {
            if (!byChapter.has(data.chapter)) {
                byChapter.set(data.chapter, []);
            }
            byChapter.get(data.chapter).push(data.text);
        }

        // Format: header once, then verses
        const parts = [];
        for (const [chapter, verses] of byChapter) {
            parts.push(`${AppState.book} ${chapter}장`);
            parts.push(...verses);
        }
        const textToCopy = parts.join('\n');

        // Use execCommand as primary method (works on file:// protocol)
        // navigator.clipboard.writeText requires secure context (https://) 
        // and will silently fail on file:// even though the API object exists
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length); // iOS support

        let success = false;
        try {
            success = document.execCommand('copy');
        } catch (err) {
            success = false;
        }
        document.body.removeChild(textarea);

        if (success) {
            alert('클립보드에 복사되었습니다.');
        } else {
            alert('복사에 실패했습니다. 브라우저 설정을 확인해주세요.');
        }

        // Reset Mode
        AppState.selectionMode = false;
        AppState.selectedVerses.clear();
        document.querySelectorAll('.verse-checkbox').forEach(cb => cb.checked = false);

        const container = document.querySelector('.reading-container');
        if (container) {
            container.classList.remove('selection-mode');
        }
        this.updateSelectionButton();
    }
};

window.App = App;
document.addEventListener('DOMContentLoaded', () => App.init());
