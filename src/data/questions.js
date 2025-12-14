// MIRAGE Question Bank
// Each question has industry expectations and student options with alignment weights
// Targeted for core engineering fields: Mechanical, Electrical, Electronics, Computer Science, etc.

// Stream-specific question banks
export const questionsByStream = {
  cs: [
    {
      id: 1,
      category: "Problem Solving",
      scenario: "Your code works in development but crashes in production with real user data.",
      prompt: "What's your approach?",
      industryAnswer: {
        text: "Check logs, reproduce with production-like data, add monitoring, and implement proper error handling",
      },
      studentOptions: [
        {
          text: "Check logs, reproduce with production-like data, add monitoring, and implement proper error handling",
          weight: 1.0,
        },
        {
          text: "Add more console.log statements and redeploy",
          weight: 0.4,
        },
        {
          text: "Assume it's a server configuration issue",
          weight: 0.2,
        }
      ]
    },
    {
      id: 2,
      category: "Design Thinking",
      scenario: "Asked to build a feature that needs to handle 1M users, but you've only worked with 100-user systems.",
      prompt: "How do you proceed?",
      industryAnswer: {
        text: "Research scalability patterns, identify bottlenecks, design with load testing in mind, and consult with senior engineers",
      },
      studentOptions: [
        {
          text: "Research scalability patterns, identify bottlenecks, design with load testing in mind, and consult with senior engineers",
          weight: 1.0,
        },
        {
          text: "Build it the same way and optimize later if needed",
          weight: 0.4,
        },
        {
          text: "Copy architecture from a popular open-source project",
          weight: 0.5,
        }
      ]
    },
    {
      id: 3,
      category: "Communication",
      scenario: "You discover a security vulnerability while working on a feature late in the sprint.",
      prompt: "What do you do?",
      industryAnswer: {
        text: "Immediately escalate to security team and project lead with severity assessment and proposed fix timeline",
      },
      studentOptions: [
        {
          text: "Immediately escalate to security team and project lead with severity assessment and proposed fix timeline",
          weight: 1.0,
        },
        {
          text: "Fix it quickly yourself to avoid delaying the sprint",
          weight: 0.3,
        },
        {
          text: "Note it down and mention it in the next standup",
          weight: 0.2,
        }
      ]
    },
    {
      id: 4,
      category: "Learning Approach",
      scenario: "You need to integrate a third-party API you've never used before for a critical feature.",
      prompt: "What's your first step?",
      industryAnswer: {
        text: "Read API docs, test endpoints in Postman/curl, build a minimal proof-of-concept, then integrate",
      },
      studentOptions: [
        {
          text: "Read API docs, test endpoints in Postman/curl, build a minimal proof-of-concept, then integrate",
          weight: 1.0,
        },
        {
          text: "Find a tutorial or Stack Overflow answer and follow it",
          weight: 0.5,
        },
        {
          text: "Ask a colleague to help you integrate it",
          weight: 0.3,
        }
      ]
    },
    {
      id: 5,
      category: "Practical Judgment",
      scenario: "Your technically perfect solution takes 2 seconds to load. A colleague suggests a 'good enough' approach that loads in 200ms.",
      prompt: "How do you respond?",
      industryAnswer: {
        text: "Evaluate user experience impact, measure performance trade-offs, and prioritize user needs over perfect code",
      },
      studentOptions: [
        {
          text: "Evaluate user experience impact, measure performance trade-offs, and prioritize user needs over perfect code",
          weight: 1.0,
        },
        {
          text: "Defend the perfect solution since it's more maintainable",
          weight: 0.4,
        },
        {
          text: "Immediately switch without understanding the trade-offs",
          weight: 0.3,
        }
      ]
    }
  ],
  
  mechanical: [
    {
      id: 1,
      category: "Problem Solving",
      scenario: "A prototype assembly vibrates excessively during testing, but your CAD analysis predicted smooth operation.",
      prompt: "What's your approach?",
      industryAnswer: {
        text: "Measure actual vibration frequencies, check material properties and tolerances, and analyze assembly vs design specs",
      },
      studentOptions: [
        {
          text: "Measure actual vibration frequencies, check material properties and tolerances, and analyze assembly vs design specs",
          weight: 1.0,
        },
        {
          text: "Re-run the simulation with finer mesh settings",
          weight: 0.4,
        },
        {
          text: "Blame manufacturing defects or material quality",
          weight: 0.2,
        }
      ]
    },
    {
      id: 2,
      category: "Design Thinking",
      scenario: "Client wants to reduce product weight by 30% while maintaining the same load capacity.",
      prompt: "How do you proceed?",
      industryAnswer: {
        text: "Analyze stress distribution, explore material alternatives, consider topology optimization, and present multiple solutions with cost-weight trade-offs",
      },
      studentOptions: [
        {
          text: "Analyze stress distribution, explore material alternatives, consider topology optimization, and present multiple solutions with cost-weight trade-offs",
          weight: 1.0,
        },
        {
          text: "Simply reduce material thickness uniformly",
          weight: 0.3,
        },
        {
          text: "Tell them it's not possible without compromising strength",
          weight: 0.2,
        }
      ]
    },
    {
      id: 3,
      category: "Communication",
      scenario: "A critical machined part will be delayed by 2 weeks due to supplier issues, affecting assembly deadline.",
      prompt: "When and how do you communicate this?",
      industryAnswer: {
        text: "Immediately inform project manager and team with alternative supplier options, timeline impact, and mitigation plan",
      },
      studentOptions: [
        {
          text: "Immediately inform project manager and team with alternative supplier options, timeline impact, and mitigation plan",
          weight: 1.0,
        },
        {
          text: "Wait until you've exhausted all supplier options first",
          weight: 0.4,
        },
        {
          text: "Report it in the weekly project review meeting",
          weight: 0.2,
        }
      ]
    },
    {
      id: 4,
      category: "Learning Approach",
      scenario: "You need to design a hydraulic system but only studied it theoretically in college.",
      prompt: "What's your first step?",
      industryAnswer: {
        text: "Study industry standards (ISO/ANSI), review existing designs, consult with experienced engineers, and build calculations before CAD",
      },
      studentOptions: [
        {
          text: "Study industry standards (ISO/ANSI), review existing designs, consult with experienced engineers, and build calculations before CAD",
          weight: 1.0,
        },
        {
          text: "Start with CAD and figure out calculations later",
          weight: 0.4,
        },
        {
          text: "Ask senior engineer to design it while you watch",
          weight: 0.2,
        }
      ]
    },
    {
      id: 5,
      category: "Practical Judgment",
      scenario: "Your design passes all FEA tests, but a shop floor engineer says it will be difficult to manufacture.",
      prompt: "How do you respond?",
      industryAnswer: {
        text: "Visit the shop floor, understand manufacturing constraints, collaborate on design modifications that maintain function while improving manufacturability",
      },
      studentOptions: [
        {
          text: "Visit the shop floor, understand manufacturing constraints, collaborate on design modifications that maintain function while improving manufacturability",
          weight: 1.0,
        },
        {
          text: "Explain that the design meets all engineering requirements",
          weight: 0.3,
        },
        {
          text: "Immediately change design without understanding why",
          weight: 0.3,
        }
      ]
    }
  ],
  
  electrical: [
    {
      id: 1,
      category: "Problem Solving",
      scenario: "A PCB you designed shows intermittent failures during temperature testing, but works fine at room temperature.",
      prompt: "What's your approach?",
      industryAnswer: {
        text: "Check thermal expansion coefficients, inspect solder joints, measure voltage/current at different temps, and analyze component datasheets",
      },
      studentOptions: [
        {
          text: "Check thermal expansion coefficients, inspect solder joints, measure voltage/current at different temps, and analyze component datasheets",
          weight: 1.0,
        },
        {
          text: "Re-run circuit simulation with temperature variations",
          weight: 0.5,
        },
        {
          text: "Assume it's a testing equipment calibration issue",
          weight: 0.2,
        }
      ]
    },
    {
      id: 2,
      category: "Design Thinking",
      scenario: "You need to design a power supply that's 40% smaller but handles the same current with less heat.",
      prompt: "How do you proceed?",
      industryAnswer: {
        text: "Research switching topologies, compare efficiency curves, calculate thermal requirements, and present design options with size-cost-efficiency trade-offs",
      },
      studentOptions: [
        {
          text: "Research switching topologies, compare efficiency curves, calculate thermal requirements, and present design options with size-cost-efficiency trade-offs",
          weight: 1.0,
        },
        {
          text: "Just use smaller components and higher switching frequency",
          weight: 0.4,
        },
        {
          text: "Tell them physics doesn't allow it",
          weight: 0.2,
        }
      ]
    },
    {
      id: 3,
      category: "Communication",
      scenario: "You find a potential EMI issue that could fail certification testing, three weeks before the deadline.",
      prompt: "What do you do?",
      industryAnswer: {
        text: "Immediately alert the team with EMI measurements, identify affected frequency ranges, propose shielding/filtering solutions with timeline impact",
      },
      studentOptions: [
        {
          text: "Immediately alert the team with EMI measurements, identify affected frequency ranges, propose shielding/filtering solutions with timeline impact",
          weight: 1.0,
        },
        {
          text: "Try quick fixes first to see if you can solve it without escalating",
          weight: 0.4,
        },
        {
          text: "Wait until pre-certification testing to see if it's really a problem",
          weight: 0.2,
        }
      ]
    },
    {
      id: 4,
      category: "Learning Approach",
      scenario: "You're assigned to program a microcontroller using a framework you've never worked with.",
      prompt: "What's your first step?",
      industryAnswer: {
        text: "Read hardware reference manual, understand peripherals, write simple blink/UART programs, then gradually add complexity",
      },
      studentOptions: [
        {
          text: "Read hardware reference manual, understand peripherals, write simple blink/UART programs, then gradually add complexity",
          weight: 1.0,
        },
        {
          text: "Find example projects online and modify them",
          weight: 0.5,
        },
        {
          text: "Ask someone to set up the basic framework for you",
          weight: 0.3,
        }
      ]
    },
    {
      id: 5,
      category: "Practical Judgment",
      scenario: "Your circuit design is optimal on paper, but a senior engineer suggests using commercial modules instead of discrete components.",
      prompt: "How do you respond?",
      industryAnswer: {
        text: "Compare total cost including development time, reliability, and supply chain, then make data-driven decision",
      },
      studentOptions: [
        {
          text: "Compare total cost including development time, reliability, and supply chain, then make data-driven decision",
          weight: 1.0,
        },
        {
          text: "Defend custom design as more elegant and cost-effective",
          weight: 0.4,
        },
        {
          text: "Switch to modules immediately without analysis",
          weight: 0.3,
        }
      ]
    }
  ],
  
  civil: [
    {
      id: 1,
      category: "Problem Solving",
      scenario: "Concrete test samples show 15% less strength than your mix design calculations predicted.",
      prompt: "What's your approach?",
      industryAnswer: {
        text: "Check curing conditions, verify material test certificates, re-test aggregates, and investigate mixing/placement procedures",
      },
      studentOptions: [
        {
          text: "Check curing conditions, verify material test certificates, re-test aggregates, and investigate mixing/placement procedures",
          weight: 1.0,
        },
        {
          text: "Recalculate the mix design with different assumptions",
          weight: 0.4,
        },
        {
          text: "Assume the testing lab made an error",
          weight: 0.2,
        }
      ]
    },
    {
      id: 2,
      category: "Design Thinking",
      scenario: "Client wants to add two more floors to the building but reduce the foundation footprint by 20%.",
      prompt: "How do you proceed?",
      industryAnswer: {
        text: "Conduct soil analysis, explore deep foundation options, analyze structural load paths, present solutions with cost-risk-feasibility matrix",
      },
      studentOptions: [
        {
          text: "Conduct soil analysis, explore deep foundation options, analyze structural load paths, present solutions with cost-risk-feasibility matrix",
          weight: 1.0,
        },
        {
          text: "Just increase column sizes and foundation depth",
          weight: 0.3,
        },
        {
          text: "Tell them it violates building codes",
          weight: 0.3,
        }
      ]
    },
    {
      id: 3,
      category: "Communication",
      scenario: "Site inspection reveals that contractor used wrong grade steel in critical beam reinforcement.",
      prompt: "What do you do immediately?",
      industryAnswer: {
        text: "Stop work on that section, document with photos, notify project manager and structural consultant, calculate structural impact",
      },
      studentOptions: [
        {
          text: "Stop work on that section, document with photos, notify project manager and structural consultant, calculate structural impact",
          weight: 1.0,
        },
        {
          text: "Let them complete it and address in next inspection",
          weight: 0.2,
        },
        {
          text: "Verbally tell contractor and continue inspection",
          weight: 0.3,
        }
      ]
    },
    {
      id: 4,
      category: "Learning Approach",
      scenario: "You need to design earthquake-resistant structure but only covered basics in college.",
      prompt: "What's your first step?",
      industryAnswer: {
        text: "Study seismic codes (IS/IBC), review similar projects, consult with structural engineers, and use design software with validation calculations",
      },
      studentOptions: [
        {
          text: "Study seismic codes (IS/IBC), review similar projects, consult with structural engineers, and use design software with validation calculations",
          weight: 1.0,
        },
        {
          text: "Use structural analysis software with default parameters",
          weight: 0.4,
        },
        {
          text: "Ask senior engineer to review every step",
          weight: 0.3,
        }
      ]
    },
    {
      id: 5,
      category: "Practical Judgment",
      scenario: "Your optimized design saves 20% on steel but site engineer says it's difficult to execute given site conditions.",
      prompt: "How do you respond?",
      industryAnswer: {
        text: "Visit site, understand constraints, collaborate on practical alternative that balances economy with executability",
      },
      studentOptions: [
        {
          text: "Visit site, understand constraints, collaborate on practical alternative that balances economy with executability",
          weight: 1.0,
        },
        {
          text: "Insist on original design as it's structurally sound",
          weight: 0.3,
        },
        {
          text: "Immediately change without understanding site challenges",
          weight: 0.3,
        }
      ]
    }
  ],
  
  chemical: [
    {
      id: 1,
      category: "Problem Solving",
      scenario: "Pilot plant yields are 25% lower than your laboratory-scale experiments predicted.",
      prompt: "What's your approach?",
      industryAnswer: {
        text: "Analyze scale-up parameters (mixing, heat transfer, residence time), check material purity, and investigate process deviations",
      },
      studentOptions: [
        {
          text: "Analyze scale-up parameters (mixing, heat transfer, residence time), check material purity, and investigate process deviations",
          weight: 1.0,
        },
        {
          text: "Recalculate theoretical yields with different assumptions",
          weight: 0.4,
        },
        {
          text: "Assume equipment efficiency losses",
          weight: 0.3,
        }
      ]
    },
    {
      id: 2,
      category: "Design Thinking",
      scenario: "Management wants to reduce energy consumption by 30% while increasing production by 20%.",
      prompt: "How do you proceed?",
      industryAnswer: {
        text: "Conduct energy audit, explore heat integration, analyze process intensification options, present solutions with ROI and technical feasibility",
      },
      studentOptions: [
        {
          text: "Conduct energy audit, explore heat integration, analyze process intensification options, present solutions with ROI and technical feasibility",
          weight: 1.0,
        },
        {
          text: "Just increase temperature and pressure to speed up reactions",
          weight: 0.3,
        },
        {
          text: "Tell them both goals can't be achieved simultaneously",
          weight: 0.2,
        }
      ]
    },
    {
      id: 3,
      category: "Communication",
      scenario: "You notice a potential safety hazard in the distillation column operation during a night shift.",
      prompt: "What do you do immediately?",
      industryAnswer: {
        text: "Initiate safety protocol, alert shift supervisor and safety officer, document observations, and recommend immediate corrective actions",
      },
      studentOptions: [
        {
          text: "Initiate safety protocol, alert shift supervisor and safety officer, document observations, and recommend immediate corrective actions",
          weight: 1.0,
        },
        {
          text: "Monitor it for the rest of shift to confirm it's a real issue",
          weight: 0.3,
        },
        {
          text: "Report it in morning handover meeting",
          weight: 0.2,
        }
      ]
    },
    {
      id: 4,
      category: "Learning Approach",
      scenario: "You're asked to design a reactor using a catalytic process you've only studied theoretically.",
      prompt: "What's your first step?",
      industryAnswer: {
        text: "Review literature and patents, consult catalyst suppliers, study kinetics data, run small batch tests before scaling",
      },
      studentOptions: [
        {
          text: "Review literature and patents, consult catalyst suppliers, study kinetics data, run small batch tests before scaling",
          weight: 1.0,
        },
        {
          text: "Use reactor design software with standard correlations",
          weight: 0.5,
        },
        {
          text: "Ask senior engineer to provide design specifications",
          weight: 0.3,
        }
      ]
    },
    {
      id: 5,
      category: "Practical Judgment",
      scenario: "Your process design is thermodynamically optimal but plant operators say it's too complex to control.",
      prompt: "How do you respond?",
      industryAnswer: {
        text: "Shadow operators, understand control challenges, simplify design while maintaining efficiency, and provide comprehensive SOP",
      },
      studentOptions: [
        {
          text: "Shadow operators, understand control challenges, simplify design while maintaining efficiency, and provide comprehensive SOP",
          weight: 1.0,
        },
        {
          text: "Explain that operators need better training",
          weight: 0.3,
        },
        {
          text: "Immediately simplify without understanding control issues",
          weight: 0.3,
        }
      ]
    }
  ],
  
  other: [
    {
      id: 1,
      category: "Problem Solving",
      scenario: "During testing, a system you designed shows unexpected behavior that wasn't caught in simulation.",
      prompt: "What's your approach?",
      industryAnswer: {
        text: "Systematically isolate components, measure actual values, and document deviations from expected behavior",
      },
      studentOptions: [
        {
          text: "Systematically isolate components, measure actual values, and document deviations from expected behavior",
          weight: 1.0,
        },
        {
          text: "Re-run the simulation with different parameters until it matches",
          weight: 0.4,
        },
        {
          text: "Assume the testing equipment is faulty",
          weight: 0.2,
        }
      ]
    },
    {
      id: 2,
      category: "Design Thinking",
      scenario: "You're given conflicting requirements: reduce cost by 20% while improving performance.",
      prompt: "How do you proceed?",
      industryAnswer: {
        text: "Analyze trade-offs, propose multiple solutions with cost-performance data, and seek stakeholder prioritization",
      },
      studentOptions: [
        {
          text: "Analyze trade-offs, propose multiple solutions with cost-performance data, and seek stakeholder prioritization",
          weight: 1.0,
        },
        {
          text: "Focus on performance first, then worry about cost later",
          weight: 0.5,
        },
        {
          text: "Tell them it's impossible and wait for revised requirements",
          weight: 0.2,
        }
      ]
    },
    {
      id: 3,
      category: "Communication",
      scenario: "An implementation issue could delay the project by 2 weeks. You discover this on Thursday evening.",
      prompt: "When and how do you communicate this?",
      industryAnswer: {
        text: "Immediately inform the team with the issue, potential solutions, and revised timeline",
      },
      studentOptions: [
        {
          text: "Immediately inform the team with the issue, potential solutions, and revised timeline",
          weight: 1.0,
        },
        {
          text: "Try to fix it over the weekend first, then report if unsuccessful",
          weight: 0.4,
        },
        {
          text: "Wait until Monday's meeting to discuss it formally",
          weight: 0.2,
        }
      ]
    },
    {
      id: 4,
      category: "Learning Approach",
      scenario: "You need to work with an industrial tool/standard you only studied theoretically.",
      prompt: "What's your first step?",
      industryAnswer: {
        text: "Review documentation, set up a test environment, and build a small working prototype before the actual task",
      },
      studentOptions: [
        {
          text: "Review documentation, set up a test environment, and build a small working prototype before the actual task",
          weight: 1.0,
        },
        {
          text: "Watch tutorials and directly apply to the project",
          weight: 0.5,
        },
        {
          text: "Ask a senior engineer to guide you through each step",
          weight: 0.3,
        }
      ]
    },
    {
      id: 5,
      category: "Practical Judgment",
      scenario: "Your design meets all specifications, but an experienced engineer suggests a different approach based on field experience.",
      prompt: "How do you respond?",
      industryAnswer: {
        text: "Listen to their reasoning, understand the practical constraints, and evaluate both approaches objectively",
      },
      studentOptions: [
        {
          text: "Listen to their reasoning, understand the practical constraints, and evaluate both approaches objectively",
          weight: 1.0,
        },
        {
          text: "Defend your design since it meets all written specifications",
          weight: 0.4,
        },
        {
          text: "Immediately switch to their approach without understanding why",
          weight: 0.3,
        }
      ]
    }
  ]
};

