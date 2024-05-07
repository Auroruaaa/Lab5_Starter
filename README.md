# Lab 5 - Starter

Lab Members: Beijie Cheng, Jiaying Yang

> Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

**A:** No. Sending message requires the interaction between two users, and unit testing does not provide such an environment, so it is not a good idea to use unit testing to test the message feature.

> Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

**A:** Yes. Because this feature can be easily tested by unit test. We can change the input size for different tests and see if there will be any warning message output when the word number exceed the maximum requirement.
