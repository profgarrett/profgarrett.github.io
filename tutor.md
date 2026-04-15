# Tutorbot Resources    
    
This guide shows how to build and use a custom AI Tutorbot as part of your course, with a focus on supporting your learning goals—not just setting up a tool. Think of the Tutorbot as a structured way to guide students through practice, ask better questions, and give feedback using your course materials. When it’s set up well, it acts like an extension of you—helping students work through concepts and get feedback while still keeping real assessment in your hands.

**Class Examples:**

- [Python Exam](https://chatgpt.com/g/g-69cfcaf0fb708191a7c2359ad409c84f-python-exam-3-bot)
- [AIS Exam](https://chatgpt.com/g/g-6938694655048191a8d7b869a9aaabc8-ais-exam-2-tutorbot)
- [Fraud case](https://chatgpt.com/g/g-696a562253a48191b34b82db95a84d3b-acct-321-vendor-payments-case-v0-8)
- [Sample Notebook LLM](https://notebooklm.google.com/notebook/3bc6e179-2d5f-4ed2-a780-b8d81289ff29)

## Signup & platform comparison

If you haven't already, sign up for a Pro level of ChatGPT. You can not create a custom GPT on the default (free) version of ChatGPT.

Note that any GPTs you create run on the *student* account. This means that students with a free account will be limited. I've had students tell me that they get around 10 questions before timing out for the day.

Other platforms are also available. 

- **Claude**: This doesn't let you create custom GPTs and share them with students. You can setup a custom API, and use it with Google Cloud. However, this takes some significant work on your part, and you'll pay by usage.
- **NotebookLM**: This uses Gemini, which is Google's LLM. It is designed to assist with various tasks, including answering questions, providing explanations, and generating content. You can create a custom notebook and share it with students, but it doesn't have the same level of customization as ChatGPT's custom GPTs. You don't have actions, and students can access supporting files.
- **Github Copilot**: This is designed for coding, and is not really suitable for a tutorbot. It also doesn't have the same level of customization as ChatGPT's custom GPTs. [Link to get professor account](https://docs.github.com/en/education/about-github-education/github-education-for-teachers/apply-to-github-education-as-a-teacher)


## Define outcomes

Generate learning outcomes for your relevant chapters. 

- Upload your syllabus
- Ask ChatGPT to generate generic learning outcomes for the appropriate chapters for your exam
- Upload slides, exams, and other notes. Have ChatGPT summarize the content, and generate learning outcomes based on the content.

Refine the LOs, and save them as a file (Word is fine, but markdown is probably better).

## Gather files

Having *relevant* files is important for the GPT to be able to answer questions. You can upload slides, exams, and other notes.

You are generally limited to around 10 files. If needed, combine several files together, but it's better to reduce context.

## Create a custom GPT

Go to the Custom GPTs section of ChatGPT, and click "Create a custom GPT".

- **Name**: Publicly available name for your GPT. This is what students will see when they search for it.
- **Description**: A short description of what your GPT does. This is also publicly available, so you can use it to help students find your GPT.
- **Instructions**: This is where you will put the prompt that defines the behavior of your GPT. This is not publicly available, so you can include specific instructions for how the GPT should behave. 
- **Conversation starters**: These are optional, but you can include some conversation starters to help students get started with the GPT. I suggest one per chapter (max of 4)
- **Files**: Upload up to 10 files.
- **Capabilities**: Turn off features you don't think will be helpful, such as image or code.


### Prompt design

You can have the model ask students for the difficulty level they want to cover

- **I – Identity & Goal** (Defines what the persona is, its role, and its objectives)
- **N – Navigation Rules** (Establishes how it engages with users, including commands and knowledge usage)
- **F – Flow & Personality** (Sets tone, language style, and key personality traits)
- **U – User Guidance** (Guides users toward their goal with a structured method)
- **S – Signals & Adaptation** (Adjusts responses based on user signals and emotional cues)
- **E – End Instructions** (Key instructions the GPT must always remember)

### Example prompt 1

*You are a professional, classroom-style tutor who explains accounting information systems to undergraduate students. Your goal is to help learners understand and practice course material using uploaded knowledge files as the primary source. Maintain a clear, organized, and classroom-like tone—structured but approachable.*

*Focus on AIS concepts, basic SQL, and their business context. Use plain language, short examples, and labeled formulas (e.g., Profit = (P − V) × Q − F). Provide 2–3 short self-check questions when appropriate. Give constructive, direct feedback: identify errors, explain why they are incorrect, and demonstrate correct reasoning.*

*Avoid guessing, casual phrasing, or excessive friendliness.  **Do not provide solutions to graded assignments or exams.** Remind students that this tool supports learning and understanding, not graded work. If a request falls outside scope, redirect or cite reliable external sources.  Cite sources inline when referencing outside facts.*

*Prioritize and use the uploaded course files for all explanations and examples.*

*When giving quiz questions, give one question at a time. Have the student give an answer, do not show filled in solutions until they try to solve something. Explain why they got a question right or wrong. Always identify key terms.*

### Example prompt 2

*Prepare students for Exam 3 for a college class on data analysis with Python, Pandas, and Sci-py.*
*Use content from https://profgarrett.github.io/course_model/*

*Ask the student if they want multiple-choice or free responses questions.  Do not guess. Explain the answer.*

*NEVER ask students to write code. Instead, interpret ask them to explain results. Code blocks should be short.* 

*Ask one question at a time, explain what the student did right or wrong. After 5 questions on a single topic, suggest a new topic from the learning outcomes.  Always have the answer be a different letter from the prior question.*

*Use learning outcomes in the exam3.pdf file.*

### Example Prompt 3

*This is a prompt for a case.*

*ROLE: You will pretend to be three different people from the 'Vendor Payments Case'*
*AUDIENCE: ACCT 321, an undergraduate accounting information systems course.* 
*GOAL: Talk as these three people*
*SCOPE: Walk students through interviews listed in File3, File4, and File5. Suggest questions. Walk  students through  interviews of all three people.Suggest questions.*

*FAILURE MODES: Do not make up answers. If unsure or if content is missing or if prompt
is outside of scope, indicate that you are unable to help and refer the student to the professor for assistance.*

*BEHAVIOR: Stay within the scope of the case, adjusting tone or wording for clarity but not inventing new facts or altering case structure. Do not summarize or synthesize content - students must do that.*

*REFUSAL POLICY: Do not summarize the responses or write a memo. Students must synthesize the results of the interviews.*

*Start by pretending to be the CEO. Explain the case. Give them 3 options on interviewing people.*



## Testing

Use the preview window to test for common problems. Some common issues:

- Tune the type of question (multiple choice, free response)
- Check to make sure that the answer isn't always "B"
- Tune question difficulty


## Share with students

- Share your new GPT link in eCampus


# External Resources 

- [List of ideas for using custom GPTs in the classroom](https://derekbruff.org/2025/10/01/five-teaching-applications-of-custom-ai-chatbots/)
- [Nice prompt for class chatbot](https://cdil.bc.edu/resources/emerging-technologies/engaging-with-ai/ai-assistants/chatbot-prompt-for-poli2404-fitzgibbon/)
- [INFUSE Prompt](https://www.reddit.com/r/ChatGPTPromptGenius/comments/1j2v124/how_to_build_customgpts_2025_guide/)

<script src="/toc.js"></script>