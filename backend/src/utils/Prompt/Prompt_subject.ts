function getPrompt(subject: string, level: string, topics: string[], conversationHistory: string[]): string {
    // random topic from the array of topics
    function getRandomTopic(): string {
        const randomIndex = Math.floor(Math.random() * topics.length);
        return topics[randomIndex];
    }
    if (subject === 'DSA') {
        if (level === 'easy') {
            // Pick up to 3 random topics
            let randomTopics = [];
            for (let i = 0; i < Math.min(3, topics.length); i++) { 
                randomTopics.push(getRandomTopic());
            }

            if (conversationHistory.length === 1) {
                return `Based on the previous questions and answers, generate a new easy generic question for DSA. Topics: ${randomTopics.join(', ')}.`;
            } else if (conversationHistory.length === 2) {
                return `Based on the previous questions and answers, provide the user with an easy code snippet. Ask the user to explain the code and predict the output:\n\n\`\`\`java\n// Example Java code snippet for easy level\n\`\`\`\nTopics: ${randomTopics.join(', ')}.`;
            } else {
                return `Based on the previous questions and answers, generate a new easy scenario-based question for DSA. Topics: ${randomTopics.join(', ')}.`;
            }
        } else if (level === 'medium') {
            let randomTopics = [];
            for (let i = 0; i < Math.min(3, topics.length); i++) { 
                randomTopics.push(getRandomTopic());
            }
            if (conversationHistory.length === 1) {
                return `Based on the previous questions and answers, generate a new medium generic question for DSA. Topics: ${topics.join(', ')}.`;
            } else if (conversationHistory.length === 2) {
                return `Based on the previous questions and answers, provide the user with a medium code snippet. Ask the user to explain the code and predict the output:\n\n\`\`\`java\n// Example Java code snippet for medium level\n\`\`\`\nTopics: ${topics.join(', ')}.`;
            } else {
                return `Based on the previous questions and answers, generate a new medium scenario-based question for DSA. Topics: ${topics.join(', ')}.`;
            }
        } else if (level === 'hard') {
            let randomTopics = [];
            for (let i = 0; i < Math.min(3, topics.length); i++) { 
                randomTopics.push(getRandomTopic());
            }
            if (conversationHistory.length === 1) {
                return `Based on the previous questions and answers, generate a new hard generic question for DSA. Topics: ${topics.join(', ')}.`;
            } else if (conversationHistory.length === 2) {
                return `Based on the previous questions and answers, provide the user with a hard code snippet. Ask the user to explain the code and predict the output:\n\n\`\`\`java\n// Example Java code snippet for hard level\n\`\`\`\nTopics: ${topics.join(', ')}.`;
            } else {
                return `Based on the previous questions and answers, generate a new hard scenario-based question for DSA. Topics: ${topics.join(', ')}.`;
            }
        } else {
            return 'Invalid level for DSA.';
        }
    } else {
        return 'Invalid subject.';
    }
}
