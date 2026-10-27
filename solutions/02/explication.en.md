# Solution 2

`waitForTimeout(500)` bets on the speed of the server, and `count()` reads a value at one instant without retrying. On a slower machine the read happens before the list is displayed: the test fails although there is no bug.

`expect(locator).toHaveCount(2)` retries until the deadline: the test waits for what it needs, no more, no less.
