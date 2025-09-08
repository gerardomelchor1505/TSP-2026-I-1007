class WordCounter {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  getText(): string {
    return this.text;
  }

  counter(): Map<string, number> {
    let word = "";
    const map = new Map<string, number>();

    for (let i = 0; i < this.text.length; i++) {
      const char = this.text[i];

      if (char === " ") {
        // Evita contar cadenas vacías por espacios consecutivos
        if (word !== "") {
          const key = word.toLowerCase();
          map.set(key, (map.get(key) ?? 0) + 1);
          word = "";
        }
      } else {
        word += char;
      }
    }

    // Agrega la última palabra si quedó pendiente
    if (word !== "") {
      const key = word.toLowerCase();
      map.set(key, (map.get(key) ?? 0) + 1);
    }

    return map;
  }
}

const text = "Una vida sin pan o una vida feliz";
const wordCounter = new WordCounter(text);
console.log(wordCounter.getText());

const result = wordCounter.counter();

result.forEach((k, v) => {
  console.log(k, "-", v);
});
