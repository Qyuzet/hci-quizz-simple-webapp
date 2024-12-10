function antiDuplicate(str) {
  const words = str.split(" ");
  const uniqueWords = [...new Set(words)];
  return uniqueWords.join(" ");
}

console.log(
  antiDuplicate(
    "hello hello bandung bandung java java is in java, indonesian java coffee inspiring java developer"
  )
); // Output: "hello world javascript"
