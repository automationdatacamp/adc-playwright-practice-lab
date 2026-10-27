# Solution 3

Defects of the original test:
- the `try/catch` swallows a failed click: the test passes even if the order does not work;
- the only assertion (`count()` equals 1) is true as soon as the page loads;
- positional CSS selectors (`li:nth-child(1)`) break at the slightest change to the list;
- no failure case (empty cart).

The fixed version uses accessible roles, checks the total then the confirmation, and covers the empty cart.
