import React, { useMemo, useState } from "react";

const words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
];

const TOTAL_LINES = 100;
const ALL_WORDS = [];

for (let i = 0; i < TOTAL_LINES; i++) {
  let sentence = "";
  for (let j = 0; j < 10; j++) {
    sentence += words[Math.floor(Math.random() * words.length)] + " ";
  }
  ALL_WORDS.push(sentence.trim());
}

function Assignment2() {
  const [sentences, setSentences] = useState(ALL_WORDS);
  const [filter, setFilter] = useState("");

  const filteredSentences = useMemo(() => {
    return sentences.filter((sentence) =>
      sentence.toLowerCase().includes(filter.toLowerCase())
    );
  }, [sentences, filter]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type to filter..."
        onChange={(e) => setFilter(e.target.value)}
      />

      {filteredSentences.map((sentence, index) => (
        <div key={index}>{sentence}</div>
      ))}
    </div>
  );
}

export default Assignment2;
