function search_word(text, word) {
    // Use a regular expression to find the word in the string
    const regex = new RegExp(`\\b${word}\\b`, 'g');
    const matches = text.match(regex);
    const count = matches ? matches.length : 0;
    return `'${word}' was found ${count} ${count === 1 ? "time" : "times"}.`;
}

// Test cases
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));