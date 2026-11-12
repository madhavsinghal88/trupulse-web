/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['firebasestorage.googleapis.com'],
    },
    // Pages from the previous site, sent to their closest page in the redesign.
    async redirects() {
      return [
        { source: '/terms&conditions', destination: '/terms', permanent: true },
        { source: '/privacy-policy', destination: '/privacy', permanent: true },
        { source: '/usecases', destination: '/#use-cases', permanent: true },
        { source: '/company', destination: '/', permanent: true },
        { source: '/support', destination: '/#faq', permanent: true },
        { source: '/blogs/blog/create-feedback-sessions-with-the-trupulse-ai-agent', destination: '/blogs/blog/turn-your-research-question-into-a-session', permanent: true },
        { source: '/blogs/blog/trupulse-ai-reports-for-useful-feedback-and-next-steps', destination: '/blogs/blog/ai-prepared-findings-so-your-team-can-act', permanent: true },
        { source: '/blogs/blog/human-accountability-ai-led-research', destination: '/blogs/blog/ai-carries-the-work-people-own-the-decisions', permanent: true },
        { source: '/blogs/blog/survey-discussion-focus-group-how-to-choose', destination: '/blogs/blog/survey-discussion-or-focus-group-how-to-choose', permanent: true },
        { source: '/blogs/blog/understand-onboarding-with-trupulse-ai-discussions', destination: '/blogs/blog/understand-onboarding-without-endless-interviews', permanent: true },
        { source: '/blogs/blog/when-more-feedback-helps-decisions', destination: '/blogs/blog/when-more-feedback-actually-helps', permanent: true },
        { source: '/blogs/blog/write-neutral-questions-useful-follow-ups', destination: '/blogs/blog/ask-better-questions-without-leading-people', permanent: true },
        { source: '/blogs/blog/explore-service-ideas-with-trupulse-ai-focus-groups', destination: '/blogs/blog/test-service-ideas-with-an-ai-moderated-group', permanent: true },
        { source: '/blogs/blog/what-satisfaction-scores-leave-unexplained', destination: '/blogs/blog/same-satisfaction-score-two-different-stories', permanent: true },
        { source: '/blogs/blog/investigate-customer-onboarding-friction', destination: '/blogs/blog/why-customers-go-quiet-during-onboarding', permanent: true },
        { source: '/blogs/blog/explore-student-services-with-trupulse-ai-discussions', destination: '/blogs/blog/hear-the-student-journey-at-scale', permanent: true },
        { source: '/blogs/blog/understand-nonprofit-members-with-trupulse-ai-listening', destination: '/blogs/blog/understand-member-needs-without-extra-interviews', permanent: true },
        { source: '/blogs/blog/ai-research-practical-small-teams', destination: '/blogs/blog/practical-research-for-smaller-teams', permanent: true },
        { source: '/blogs/blog/adult-student-advising-experience-questions', destination: '/blogs/blog/7-questions-on-adult-students-advising', permanent: true },
        { source: '/blogs/blog/trupulse-ai-listening-during-organizational-change', destination: '/blogs/blog/let-ai-listen-while-your-team-leads-change', permanent: true },
        { source: '/blogs/blog/organizational-listening-beyond-employees', destination: '/blogs/blog/listen-to-everyone-your-decision-affects', permanent: true },
        { source: '/blogs/blog/listen-residents-public-service-experience', destination: '/blogs/blog/hear-residents-experience-of-public-services', permanent: true },
        { source: '/blogs/blog/build-sessions-from-trupulse-templates-with-ai-help', destination: '/blogs/blog/start-faster-with-trupulse-session-templates', permanent: true },
        { source: '/blogs/blog/disagreement-useful-research-finding', destination: '/blogs/blog/when-people-disagree-keep-whats-useful', permanent: true },
        { source: '/blogs/blog/employee-listening-before-after-process-change', destination: '/blogs/blog/what-employees-really-experience-during-change', permanent: true },
        { source: '/blogs/blog/sales-research-with-trupulse-ai-discussions-and-reports', destination: '/blogs/blog/sales-research-with-ai-from-talks-to-reports', permanent: true },
        { source: '/blogs/blog/inspectable-research-summaries', destination: '/blogs/blog/research-summaries-you-can-look-into', permanent: true },
        { source: '/blogs/blog/who-did-you-hear-from-research-coverage', destination: '/blogs/blog/who-did-you-hear-from-check-the-gaps', permanent: true },
        { source: '/blogs/blog/research-findings-clear-next-step', destination: '/blogs/blog/turn-research-reports-into-clear-next-steps', permanent: true },
        { source: '/blogs/blog/faster-ai-research-proportionate-review', destination: '/blogs/blog/faster-research-with-the-right-checks-early', permanent: true },
        { source: '/blogs/blog/compare-repeat-listening-studies', destination: '/blogs/blog/did-the-experience-change-or-your-study', permanent: true },
      ];
    },
  };

  export default nextConfig;
