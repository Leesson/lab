function longestPalindrome(s) {
  if (s.length < 2) return s;

  let res = '';
  for(let i = 0; i < s.length; i++) {
    const s1 = palindrome(s, i, i);
    const s2 = palindrome(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }

  return res;
}

function palindrome(s, left, right) {
  while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    left--;
    right++;
  }

  return s.substring(left + 1, right);
}