// Get questions for a specific stream
export function getQuestionsForStream(streamId) {
  return questionsByStream[streamId] || questionsByStream.other;
}

// Backward compatibility - default questions
export const questions = questionsByStream.other;

// Calculate alignment score based on student responses
export function calculateAlignment(responses) {
  if (responses.length === 0) return 0;
  
  const totalWeight = responses.reduce((sum, response) => sum + response.weight, 0);
  const maxPossibleWeight = responses.length * 1.0;
  
  return Math.round((totalWeight / maxPossibleWeight) * 100);
}

// Generate personalized insights based on alignment score and responses
export function generateInsights(responses, alignmentScore) {
  // Analyze strengths (responses with high weight)
  const strengths = responses
    .map((r, idx) => ({ ...r, questionId: idx + 1 }))
    .filter(r => r.weight >= 0.8)
    .sort((a, b) => b.weight - a.weight);

  // Analyze gaps (responses with low weight)
  const gaps = responses
    .map((r, idx) => ({ ...r, questionId: idx + 1 }))
    .filter(r => r.weight < 0.7)
    .sort((a, b) => a.weight - b.weight);

  const insight = {
    strength: null,
    gap: null,
    focusArea: null
  };

  // Identify a strength
  if (strengths.length > 0) {
    const categories = strengths.map(s => questions[s.questionId - 1].category);
    const mostCommon = categories[0];
    insight.strength = `Strong alignment in ${mostCommon} — you understand ${
      mostCommon === 'Communication' ? 'the importance of proactive, clear communication in engineering teams' :
      mostCommon === 'Design Thinking' ? 'how to balance competing constraints in real-world engineering' :
      mostCommon === 'Problem Solving' ? 'systematic debugging and root cause analysis' :
      mostCommon === 'Learning Approach' ? 'how to bridge theory and practice effectively' :
      'the value of practical experience over theoretical perfection'
    }.`;
  }

  // Identify a gap
  if (gaps.length > 0) {
    const category = questions[gaps[0].questionId - 1].category;
    insight.gap = `Room to grow in ${category} — ${
      category === 'Communication' ? 'Industry requires immediate escalation of blockers, not solo heroics' :
      category === 'Design Thinking' ? 'Real engineering involves navigating trade-offs with data, not choosing one goal' :
      category === 'Problem Solving' ? 'Industry values methodical testing over assumptions about tools or simulations' :
      category === 'Learning Approach' ? 'Hands-on experimentation before implementation reduces costly mistakes' :
      'Industry values learning from field experience as much as textbook specifications'
    }.`;
  }

  // Suggest focus area
  if (alignmentScore >= 80) {
    insight.focusArea = "You're well-aligned with industry thinking. Focus on gaining hands-on experience through internships or lab projects.";
  } else if (alignmentScore >= 60) {
    insight.focusArea = "Bridge the gap by working on live projects, seeking mentorship, and understanding why industry practices differ from academic ideals.";
  } else {
    insight.focusArea = "Start by shadowing experienced engineers, asking 'why' during technical decisions, and building prototypes beyond simulations.";
  }

  return insight;
}
