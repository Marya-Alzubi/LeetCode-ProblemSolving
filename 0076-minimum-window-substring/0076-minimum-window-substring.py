class Solution:
    def minWindow(self, s: str, t: str) -> str:
        # Edge case #
        if len(t) == 0:
            return ""
        
        # Sliding Window Approach #
        left = 0
        t_map = Counter(t)
        window = {}
        needed_chars = len(t_map)
        current_chars = 0
        resLen = float("inf")
        res = [] # start and end index #
        
        for right in range(len(s)):
            if s[right] not in window:
                window[s[right]] = 1
            else:
                window[s[right]] += 1
            
            # Check if the character added to the window is also present in t_map #
            if s[right] in t_map and window[s[right]] == t_map[s[right]]:
                current_chars += 1
            
            # If the current_chars equals the needed_chars, update the result #
            while current_chars == needed_chars:
                if (right - left + 1) < resLen:
                    resLen = (right - left + 1)
                    res = [left, right]
                
                # Slide the window #
                window[s[left]] -= 1
                
                # if the character removed from the window is also present in t_map #
                if s[left] in t_map and window[s[left]] < t_map[s[left]]:
                    current_chars -= 1
                
                left += 1
                
        return s[res[0]:res[1]+1] if resLen != float("inf") else ""