# Testing Standards

**Code without tests is not done.**

- Write tests as part of implementation, not as a separate step
- Cover happy paths, edge cases, and error handling
- Mock external dependencies — don't hit real APIs/databases in unit tests
- Match the project's existing test style and naming conventions
- Run tests after writing — verify they pass, then break the code to verify they fail
- One assertion per concept — test name describes the scenario
