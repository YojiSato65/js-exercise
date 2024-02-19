# takehome handover

## task 1
- The point of this task is to understand the architecture of the app, especially how CSR and SSR with hydration works.
- I first debugged the value on both the client and the server side, and it seemed there was no issue since the slug value was logged correctly. Then I thought there was some error around webpack since I was unfamiliar with it, so I was looking it up how it works and if there is any part that may cause the error, but it seemed fine. It took sometime to figure out it actually is not logging on the browser devtool because of caching, and it is just logging the slug value in the process of SSR. After I figured it out the rest of the process went smooth.
- It is working for now but I believe there is a better approach by making preloaded id dynamic instead of using hardcoded id in terms of scalability.

## task 2
- I know the basics of e2e testing by now, but still feel a little ambiguous about how the each component/file is connected to each other especially around api and I believe that is the reason I didn't manage to complete the task.
- Firstly, I needed to solve the error caused by a mismatch between the paths defined in the mock test and the api. Thought modifying the path in the mock test was the best approach but since that's not allowed here, I added new paths with :id parameter for the test. Then implemented the UI in an accordance with the test.
- I couldn't figure out why it is causing an immer error on the test. My understanding is that this error indicates that there is a piece of code that is assigning a value to the menu which is an array but treating it as an object(Immer only supports setting array indices and the 'length' property), but I couldn't find any place that is doing that.
- Need to solve the immer error, then test the rest of the code.

## task 3
- I get that OASClientFromSpec is a class that generates a JavaScript SDK from an OpenAPI Specification but am not sure about how it is implemented and functioning.
- Tried to understand what each method is doing and what needs to be refactored.
- Need to understand how the class is defined including all the libraries that have been used, then work on the task.