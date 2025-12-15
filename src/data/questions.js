// MIRAGE Question Bank - Core Engineering Edition
// Large pool of questions for randomized, unique quiz experiences
// Each user gets a different set of 5 questions from the pool

// Question categories
const CATEGORIES = {
  PROBLEM_SOLVING: "Problem Solving",
  DESIGN_THINKING: "Design Thinking", 
  COMMUNICATION: "Communication",
  LEARNING: "Learning Approach",
  JUDGMENT: "Practical Judgment",
  TEAMWORK: "Teamwork",
  SAFETY: "Safety & Compliance",
  INNOVATION: "Innovation"
};

// Master question pool for core engineering
const masterQuestionPool = {
  // ==================== MECHANICAL ENGINEERING ====================
  mechanical: [
    // Problem Solving
    {
      category: CATEGORIES.PROBLEM_SOLVING,
      scenario: "A prototype assembly vibrates excessively during testing, but your CAD analysis predicted smooth operation.",
      prompt: "What's your approach?",
      industryAnswer: { text: "Measure actual vibration frequencies, check material properties and tolerances, compare assembly vs design specs" },
      studentOptions: [
        { text: "Measure actual vibration frequencies, check material properties and tolerances, compare assembly vs design specs", weight: 1.0 },
        { text: "Re-run the simulation with finer mesh settings", weight: 0.4 },
        { text: "Blame manufacturing defects or material quality", weight: 0.2 }
      ]
    },
    {
      category: CATEGORIES.PROBLEM_SOLVING,
      scenario: "A bearing is failing much earlier than its calculated L10 life in a rotating machinery application.",
      prompt: "How do you investigate?",
      industryAnswer: { text: "Check actual loads vs calculated, inspect alignment, measure temperature, analyze lubricant condition and contamination" },
      studentOptions: [
        { text: "Check actual loads vs calculated, inspect alignment, measure temperature, analyze lubricant condition and contamination", weight: 1.0 },
        { text: "Replace with a higher-rated bearing", weight: 0.4 },
        { text: "Assume it's a manufacturing defect and contact supplier", weight: 0.3 }
      ]
    },
    {
      category: CATEGORIES.PROBLEM_SOLVING,
      scenario: "Your heat exchanger is not achieving the design temperature drop, affecting process efficiency.",
      prompt: "What do you check first?",
      industryAnswer: { text: "Measure actual flow rates, check for fouling, verify inlet temperatures, compare with design assumptions" },
      studentOptions: [
        { text: "Measure actual flow rates, check for fouling, verify inlet temperatures, compare with design assumptions", weight: 1.0 },
        { text: "Increase pump speed to push more fluid through", weight: 0.3 },
        { text: "Recommend replacing with a larger heat exchanger", weight: 0.2 }
      ]
    },
    {
      category: CATEGORIES.PROBLEM_SOLVING,
      scenario: "Welded joints are cracking in a structural frame within months of installation.",
      prompt: "How do you diagnose the issue?",
      industryAnswer: { text: "Analyze crack pattern for fatigue vs stress, review welding procedure and NDT records, check for stress concentrations in design" },
      studentOptions: [
        { text: "Analyze crack pattern for fatigue vs stress, review welding procedure and NDT records, check for stress concentrations in design", weight: 1.0 },
        { text: "Blame the welding contractor and demand rework", weight: 0.3 },
        { text: "Add reinforcement plates to strengthen the joints", weight: 0.4 }
      ]
    },
    // Design Thinking
    {
      category: CATEGORIES.DESIGN_THINKING,
      scenario: "Client wants to reduce product weight by 30% while maintaining the same load capacity.",
      prompt: "How do you proceed?",
      industryAnswer: { text: "Analyze stress distribution, explore material alternatives, consider topology optimization, present solutions with cost-weight trade-offs" },
      studentOptions: [
        { text: "Analyze stress distribution, explore material alternatives, consider topology optimization, present solutions with cost-weight trade-offs", weight: 1.0 },
        { text: "Simply reduce material thickness uniformly", weight: 0.3 },
        { text: "Tell them it's not possible without compromising strength", weight: 0.2 }
      ]
    },
    {
      category: CATEGORIES.DESIGN_THINKING,
      scenario: "You need to design a component for both high-volume production and occasional customization.",
      prompt: "What's your design strategy?",
      industryAnswer: { text: "Design modular base with configurable features, balance standardization with flexibility, consider DFM principles" },
      studentOptions: [
        { text: "Design modular base with configurable features, balance standardization with flexibility, consider DFM principles", weight: 1.0 },
        { text: "Create two separate designs - one for each use case", weight: 0.5 },
        { text: "Focus only on high-volume design since that's the main revenue", weight: 0.3 }
      ]
    },
    {
      category: CATEGORIES.DESIGN_THINKING,
      scenario: "A machine needs to operate in both desert heat (50°C) and arctic cold (-40°C) conditions.",
      prompt: "How do you approach thermal design?",
      industryAnswer: { text: "Select materials for thermal cycling, design for expansion/contraction, consider active vs passive thermal management" },
      studentOptions: [
        { text: "Select materials for thermal cycling, design for expansion/contraction, consider active vs passive thermal management", weight: 1.0 },
        { text: "Use standard materials and specify operating temperature limits", weight: 0.4 },
        { text: "Design for one extreme and add heaters/coolers for the other", weight: 0.5 }
      ]
    },
    // Communication
    {
      category: CATEGORIES.COMMUNICATION,
      scenario: "A critical machined part will be delayed by 2 weeks due to supplier issues, affecting assembly deadline.",
      prompt: "When and how do you communicate this?",
      industryAnswer: { text: "Immediately inform project manager and team with alternative supplier options, timeline impact, and mitigation plan" },
      studentOptions: [
        { text: "Immediately inform project manager and team with alternative supplier options, timeline impact, and mitigation plan", weight: 1.0 },
        { text: "Wait until you've exhausted all supplier options first", weight: 0.4 },
        { text: "Report it in the weekly project review meeting", weight: 0.2 }
      ]
    },
    {
      category: CATEGORIES.COMMUNICATION,
      scenario: "Your FEA results show the design will fail under specified loads, but the project deadline is tomorrow.",
      prompt: "How do you handle this?",
      industryAnswer: { text: "Immediately present findings to the team with data, propose design modifications, and be transparent about timeline implications" },
      studentOptions: [
        { text: "Immediately present findings to the team with data, propose design modifications, and be transparent about timeline implications", weight: 1.0 },
        { text: "Adjust safety factors to make the numbers work", weight: 0.1 },
        { text: "Submit the results and let someone else decide", weight: 0.3 }
      ]
    },
    // Learning
    {
      category: CATEGORIES.LEARNING,
      scenario: "You need to design a hydraulic system but only studied it theoretically in college.",
      prompt: "What's your first step?",
      industryAnswer: { text: "Study industry standards (ISO/ANSI), review existing designs, consult with experienced engineers, build calculations before CAD" },
      studentOptions: [
        { text: "Study industry standards (ISO/ANSI), review existing designs, consult with experienced engineers, build calculations before CAD", weight: 1.0 },
        { text: "Start with CAD and figure out calculations later", weight: 0.4 },
        { text: "Ask senior engineer to design it while you watch", weight: 0.2 }
      ]
    },
    {
      category: CATEGORIES.LEARNING,
      scenario: "You're tasked with improving a legacy machine design that's been running for 20 years.",
      prompt: "How do you approach this?",
      industryAnswer: { text: "Study maintenance records, interview operators, understand why current design decisions were made, then identify improvement areas" },
      studentOptions: [
        { text: "Study maintenance records, interview operators, understand why current design decisions were made, then identify improvement areas", weight: 1.0 },
        { text: "Start fresh with modern CAD and best practices", weight: 0.4 },
        { text: "Focus only on the specific problem they mentioned", weight: 0.5 }
      ]
    },
    // Practical Judgment
    {
      category: CATEGORIES.JUDGMENT,
      scenario: "Your design passes all FEA tests, but a shop floor engineer says it will be difficult to manufacture.",
      prompt: "How do you respond?",
      industryAnswer: { text: "Visit the shop floor, understand manufacturing constraints, collaborate on design modifications that maintain function" },
      studentOptions: [
        { text: "Visit the shop floor, understand manufacturing constraints, collaborate on design modifications that maintain function", weight: 1.0 },
        { text: "Explain that the design meets all engineering requirements", weight: 0.3 },
        { text: "Immediately change design without understanding why", weight: 0.3 }
      ]
    },
    {
      category: CATEGORIES.JUDGMENT,
      scenario: "Two vendors quote similar prices - one uses proven technology, the other offers innovative features.",
      prompt: "How do you make the decision?",
      industryAnswer: { text: "Evaluate risk tolerance for the application, consider support/maintenance, analyze total cost of ownership, involve stakeholders" },
      studentOptions: [
        { text: "Evaluate risk tolerance for the application, consider support/maintenance, analyze total cost of ownership, involve stakeholders", weight: 1.0 },
        { text: "Choose the innovative option to stay current with technology", weight: 0.4 },
        { text: "Always go with proven technology to minimize risk", weight: 0.5 }
      ]
    },
    // Teamwork
    {
      category: CATEGORIES.TEAMWORK,
      scenario: "An electrical engineer's component placement conflicts with your optimal airflow design.",
      prompt: "How do you resolve this?",
      industryAnswer: { text: "Collaborate to understand constraints, explore compromise solutions, run simulations together, escalate if needed with data" },
      studentOptions: [
        { text: "Collaborate to understand constraints, explore compromise solutions, run simulations together, escalate if needed with data", weight: 1.0 },
        { text: "Insist on your airflow design since thermal is your domain", weight: 0.3 },
        { text: "Let them have their way to avoid conflict", weight: 0.2 }
      ]
    },
    {
      category: CATEGORIES.TEAMWORK,
      scenario: "A junior team member's design has a fundamental flaw that they're proud of.",
      prompt: "How do you handle the feedback?",
      industryAnswer: { text: "Privately discuss, acknowledge the effort, ask questions that lead them to discover the issue, offer mentorship" },
      studentOptions: [
        { text: "Privately discuss, acknowledge the effort, ask questions that lead them to discover the issue, offer mentorship", weight: 1.0 },
        { text: "Point out the flaw in the design review for learning", weight: 0.4 },
        { text: "Fix it yourself to save time and avoid awkwardness", weight: 0.3 }
      ]
    },
    // Safety
    {
      category: CATEGORIES.SAFETY,
      scenario: "You notice a safety guard design could potentially be bypassed by operators to speed up production.",
      prompt: "What action do you take?",
      industryAnswer: { text: "Redesign to make bypass physically impossible, document the hazard, involve safety team, don't wait for an incident" },
      studentOptions: [
        { text: "Redesign to make bypass physically impossible, document the hazard, involve safety team, don't wait for an incident", weight: 1.0 },
        { text: "Add warning labels and include in training", weight: 0.4 },
        { text: "It's an operator behavior issue, not a design problem", weight: 0.1 }
      ]
    },
    // Innovation
    {
      category: CATEGORIES.INNOVATION,
      scenario: "You have an idea to improve a process but it requires significant upfront investment.",
      prompt: "How do you present it?",
      industryAnswer: { text: "Build a business case with ROI timeline, prototype if possible, present data on savings vs investment, propose pilot" },
      studentOptions: [
        { text: "Build a business case with ROI timeline, prototype if possible, present data on savings vs investment, propose pilot", weight: 1.0 },
        { text: "Mention it casually and see if anyone is interested", weight: 0.3 },
        { text: "Wait for a formal innovation challenge or suggestion program", weight: 0.4 }
      ]
    }
  ],

  // ==================== ELECTRICAL ENGINEERING ====================
  electrical: [
    // Problem Solving
    {
      category: CATEGORIES.PROBLEM_SOLVING,
      scenario: "A PCB you designed shows intermittent failures during temperature testing, but works fine at room temperature.",
      prompt: "What's your approach?",
      industryAnswer: { text: "Check thermal expansion coefficients, inspect solder joints, measure voltage/current at different temps, analyze component datasheets" },
      studentOptions: [
        { text: "Check thermal expansion coefficients, inspect solder joints, measure voltage/current at different temps, analyze component datasheets", weight: 1.0 },
        { text: "Re-run circuit simulation with temperature variations", weight: 0.5 },
        { text: "Assume it's a testing equipment calibration issue", weight: 0.2 }
      ]
    },
    {
      category: CATEGORIES.PROBLEM_SOLVING,
      scenario: "Motor drive is tripping on overcurrent randomly, but load measurements seem normal.",
      prompt: "How do you troubleshoot?",
      industryAnswer: { text: "Check for voltage transients, analyze harmonic content, verify cable impedance, review protection settings vs actual startup current" },
      studentOptions: [
        { text: "Check for voltage transients, analyze harmonic content, verify cable impedance, review protection settings vs actual startup current", weight: 1.0 },
        { text: "Increase the overcurrent trip setting", weight: 0.3 },
        { text: "Replace the drive with a higher-rated unit", weight: 0.4 }
      ]
    },
    {
      category: CATEGORIES.PROBLEM_SOLVING,
      scenario: "Communication between PLCs is dropping packets intermittently in a factory network.",
      prompt: "What do you investigate?",
      industryAnswer: { text: "Check for EMI sources, verify cable shielding/grounding, analyze network traffic for congestion, review switch configurations" },
      studentOptions: [
        { text: "Check for EMI sources, verify cable shielding/grounding, analyze network traffic for congestion, review switch configurations", weight: 1.0 },
        { text: "Replace ethernet cables with higher-rated ones", weight: 0.4 },
        { text: "Increase timeout and retry parameters", weight: 0.3 }
      ]
    },
    // Design Thinking
    {
      category: CATEGORIES.DESIGN_THINKING,
      scenario: "You need to design a power supply that's 40% smaller but handles the same current with less heat.",
      prompt: "How do you proceed?",
      industryAnswer: { text: "Research switching topologies, compare efficiency curves, calculate thermal requirements, present design options with size-cost-efficiency trade-offs" },
      studentOptions: [
        { text: "Research switching topologies, compare efficiency curves, calculate thermal requirements, present design options with size-cost-efficiency trade-offs", weight: 1.0 },
        { text: "Just use smaller components and higher switching frequency", weight: 0.4 },
        { text: "Tell them physics doesn't allow it", weight: 0.2 }
      ]
    },
    {
      category: CATEGORIES.DESIGN_THINKING,
      scenario: "Client wants a control panel that's both cost-effective for standard use and expandable for premium features.",
      prompt: "How do you design this?",
      industryAnswer: { text: "Design modular architecture with base I/O, provision for expansion slots, use scalable PLC family, document upgrade paths" },
      studentOptions: [
        { text: "Design modular architecture with base I/O, provision for expansion slots, use scalable PLC family, document upgrade paths", weight: 1.0 },
        { text: "Design for premium features and remove modules for standard version", weight: 0.5 },
        { text: "Create two completely separate designs", weight: 0.3 }
      ]
    },
    // Communication
    {
      category: CATEGORIES.COMMUNICATION,
      scenario: "You find a potential EMI issue that could fail certification testing, three weeks before the deadline.",
      prompt: "What do you do?",
      industryAnswer: { text: "Immediately alert the team with EMI measurements, identify affected frequency ranges, propose shielding/filtering solutions with timeline impact" },
      studentOptions: [
        { text: "Immediately alert the team with EMI measurements, identify affected frequency ranges, propose shielding/filtering solutions with timeline impact", weight: 1.0 },
        { text: "Try quick fixes first to see if you can solve it without escalating", weight: 0.4 },
        { text: "Wait until pre-certification testing to see if it's really a problem", weight: 0.2 }
      ]
    },
    {
      category: CATEGORIES.COMMUNICATION,
      scenario: "The specification you received is ambiguous and could be interpreted two different ways.",
      prompt: "How do you handle this?",
      industryAnswer: { text: "Document both interpretations, schedule a clarification meeting with stakeholders, get written confirmation before proceeding" },
      studentOptions: [
        { text: "Document both interpretations, schedule a clarification meeting with stakeholders, get written confirmation before proceeding", weight: 1.0 },
        { text: "Pick the interpretation that's easier to implement", weight: 0.3 },
        { text: "Build what seems most logical and check later", weight: 0.3 }
      ]
    },
    // Learning
    {
      category: CATEGORIES.LEARNING,
      scenario: "You're assigned to program a microcontroller using a framework you've never worked with.",
      prompt: "What's your first step?",
      industryAnswer: { text: "Read hardware reference manual, understand peripherals, write simple blink/UART programs, then gradually add complexity" },
      studentOptions: [
        { text: "Read hardware reference manual, understand peripherals, write simple blink/UART programs, then gradually add complexity", weight: 1.0 },
        { text: "Find example projects online and modify them", weight: 0.5 },
        { text: "Ask someone to set up the basic framework for you", weight: 0.3 }
      ]
    },
    {
      category: CATEGORIES.LEARNING,
      scenario: "You need to implement a communication protocol you've only read about theoretically.",
      prompt: "How do you approach this?",
      industryAnswer: { text: "Study protocol specification, use logic analyzer to capture working examples, build incrementally, test each layer separately" },
      studentOptions: [
        { text: "Study protocol specification, use logic analyzer to capture working examples, build incrementally, test each layer separately", weight: 1.0 },
        { text: "Use a library that implements the protocol", weight: 0.5 },
        { text: "Copy implementation from online resources", weight: 0.3 }
      ]
    },
    // Practical Judgment
    {
      category: CATEGORIES.JUDGMENT,
      scenario: "Your circuit design is optimal on paper, but a senior engineer suggests using commercial modules instead of discrete components.",
      prompt: "How do you respond?",
      industryAnswer: { text: "Compare total cost including development time, reliability, and supply chain, then make data-driven decision" },
      studentOptions: [
        { text: "Compare total cost including development time, reliability, and supply chain, then make data-driven decision", weight: 1.0 },
        { text: "Defend custom design as more elegant and cost-effective", weight: 0.4 },
        { text: "Switch to modules immediately without analysis", weight: 0.3 }
      ]
    },
    {
      category: CATEGORIES.JUDGMENT,
      scenario: "A component is perfect for your application but it's single-sourced from one manufacturer.",
      prompt: "What's your approach?",
      industryAnswer: { text: "Evaluate risk, find alternate-source compatible parts, design for substitution, include lifecycle assessment" },
      studentOptions: [
        { text: "Evaluate risk, find alternate-source compatible parts, design for substitution, include lifecycle assessment", weight: 1.0 },
        { text: "Use it since it's the best technical solution", weight: 0.4 },
        { text: "Reject it entirely and find a multi-sourced alternative", weight: 0.5 }
      ]
    },
    // Safety
    {
      category: CATEGORIES.SAFETY,
      scenario: "You realize the control system lacks proper fail-safe behavior if the main processor crashes.",
      prompt: "What do you do?",
      industryAnswer: { text: "Design watchdog and independent safety circuit, define safe state, implement SIL-appropriate redundancy, document failure modes" },
      studentOptions: [
        { text: "Design watchdog and independent safety circuit, define safe state, implement SIL-appropriate redundancy, document failure modes", weight: 1.0 },
        { text: "Add software watchdog timer to restart the processor", weight: 0.4 },
        { text: "Processor crashes are rare, rely on manual operator intervention", weight: 0.1 }
      ]
    },
    // Teamwork
    {
      category: CATEGORIES.TEAMWORK,
      scenario: "The software team's code structure doesn't match your hardware memory map assumptions.",
      prompt: "How do you resolve this?",
      industryAnswer: { text: "Set up a joint meeting, review interface documentation together, agree on changes and update specifications collaboratively" },
      studentOptions: [
        { text: "Set up a joint meeting, review interface documentation together, agree on changes and update specifications collaboratively", weight: 1.0 },
        { text: "Send them updated documentation and ask them to adapt", weight: 0.4 },
        { text: "Modify the hardware map to match their code structure", weight: 0.4 }
      ]
    },
    // Innovation
    {
      category: CATEGORIES.INNOVATION,
      scenario: "You've found a way to reduce board cost by 15% using a newer component that's not yet widely adopted.",
      prompt: "How do you propose this?",
      industryAnswer: { text: "Build a prototype, gather reliability data, analyze supply chain risks, present with fallback plan, propose limited pilot" },
      studentOptions: [
        { text: "Build a prototype, gather reliability data, analyze supply chain risks, present with fallback plan, propose limited pilot", weight: 1.0 },
        { text: "Wait until the component is more established in the market", weight: 0.4 },
        { text: "Switch to it immediately to capture cost savings", weight: 0.3 }
      ]
    }
  ],

  // ==================== CIVIL ENGINEERING ====================
  civil: [
    // Problem Solving
    {
      category: CATEGORIES.PROBLEM_SOLVING,
      scenario: "Concrete test samples show 15% less strength than your mix design calculations predicted.",
      prompt: "What's your approach?",
      industryAnswer: { text: "Check curing conditions, verify material test certificates, re-test aggregates, investigate mixing/placement procedures" },
      studentOptions: [
        { text: "Check curing conditions, verify material test certificates, re-test aggregates, investigate mixing/placement procedures", weight: 1.0 },
        { text: "Recalculate the mix design with different assumptions", weight: 0.4 },
        { text: "Assume the testing lab made an error", weight: 0.2 }
      ]
    },
    {
      category: CATEGORIES.PROBLEM_SOLVING,
      scenario: "A newly constructed floor slab is showing unexpected deflection under service load.",
      prompt: "How do you investigate?",
      industryAnswer: { text: "Measure actual deflection vs predicted, check rebar placement with GPR, verify concrete strength from cores, review construction records" },
      studentOptions: [
        { text: "Measure actual deflection vs predicted, check rebar placement with GPR, verify concrete strength from cores, review construction records", weight: 1.0 },
        { text: "Recalculate assuming worst-case material properties", weight: 0.4 },
        { text: "Recommend propping until further analysis", weight: 0.5 }
      ]
    },
    // Design Thinking
    {
      category: CATEGORIES.DESIGN_THINKING,
      scenario: "Client wants to add two more floors to the building but reduce the foundation footprint by 20%.",
      prompt: "How do you proceed?",
      industryAnswer: { text: "Conduct soil analysis, explore deep foundation options, analyze structural load paths, present solutions with cost-risk-feasibility matrix" },
      studentOptions: [
        { text: "Conduct soil analysis, explore deep foundation options, analyze structural load paths, present solutions with cost-risk-feasibility matrix", weight: 1.0 },
        { text: "Just increase column sizes and foundation depth", weight: 0.3 },
        { text: "Explain it's structurally impossible", weight: 0.2 }
      ]
    },
    {
      category: CATEGORIES.DESIGN_THINKING,
      scenario: "A bridge design needs to accommodate both current traffic and potential future expansion to 6 lanes.",
      prompt: "How do you approach this?",
      industryAnswer: { text: "Design substructure for ultimate capacity, deck for initial needs with widening provisions, document future expansion sequence" },
      studentOptions: [
        { text: "Design substructure for ultimate capacity, deck for initial needs with widening provisions, document future expansion sequence", weight: 1.0 },
        { text: "Design for current needs and rebuild later if needed", weight: 0.3 },
        { text: "Build full 6-lane capacity now to avoid future work", weight: 0.4 }
      ]
    },
    // Communication
    {
      category: CATEGORIES.COMMUNICATION,
      scenario: "Site investigation reveals unexpected soil conditions that could double foundation costs.",
      prompt: "How do you communicate this?",
      industryAnswer: { text: "Prepare detailed report with data, present alternative foundation options with costs, involve geotechnical expert, schedule stakeholder meeting" },
      studentOptions: [
        { text: "Prepare detailed report with data, present alternative foundation options with costs, involve geotechnical expert, schedule stakeholder meeting", weight: 1.0 },
        { text: "Email the findings and wait for response", weight: 0.3 },
        { text: "Modify design to work with available budget", weight: 0.4 }
      ]
    },
    // Learning
    {
      category: CATEGORIES.LEARNING,
      scenario: "You're assigned to design a post-tensioned slab but have only designed conventional RC slabs.",
      prompt: "What's your approach?",
      industryAnswer: { text: "Study relevant codes, review completed PT projects, consult PT specialists, understand tendon profiles before design" },
      studentOptions: [
        { text: "Study relevant codes, review completed PT projects, consult PT specialists, understand tendon profiles before design", weight: 1.0 },
        { text: "Use PT design software and learn by doing", weight: 0.4 },
        { text: "Design as RC slab and let seniors convert to PT", weight: 0.2 }
      ]
    },
    // Practical Judgment
    {
      category: CATEGORIES.JUDGMENT,
      scenario: "A contractor proposes a faster construction method you're not familiar with.",
      prompt: "How do you evaluate this?",
      industryAnswer: { text: "Research the method, request case studies, consult with experienced engineers, evaluate risks vs schedule benefits" },
      studentOptions: [
        { text: "Research the method, request case studies, consult with experienced engineers, evaluate risks vs schedule benefits", weight: 1.0 },
        { text: "Reject it since you can't verify it meets standards", weight: 0.4 },
        { text: "Approve since contractors know construction better", weight: 0.3 }
      ]
    },
    {
      category: CATEGORIES.JUDGMENT,
      scenario: "An experienced site supervisor suggests changing rebar spacing from your detailed drawings.",
      prompt: "How do you respond?",
      industryAnswer: { text: "Listen to their reasoning, understand the practical constraints, evaluate both approaches objectively" },
      studentOptions: [
        { text: "Listen to their reasoning, understand the practical constraints, evaluate both approaches objectively", weight: 1.0 },
        { text: "Insist on original design since calculations are verified", weight: 0.4 },
        { text: "Accept their suggestion since they have field experience", weight: 0.3 }
      ]
    },
    // Safety
    {
      category: CATEGORIES.SAFETY,
      scenario: "You notice construction workers not following fall protection requirements during site inspection.",
      prompt: "What action do you take?",
      industryAnswer: { text: "Stop work immediately, report to site safety officer, document the violation, follow up on corrective actions" },
      studentOptions: [
        { text: "Stop work immediately, report to site safety officer, document the violation, follow up on corrective actions", weight: 1.0 },
        { text: "Mention it to the contractor supervisor", weight: 0.4 },
        { text: "Note it for the next safety meeting", weight: 0.2 }
      ]
    },
    // Teamwork
    {
      category: CATEGORIES.TEAMWORK,
      scenario: "The architect's aesthetic vision conflicts with your structural bracing requirements.",
      prompt: "How do you resolve this?",
      industryAnswer: { text: "Collaborate to find alternatives like concealed bracing, present multiple structural options, involve other disciplines" },
      studentOptions: [
        { text: "Collaborate to find alternatives like concealed bracing, present multiple structural options, involve other disciplines", weight: 1.0 },
        { text: "Insist on exposed bracing for structural integrity", weight: 0.3 },
        { text: "Reduce bracing to minimum code requirements", weight: 0.2 }
      ]
    }
  ],

  // ==================== GENERIC CORE ENGINEERING ====================
  other: [
    // Problem Solving
    {
      category: CATEGORIES.PROBLEM_SOLVING,
      scenario: "Your simulation results don't match actual test results, with 25% deviation.",
      prompt: "What's your approach?",
      industryAnswer: { text: "Verify boundary conditions, check input parameters against actuals, validate model assumptions, identify sources of uncertainty" },
      studentOptions: [
        { text: "Verify boundary conditions, check input parameters against actuals, validate model assumptions, identify sources of uncertainty", weight: 1.0 },
        { text: "Adjust model parameters until results match", weight: 0.3 },
        { text: "Assume testing conditions were different from ideal", weight: 0.3 }
      ]
    },
    {
      category: CATEGORIES.PROBLEM_SOLVING,
      scenario: "A system that worked in lab testing is failing in the field environment.",
      prompt: "How do you diagnose this?",
      industryAnswer: { text: "Compare lab vs field conditions systematically - temperature, vibration, power quality, humidity, dust, EMI" },
      studentOptions: [
        { text: "Compare lab vs field conditions systematically - temperature, vibration, power quality, humidity, dust, EMI", weight: 1.0 },
        { text: "Send the lab unit to field to verify it works", weight: 0.4 },
        { text: "Assume it's a manufacturing quality issue in field units", weight: 0.3 }
      ]
    },
    {
      category: CATEGORIES.PROBLEM_SOLVING,
      scenario: "Your project is behind schedule because a calculation method turned out to be more complex than estimated.",
      prompt: "What do you do?",
      industryAnswer: { text: "Communicate immediately with timeline update, identify what can be simplified or parallelized, document lessons for future estimates" },
      studentOptions: [
        { text: "Communicate immediately with timeline update, identify what can be simplified or parallelized, document lessons for future estimates", weight: 1.0 },
        { text: "Work overtime to catch up without telling anyone", weight: 0.4 },
        { text: "Simplify the calculation approach to meet deadline", weight: 0.3 }
      ]
    },
    // Design Thinking
    {
      category: CATEGORIES.DESIGN_THINKING,
      scenario: "You need to design a product for both cost-sensitive and premium market segments.",
      prompt: "What's your strategy?",
      industryAnswer: { text: "Design scalable platform architecture, identify common vs differentiated features, optimize for manufacturing flexibility" },
      studentOptions: [
        { text: "Design scalable platform architecture, identify common vs differentiated features, optimize for manufacturing flexibility", weight: 1.0 },
        { text: "Design premium version first, then strip features for cost version", weight: 0.5 },
        { text: "Create two completely independent designs", weight: 0.3 }
      ]
    },
    {
      category: CATEGORIES.DESIGN_THINKING,
      scenario: "Client requirements conflict - they want maximum performance AND minimum cost AND fastest delivery.",
      prompt: "How do you handle this?",
      industryAnswer: { text: "Present trade-off analysis clearly, help client prioritize, propose tiered options, be honest about what's achievable" },
      studentOptions: [
        { text: "Present trade-off analysis clearly, help client prioritize, propose tiered options, be honest about what's achievable", weight: 1.0 },
        { text: "Promise to try your best on all fronts", weight: 0.3 },
        { text: "Focus on the one they seem to care about most", weight: 0.4 }
      ]
    },
    // Communication
    {
      category: CATEGORIES.COMMUNICATION,
      scenario: "You discover a potential issue that might be nothing, or might be serious - you're not sure yet.",
      prompt: "What do you do?",
      industryAnswer: { text: "Flag it immediately with your current assessment and plan to investigate further, keep stakeholders informed as you learn more" },
      studentOptions: [
        { text: "Flag it immediately with your current assessment and plan to investigate further, keep stakeholders informed as you learn more", weight: 1.0 },
        { text: "Investigate fully before raising any concerns", weight: 0.4 },
        { text: "Wait to see if it develops into a real problem", weight: 0.2 }
      ]
    },
    {
      category: CATEGORIES.COMMUNICATION,
      scenario: "A colleague's work has an error that will affect your deliverable if not fixed.",
      prompt: "How do you address this?",
      industryAnswer: { text: "Talk to them directly first, offer to help understand the issue, escalate only if they're unresponsive or dismissive" },
      studentOptions: [
        { text: "Talk to them directly first, offer to help understand the issue, escalate only if they're unresponsive or dismissive", weight: 1.0 },
        { text: "Report the issue to the project manager", weight: 0.4 },
        { text: "Fix it yourself to avoid conflict", weight: 0.3 }
      ]
    },
    {
      category: CATEGORIES.COMMUNICATION,
      scenario: "Your manager wants to present your analysis to executives but some conclusions are preliminary.",
      prompt: "How do you handle this?",
      industryAnswer: { text: "Clearly mark what's validated vs preliminary, quantify confidence levels, recommend waiting vs presenting with caveats" },
      studentOptions: [
        { text: "Clearly mark what's validated vs preliminary, quantify confidence levels, recommend waiting vs presenting with caveats", weight: 1.0 },
        { text: "Let manager decide what to present since they know the audience", weight: 0.4 },
        { text: "Present only the validated conclusions", weight: 0.5 }
      ]
    },
    // Learning
    {
      category: CATEGORIES.LEARNING,
      scenario: "You need to use software you've never worked with for an urgent project.",
      prompt: "What's your approach?",
      industryAnswer: { text: "Do a quick tutorial on core features, work on a simple test case first, ask colleagues for tips, learn by doing with frequent saves" },
      studentOptions: [
        { text: "Do a quick tutorial on core features, work on a simple test case first, ask colleagues for tips, learn by doing with frequent saves", weight: 1.0 },
        { text: "Find someone who knows it to do this task", weight: 0.4 },
        { text: "Complete a full training course before starting", weight: 0.3 }
      ]
    },
    {
      category: CATEGORIES.LEARNING,
      scenario: "You made an error that was caught in review - it's not the first time you've made this type of mistake.",
      prompt: "How do you respond?",
      industryAnswer: { text: "Acknowledge the pattern, analyze root cause, create a personal checklist or process change, thank the reviewer" },
      studentOptions: [
        { text: "Acknowledge the pattern, analyze root cause, create a personal checklist or process change, thank the reviewer", weight: 1.0 },
        { text: "Apologize and promise to be more careful", weight: 0.4 },
        { text: "Point out that the review process caught it so the system works", weight: 0.2 }
      ]
    },
    // Practical Judgment
    {
      category: CATEGORIES.JUDGMENT,
      scenario: "You have two design approaches - one you're confident in, and one that's better but you're less sure about.",
      prompt: "Which do you choose?",
      industryAnswer: { text: "Assess risk tolerance for the project, present both options with trade-offs, seek expert review for the uncertain approach" },
      studentOptions: [
        { text: "Assess risk tolerance for the project, present both options with trade-offs, seek expert review for the uncertain approach", weight: 1.0 },
        { text: "Go with the confident approach to minimize risk", weight: 0.5 },
        { text: "Go with the better approach to deliver optimal results", weight: 0.4 }
      ]
    },
    {
      category: CATEGORIES.JUDGMENT,
      scenario: "A vendor is pushing a newer technology that would simplify your design significantly.",
      prompt: "How do you evaluate this?",
      industryAnswer: { text: "Request reference projects, evaluate vendor stability, assess long-term support, compare total lifecycle cost and risk" },
      studentOptions: [
        { text: "Request reference projects, evaluate vendor stability, assess long-term support, compare total lifecycle cost and risk", weight: 1.0 },
        { text: "Adopt it if the technical specs are better", weight: 0.4 },
        { text: "Stick with proven solutions to avoid risk", weight: 0.4 }
      ]
    },
    // Teamwork
    {
      category: CATEGORIES.TEAMWORK,
      scenario: "Another team's delayed deliverable is blocking your work, and they seem unaware of the impact.",
      prompt: "How do you handle this?",
      industryAnswer: { text: "Talk to them directly about the dependency, understand their constraints, propose solutions, escalate only if needed" },
      studentOptions: [
        { text: "Talk to them directly about the dependency, understand their constraints, propose solutions, escalate only if needed", weight: 1.0 },
        { text: "Report the blocker to management immediately", weight: 0.4 },
        { text: "Work around it somehow and mention it later", weight: 0.3 }
      ]
    },
    {
      category: CATEGORIES.TEAMWORK,
      scenario: "Your idea was modified significantly by the team and the final solution is credited to someone else.",
      prompt: "How do you react?",
      industryAnswer: { text: "Focus on the team success, the evolution of ideas is normal, discuss credit expectations constructively if pattern continues" },
      studentOptions: [
        { text: "Focus on the team success, the evolution of ideas is normal, discuss credit expectations constructively if pattern continues", weight: 1.0 },
        { text: "Make sure your original contribution is documented", weight: 0.5 },
        { text: "Avoid sharing ideas early next time", weight: 0.2 }
      ]
    },
    // Safety
    {
      category: CATEGORIES.SAFETY,
      scenario: "You notice a safety concern in a design review, but it's not your area of responsibility.",
      prompt: "What do you do?",
      industryAnswer: { text: "Raise the concern regardless of responsibility - safety is everyone's job, document and follow up" },
      studentOptions: [
        { text: "Raise the concern regardless of responsibility - safety is everyone's job, document and follow up", weight: 1.0 },
        { text: "Mention it privately to the responsible engineer", weight: 0.5 },
        { text: "Trust that the responsible team will catch it", weight: 0.2 }
      ]
    },
    // Innovation
    {
      category: CATEGORIES.INNOVATION,
      scenario: "You see an opportunity to improve a standard process that everyone has accepted for years.",
      prompt: "How do you approach this?",
      industryAnswer: { text: "Document current pain points with data, propose improvement with measurable benefits, pilot before full rollout" },
      studentOptions: [
        { text: "Document current pain points with data, propose improvement with measurable benefits, pilot before full rollout", weight: 1.0 },
        { text: "Implement it in your own work and show results", weight: 0.5 },
        { text: "Accept that some processes exist for reasons you may not know", weight: 0.3 }
      ]
    }
  ]
};

