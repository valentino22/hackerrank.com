from statistics import mean, median
from collections import Counter

input() # Don't need first input, so ignore input
numbers = list(map(float, input().split())) # second input is the list of numbers
print(round(mean(numbers),1))
print(median(numbers))
print(Counter(sorted(numbers)).most_common(1)[0][0])