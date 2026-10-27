# Solution 1

The original test checks a message, not the result. When the discount is no longer applied, the message still appears: the test stays green while the customer pays 50 instead of 45.

The fixed version checks the total (`45,00 €`) and adds the invalid-code case. With `BUG=remise` it turns red: that is its job.