// Copy generic questions to specific streams as fallback
masterQuestionPool.electronics = [...masterQuestionPool.electrical];
masterQuestionPool.cs = [...masterQuestionPool.other];

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Shuffle options within a question (keeping weights with options)
function shuffleOptions(question) {
  return {
    ...question,
    studentOptions: shuffleArray(question.studentOptions)
  };
}

// Get randomized questions for a specific stream
// Each call returns a different set of questions
export function getQuestionsForStream(streamId, count = 5) {
  const pool = masterQuestionPool[streamId] || masterQuestionPool.other;
  
  // Shuffle the entire pool
  const shuffledPool = shuffleArray(pool);
  
  // Take 'count' questions from different categories if possible
  const categories = [...new Set(shuffledPool.map(q => q.category))];
  const selectedQuestions = [];
  const usedCategories = new Set();
  
  // First pass: try to get one question from each category
  for (const question of shuffledPool) {
    if (selectedQuestions.length >= count) break;
    if (!usedCategories.has(question.category)) {
      selectedQuestions.push(shuffleOptions(question));
      usedCategories.add(question.category);
    }
  }
  
  // Second pass: fill remaining slots with any questions
  for (const question of shuffledPool) {
    if (selectedQuestions.length >= count) break;
    if (!selectedQuestions.includes(question)) {
      selectedQuestions.push(shuffleOptions(question));
    }
  }
  
  // Add unique IDs to each selected question
  return selectedQuestions.map((q, idx) => ({
    ...q,
    id: idx + 1
  }));
}

