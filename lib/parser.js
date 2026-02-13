/**
 * Simple Markdown Parser for Catholic Bible Data
 */

const BibleParser = {
    /**
     * Parses a Bible book markdown file and splits it into chapters.
     * @param {string} markdown - The raw markdown content.
     * @returns {Object} An object where keys are chapter numbers and values are HTML strings.
     */
    parseBook: function (markdown) {
        if (!markdown) return {};

        const chapters = {};
        // Split by ### followed by chapter header (e.g., ### 1장 또는 ### 1)
        const parts = markdown.split(/^###\s+/m);

        // The first part might be titles or intro text
        if (parts[0].trim()) {
            chapters[0] = this.toHTML(parts[0]);
        }

        for (let i = 1; i < parts.length; i++) {
            const part = parts[i];
            const lines = part.split('\n');
            const header = lines[0].trim();
            // Extract number from "1장" or similar
            const chapterNum = parseInt(header) || i;
            const content = lines.slice(1).join('\n').trim();
            chapters[chapterNum] = this.toHTML(content);
        }

        return chapters;
    },

    /**
     * Converts basic markdown to HTML.
     * Focuses on paragraphs and line breaks for Bible reading.
     */
    toHTML: function (text) {
        if (!text) return '';

        // Handle paragraphs and headers
        let html = text
            .split(/\n\n+/)
            .map(p => {
                if (!p.trim()) return '';
                let content = p.trim();

                // Handle level 6 headers anywhere in the block
                // (Splitting by newline to catch each line)
                const lines = content.split('\n');
                const processedLines = lines.map(line => {
                    const trimmedLine = line.trim();
                    if (trimmedLine.startsWith('######')) {
                        const subtitle = trimmedLine.replace(/^######\s*/, '').trim();
                        return `<h6 class="subtitle">${subtitle}</h6>`;
                    }
                    // Handle bolding **text**
                    const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                    return `<p>${formatted}</p>`;
                });

                return processedLines.join('');
            })
            .join('');

        return html;
    }
};

window.BibleParser = BibleParser;