// Backward compatibility
export const questions = getQuestionsForStream('other');
export const questionsByStream = masterQuestionPool;

// Calculate alignment score based on student responses
export function calculateAlignment(responses) {
  if (responses.length === 0) return 0;
  
  const totalWeight = responses.reduce((sum, response) => sum + (response.weight || 0), 0);
  const maxPossibleWeight = responses.length * 1.0;
  
  return Math.round((totalWeight / maxPossibleWeight) * 100);
}

// Generate personalized insights based on alignment score and responses
export function generateInsights(responses, alignmentScore) {
  // Group responses by weight
  const highAlignment = responses.filter(r => r.weight >= 0.8);
  const lowAlignment = responses.filter(r => r.weight < 0.6);

  const insight = {
    strength: null,
    gap: null,
    focusArea: null
  };

  // Determine strength message
  if (highAlignment.length >= 3) {
    insight.strength = "Excellent industry alignment! You think like a practicing engineer — balancing technical rigor with practical constraints and clear communication.";
  } else if (highAlignment.length >= 2) {
    insight.strength = "Good foundation in industry thinking. You understand key professional behaviors like proactive communication and systematic problem-solving.";
  } else if (highAlignment.length >= 1) {
    insight.strength = "You show promising alignment in some areas. Build on these instincts as you gain more exposure to real-world engineering practices.";
  } else {
    insight.strength = "Your academic foundation is solid. Industry experience will help you develop the practical judgment that complements theoretical knowledge.";
  }

  // Determine gap message
  if (lowAlignment.length >= 3) {
    insight.gap = "Several responses differed from industry expectations. This is common for students — the gap between classroom and workplace is real, but bridgeable with awareness.";
  } else if (lowAlignment.length >= 2) {
    insight.gap = "A couple of areas showed different priorities than industry. These often relate to communication urgency and balancing perfect solutions with practical constraints.";
  } else if (lowAlignment.length >= 1) {
    insight.gap = "Minor gaps in industry alignment. Real-world experience through internships or projects will naturally develop these instincts.";
  } else {
    insight.gap = "Very few gaps detected. You're well-prepared for the transition from academic to professional engineering environments.";
  }

  // Determine focus area based on score
  if (alignmentScore >= 85) {
    insight.focusArea = "Maintain your edge by seeking leadership roles in team projects, mentoring peers, and staying curious about industry trends.";
  } else if (alignmentScore >= 70) {
    insight.focusArea = "Focus on building hands-on experience through internships, lab work, or industry projects. Seek mentors who can share real-world perspectives.";
  } else if (alignmentScore >= 55) {
    insight.focusArea = "Bridge the gap by shadowing practicing engineers, understanding 'why' behind workplace decisions, and building things beyond simulations.";
  } else {
    insight.focusArea = "Start by observing how experienced engineers communicate and make decisions. Every technical role requires balancing multiple constraints — practice this mindset.";
  }

  return insight;
}
