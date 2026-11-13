# PROJECT: SHREE RAM KUMAR — PREMIUM CINEMATIC PORTFOLIO

## 1. ROLE AND OBJECTIVE

Act as a Senior Frontend Engineer, UI/UX Designer, Creative Developer, and Animation Specialist.

Build a complete, production-ready personal portfolio website for **Shree Ram Kumar** using the six attached design mockups as the primary visual source of truth.

This is not a generic portfolio website.

The website must closely reproduce the supplied designs, including:
- Layout and component positioning
- Typography and font hierarchy
- Colors and gradients
- Image positioning and proportions
- Spacing and alignment
- Borders, shadows and lighting
- Navigation and active states
- Buttons and visual elements

Do not redesign, simplify, reinterpret, or replace the approved visual direction with a generic template.

The final website should look as close as technically possible to the supplied reference images.

---

## 2. CORE EXPERIENCE — VERY IMPORTANT

Build the portfolio as a **single-screen, fixed-canvas interactive website**.

The user should feel that they are navigating through different experiences within one continuous digital environment.

### Navigation behavior

The website has six sections:

1. HOME
2. ABOUT
3. EXPERIENCE
4. PROJECTS
5. SKILLS
6. CONTACT

When a user clicks any navigation item:

- Do not perform a traditional full-page reload.
- Do not scroll down to another section.
- Keep the header, navigation, background, branding and overall visual environment persistent.
- Replace only the main content area.
- Animate the outgoing content smoothly.
- Animate the incoming content into position.
- Update the active navigation indicator.
- Preserve a consistent viewport and composition.

The experience should feel like an interactive presentation or premium digital portfolio rather than a traditional scrolling website.

### Navigation requirements

- Clicking HOME displays the hero section.
- Clicking ABOUT displays the professional overview.
- Clicking EXPERIENCE displays the career timeline.
- Clicking PROJECTS displays featured projects.
- Clicking SKILLS displays skills and technologies.
- Clicking CONTACT displays contact information.

Additional requirements:
- Browser back and forward navigation must work.
- Use URL hashes such as #home, #about, #experience, #projects, #skills and #contact.
- Direct access to a section URL must open the correct section.
- Support keyboard left/right navigation where appropriate.
- Add accessible navigation labels.
- Prevent animation overlap when users switch sections rapidly.

---

## 3. TECHNOLOGY STACK

Use the following stack:

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

### Animation
- GSAP
- GSAP ScrollTrigger only where genuinely useful; do not build a scrolling portfolio around it.
- @gsap/react
- Motion (formerly Framer Motion) for micro-interactions.
- CSS animations for subtle background effects.

### Icons
- Lucide React

### Fonts
- Cormorant Garamond — primary editorial headings.
- Inter — body text, navigation and UI labels.

### Deployment
- Vercel

Use stable, compatible package versions.

Do not add unnecessary libraries or complex dependencies.

---

## 4. DESIGN SYSTEM

Follow this design system throughout the entire application.

### Color palette

| Name | Hex |
|---|---|
| Charcoal Black | #171717 |
| Forest Green | #06110C |
| Crimson Red | #A31C1B |
| Bright Accent Red | #FF202A |
| Primary Text | #F5F2EE |
| Secondary Text | #C9C9C9 |
| Muted Text | #858585 |

### Background

The primary background should be a deep forest-green and charcoal-black combination.

Use:
- Subtle dark gradients.
- Very restrained crimson radial lighting.
- Soft red light beams behind the content.
- Subtle green ambient lighting.
- Minimal glowing borders.

Do not make the background excessively colorful.

The design should remain dark, sophisticated and premium.

### Typography

Headings:
- Cormorant Garamond
- Large editorial serif typography.
- Strong contrast between white and crimson words.
- Elegant line breaks.
- Appropriate letter spacing.

Body:
- Inter.
- Clean, readable and modern.
- Consistent line heights.

Navigation:
- Uppercase text.
- Letter spacing.
- Small, clean typography.

### Global design rules

- Maintain consistent margins and alignment.
- Avoid unnecessary gradients inside cards.
- Avoid excessive rounded corners.
- Avoid generic glassmorphism.
- Avoid excessive shadows.
- Maintain strong contrast.
- Keep the overall design minimal and premium.

---

## 5. PERSISTENT LAYOUT

Create a persistent application shell.

### Header

The header must remain visible across all six sections.

Components:
- SRK logo on the left.
- Thin vertical divider.
- HOME
- ABOUT
- EXPERIENCE
- PROJECTS
- SKILLS
- CONTACT
- Search icon.
- Hamburger menu icon.

Design requirements:
- Transparent/dark background.
- Thin horizontal divider below the header.
- Active navigation item indicated by a short crimson underline.
- Smooth animated underline movement.
- Consistent positioning across sections.

The hamburger menu should open a refined overlay menu with all six navigation options.

Do not let the header jump or reposition during transitions.

### Persistent background

Create a reusable background component.

It should contain:
- Forest-green/charcoal gradient.
- Subtle crimson light beam.
- Ambient red glow.
- Minimal background texture.
- Optional animated SVG light wave.

Keep these effects persistent when switching sections.

Avoid re-rendering or resetting the entire background during navigation.

---

## 6. SECTION-BY-SECTION IMPLEMENTATION

Use the attached mockups as exact visual references.

### SECTION 01 — HOME

Reference: 01-home.png

Headline:

BUILDING
WHAT'S NEXT

Name:
SHREE RAM KUMAR

Professional title:
Product & Business Enthusiast

Supporting copy:

"Building products, driving business outcomes, and turning data into meaningful impact."

Buttons:
- EXPLORE WORK
- GET IN TOUCH

Layout:
- Hero photograph positioned on the left.
- Text content positioned on the right.
- Large editorial typography.
- BUILDING in white.
- WHAT'S NEXT in crimson red.
- Crimson lighting behind the portrait.
- Subtle reflective floor effect.

Image requirements:
- Use the actual photograph supplied by the user.
- Preserve the person's real appearance.
- Do not replace the photograph with an AI-generated portrait.
- Do not change facial features.
- Use an optimized transparent cutout if available; otherwise create a carefully cropped presentation using the original image.
- Maintain the natural subject proportions.

CTA behavior:
- EXPLORE WORK switches to PROJECTS.
- GET IN TOUCH switches to CONTACT.

This section is the default landing state.


### SECTION 02 — ABOUT ME

Reference image: `02-about.png`

### 1. Overall Layout

Create a premium two-column composition.

**Left column — Profile Photograph**
- Display Shree Ram Kumar's actual uploaded photograph.
- Position the portrait on the left side.
- Use a large vertical portrait container.
- Add an elegant, slightly asymmetric rounded border.
- Use a subtle crimson-red border and red ambient glow.
- Add a deep crimson gradient panel behind the photograph.
- Apply cinematic red rim lighting around the subject.
- Crop the photograph carefully to preserve the face, upper body and natural proportions.
- Do not generate a replacement portrait or modify facial features.

**Right column — Professional Introduction**

Section label:
ABOUT ME

Add a short crimson horizontal accent line beneath the label.

Main heading:

Product Mindset.
Business Impact.

Typography:
- Use Cormorant Garamond.
- First line in off-white.
- Second line in bright crimson red.
- Large editorial typography.
- Preserve the exact line breaks shown in the reference.

### 2. Professional Introduction

Use the following copy:

"A Product & Business Enthusiast with 4+ years of experience in building AI-driven and SaaS products, translating business needs into scalable solutions, and using data to drive adoption, efficiency, and business impact."

Use Inter for the paragraph.

Keep the text width, line spacing and positioning consistent with the reference.

### 3. Core Professional Capabilities

Below the introduction, create a single horizontal row containing four capability items.

Each item should have:
- A crimson outline icon inside a subtle dark rounded-square container.
- A bold, centered label.
- A thin vertical divider separating adjacent items.

Capability 01:
**Product Strategy**
Icon: Layers

Capability 02:
**Business Analysis**
Icon: Chart NoAxesColumnIncreasing

Capability 03:
**Data-Driven Insights**
Icon: Chart Network

Capability 04:
**Stakeholder Collaboration**
Icon: Users

Design requirements:
- Use Lucide React icons.
- Crimson-red icon strokes.
- Dark translucent icon backgrounds.
- Consistent icon dimensions.
- Equal spacing between all four items.
- Labels should be centered and arranged over two lines where necessary.

Do not use separate large cards for these capabilities.

### 4. Call-to-Action Buttons

Position two buttons beneath the capability row.

**Primary CTA:**
Label: View My Experience
- Crimson-red filled background.
- White text.
- Right-arrow icon.
- Rounded pill shape.
- Subtle crimson hover glow.
- On click, navigate to the EXPERIENCE section.

**Secondary CTA:**
Label: Download Resume
- Transparent/dark background.
- Thin white border.
- White text.
- Download icon.
- Rounded pill shape.
- On click, download the actual resume PDF.

Keep the resume file configurable. Do not create a fake download link.

### 5. Background and Visual Styling

Maintain the global portfolio design system:

- Forest Green: #06110C
- Charcoal Black: #171717
- Crimson Red: #A31C1B
- Highlight Red: #FF202A
- Primary Text: #F5F2EE

Background:
- Deep forest-green and charcoal-black gradient.
- Subtle crimson lighting from the left and right edges.
- Soft ambient red glow behind the portrait.
- Subtle crimson light wave or gradient near the bottom.
- No unnecessary background graphics.

### 6. Navigation and Persistent Layout

Keep the global header unchanged.

- SRK logo on the left.
- HOME, ABOUT, EXPERIENCE, PROJECTS, SKILLS, CONTACT.
- Search icon and hamburger menu.
- ABOUT must have the active crimson underline.

The header, background and overall viewport must remain persistent when navigating between sections.

Only the main content area should transition.

### 7. Animation Requirements

Implement refined animations using GSAP.

On entering the About section:

1. Portrait fades in with a subtle scale animation.
2. Crimson background panel behind the portrait appears with a smooth reveal.
3. ABOUT ME label fades in.
4. Main heading reveals line by line.
5. Supporting paragraph enters with a subtle upward motion.
6. Four capability icons and labels appear sequentially.
7. CTA buttons fade in last.

Suggested animation duration:
- Portrait: 700ms.
- Heading: 600ms.
- Paragraph: 450ms.
- Capability items: 400ms with stagger.
- Buttons: 400ms.

Avoid exaggerated movement and unnecessary effects..

### 8. Responsive Behavior

Desktop:
- Portrait on the left.
- Introduction and capabilities on the right.
- Two CTAs aligned horizontally.

Tablet:
- Reduce portrait dimensions.
- Maintain two-column layout where space permits.

Mobile:
- Portrait first.
- Introduction below the portrait.
- Capability items arranged in a 2×2 grid.
- CTA buttons stacked or displayed at full width.
- Maintain readable typography and spacing.

### 9. Strict Visual Acceptance Criteria

- Use the actual user photograph.
- Maintain the approved SRK branding.
- Preserve the dark cinematic theme.
- Keep the layout visually balanced.
- Do not introduce additional content or statistics.
- Do not modify other portfolio sections.

### SECTION 03 — EXPERIENCE

Reference: 03-experience.png

Section label:
EXPERIENCE

Main heading:

My Journey
So Far

Supporting copy:

"Experience at the intersection of product, business, and data — from understanding problems to delivering impactful solutions."

Create a vertical timeline.

Professional areas to represent:

1. Product Management
   Focus: Product vision, roadmap, strategy, execution, AI and SaaS products.

2. Business Analysis
   Projects: Resource Management System (RMS) and Karmik Recruitment Solution.
   Focus: Requirements, stakeholder coordination, business analysis, solution design and implementation.

3. Data Analytics
   Focus: Recruitment and resource management analytics, reporting, efficiency improvements and data-driven decision-making.

Important:
- Do not invent company names.
- Do not invent employment dates.
- Do not invent job durations.
- Do not assume that the displayed role sequence or duration is confirmed.
- Keep experience data in a separate editable configuration file.
- Use only verified professional details supplied by the user.
- Do not display contradictory experience totals.

Bottom highlight strip:
- Professional Experience
- Products Built & Enhanced
- Multiple Business Domains
- Impact Driven

The exact numeric values must be editable and verified before publication.

### SECTION 04 — FEATURED PROJECTS

Reference: 04-projects.png

Section label:
FEATURED PROJECTS

Main heading:

Products
I've Built & Shaped

Supporting copy:

"A look at the products I've worked on — from idea and requirements to execution and real-world impact."

Create four project cards.

PROJECT 01 — COGENT AI

Category:
Enterprise AI Platform

Description:
"Enterprise AI chatbot trained on organizational data to deliver accurate, secure and contextual answers."

Key capabilities:
- Knowledge Base
- Integrations
- Analytics

PROJECT 02 — KARMIK

Category:
Recruitment Solution

Description:
"End-to-end recruitment platform to streamline hiring from requisition to offer."

Key capabilities:
- Candidate Management
- Interview Scheduling
- Offer Letters

PROJECT 03 — SHIKSHAN

Category:
School SaaS

Description:
"Multi-language school management platform to simplify academic, administrative and parent engagement."

Key capabilities:
- Student & Staff Management
- Attendance
- Reports & Analytics

PROJECT 04 — ESIGNMATE

Category:
Document Signing

Description:
"Secure digital document signing platform to create, send and manage documents digitally."

Key capabilities:
- Create & Send
- Audit Trail
- Templates & Library

Design:
- Two-column by two-row grid.
- Premium project cards.
- Alternating crimson and forest-green accent treatments.
- Project icons.
- Category labels.
- Concise descriptions.
- Feature separators.
- Animated arrow icons.

Each card should support clicking to open a dedicated project detail view or modal.

Do not invent customer names, business results, revenue figures or performance metrics.

Project details should be editable through structured data files.

### SECTION 05 — SKILLS & EXPERTISE

Reference: 05-skills.png

Section label:
SKILLS & EXPERTISE

Main heading:

A Well-Rounded
Product Professional

Supporting copy:

"A blend of product, business, data, and technology skills to turn ideas into scalable and impactful solutions."

Create four skill categories:

1. PRODUCT MANAGEMENT
   - Product Strategy
   - Roadmap Planning
   - Execution
   - Agile
   - Stakeholder Management

2. BUSINESS ANALYSIS
   - Requirement Analysis
   - Elicitation
   - Impact Analysis
   - Business Acumen
   - Critical Thinking

3. DATA & ANALYTICS
   - Data Analysis
   - Data Visualization
   - Business Intelligence
   - Reporting
   - Decision Support

4. TECHNICAL & TOOLS
   - MySQL
   - Python
   - Pandas
   - NumPy
   - Power BI
   - Microsoft Excel
   - Jira
   - Figma
   - Confluence
   - VS Code
   - Tableau

Create a separate TOOLBOX area.

Display recognizable technology logos/icons in individual tiles.

Do not use generic emojis as replacements for recognizable technology logos.

Keep skill levels out unless explicitly provided by the user.

### SECTION 06 — CONTACT

Reference: 06-contact.png

Section label:
LET'S CONNECT

Main heading:

Let's Build
Something
Meaningful
Together

Supporting copy:

"Open to exciting opportunities, product collaborations, and conversations around AI, SaaS, and product innovation."

Contact cards:
- Email
- LinkedIn
- Location

Important:
- Do not use example or fabricated contact information.
- Keep contact details in a central editable configuration file.
- Display only verified information.
- Use placeholder text in development if the user has not supplied actual details.

Bottom attributes:
- Product-Led Thinking
- Collaborative Approach
- Outcome Focused

The contact CTA should open the email client when a valid email address is configured.

---

## 7. TRANSITION AND ANIMATION SPECIFICATION

This is one of the most important parts of the project.

The website must feel sophisticated, smooth and cinematic.

Do not animate everything continuously.

Animations should be subtle, purposeful and elegant.

### A. Navigation transition

When a navigation item is clicked:

1. Current content fades out.
2. Current content moves slightly upward or horizontally.
3. A subtle dark/crimson transition layer may appear.
4. New content enters with a controlled reveal.
5. Headings animate first.
6. Descriptions follow.
7. Cards appear using staggered animation.
8. Navigation underline moves to the active item.

Suggested timing:
- Outgoing content: 250–350ms.
- Transition interval: 100–150ms.
- Incoming content: 450–650ms.
- Card stagger: 70–100ms.

Use GSAP timelines for coordinating transitions.

Do not allow users to trigger overlapping animation timelines.

### B. Heading animation

Use a refined masked text reveal.

- Words enter from slightly below.
- Opacity transitions from 0 to 1.
- Avoid exaggerated movement.
- Preserve editorial typography.

### C. Project card animation

- Slight upward entrance.
- Soft opacity reveal.
- Border highlight.
- Small arrow movement on hover.
- Optional restrained 3D tilt on desktop.

### D. Navigation interaction

- Animated underline.
- Subtle text color transition.
- Search icon hover.
- Hamburger menu transition.

### E. Background effects

- Extremely subtle crimson glow.
- Slow ambient light movement.
- Optional SVG wave animation.
- No distracting particle effects.
- No continuous aggressive zoom.

### F. Performance and accessibility

- Respect prefers-reduced-motion.
- Avoid layout shifts.
- Animate transform and opacity where possible.
- Clean up GSAP timelines and event listeners.
- Prevent animation memory leaks.
- Support touch devices.
- Disable hover-only interactions on mobile.

---

## 8. RESPONSIVE DESIGN

The supplied mockups are desktop-oriented.

Reproduce the desktop compositions as closely as possible while creating a dedicated responsive layout for mobile and tablets.

### Desktop
- Full viewport experience.
- Persistent navigation.
- Side-by-side layouts.
- Large editorial typography.
- 2x2 card layouts where appropriate.

### Tablet
- Adapt spacing and card sizes.
- Preserve visual hierarchy.
- Maintain readable typography.

### Mobile
- Compact header.
- Hamburger navigation.
- Stacked content.
- Responsive typography.
- Full-width project cards.
- No horizontal overflow.
- Simplified background effects.
- Touch-friendly navigation.

Do not simply scale the desktop screenshot down.

---

## 9. ARCHITECTURE AND CODE QUALITY

Use a clean, reusable architecture.

Suggested structure:

src/
  app/
    layout.tsx
    page.tsx
    globals.css

  components/
    layout/
      PersistentLayout.tsx
      Header.tsx
      Navigation.tsx
      BackgroundEffects.tsx
      ContentTransition.tsx

    sections/
      HomeSection.tsx
      AboutSection.tsx
      ExperienceSection.tsx
      ProjectsSection.tsx
      SkillsSection.tsx
      ContactSection.tsx

    ui/
      Button.tsx
      ProjectCard.tsx
      SkillCard.tsx
      TimelineItem.tsx
      ContactCard.tsx

  animations/
    navigationTransition.ts
    headingReveal.ts
    cardAnimations.ts

  data/
    profile.ts
    experience.ts
    projects.ts
    skills.ts
    contact.ts

  hooks/
    useSectionNavigation.ts

  styles/
    theme.css

Keep content separate from UI components.

Avoid writing the entire website in one large component.

Use reusable components and strict TypeScript types.

---

## 10. SEO AND FUNCTIONALITY

Implement:
- SEO metadata.
- Open Graph metadata.
- Favicon using SRK branding.
- Semantic HTML.
- Accessible navigation.
- Keyboard interaction.
- Correct image alt text.
- Functional email links.
- Functional LinkedIn links when configured.
- Browser history support.
- Direct section navigation.
- Error-free console.
- No broken assets.

Use a descriptive page title:

"Shree Ram Kumar | Product & Business Enthusiast"

---

## 11. IMPORTANT DESIGN RESTRICTIONS

Do not:
- Change the approved color palette.
- Replace Cormorant Garamond with generic sans-serif headings.
- Add unnecessary sections.
- Add a traditional long scrolling layout.
- Change the fixed-canvas navigation concept.
- Use generic portfolio templates.
- Add random stock photographs.
- Generate another portrait of the user.
- Add fake client testimonials.
- Add fabricated statistics.
- Invent employment dates or company names.
- Add unnecessary 3D models.
- Add excessive glassmorphism.
- Make the background too bright.
- Change the approved headline "BUILDING WHAT'S NEXT".
- Repeat the same introduction in every section.

The reference mockups must take priority over creative reinterpretation.

---

## 12. IMPLEMENTATION WORKFLOW

Do not generate the entire website in one uncontrolled step.

Follow this workflow.

### PHASE 1 — ANALYZE REFERENCES

- Inspect all six attached mockups.
- Inspect the original user photograph.
- Identify the exact layout, typography, spacing, colors and image composition.
- Create a design token system.
- Identify reusable components.
- Establish the persistent layout.

Before coding, provide a concise implementation plan.

### PHASE 2 — BUILD THE DESIGN FOUNDATION

Implement:
- Next.js setup.
- Tailwind configuration.
- Typography.
- Global colors.
- Background.
- Header and navigation.
- Persistent content container.

First reproduce the HOME design.

Compare the implementation against 01-home.png.

Do not move forward until the desktop hero closely matches the reference.

### PHASE 3 — BUILD SECTION COMPONENTS

Implement the remaining sections individually.

Compare each section against its corresponding reference image.

Maintain consistent visual dimensions and spacing.

### PHASE 4 — IMPLEMENT TRANSITIONS

Implement:
- Section switching.
- GSAP timelines.
- Navigation indicator.
- Heading reveals.
- Card animations.
- Keyboard navigation.
- Browser history.

Test rapid navigation to ensure animations do not overlap or break.

### PHASE 5 — RESPONSIVE OPTIMIZATION

Test desktop, tablet and mobile.

Preserve the original design language at every breakpoint.

### PHASE 6 — QUALITY ASSURANCE

Verify:
- All six sections render correctly.
- Navigation works.
- Direct hash URLs work.
- Browser back/forward works.
- All CTAs work.
- No broken images.
- No console errors.
- No horizontal overflow.
- Reduced-motion support works.
- Animations remain smooth.

---

## 13. VISUAL ACCEPTANCE CRITERIA

The final output must satisfy the following:

1. The website must visually resemble the six provided mockups.
2. The layout must remain persistent when changing sections.
3. Only the main content should transition.
4. Navigation must remain stable.
5. The approved color system must be consistent.
6. Typography must match the editorial visual style.
7. The actual user photograph must be used.
8. All four projects must be represented accurately.
9. The experience section must use verified career information.
10. The mobile layout must be properly adapted.
11. The website must be production-ready.
12. No fabricated professional information.

Prioritize visual accuracy over adding extra features.

---

## FINAL INSTRUCTION

Start by inspecting the attached design references and building the persistent layout.

Do not immediately generate generic components.

First establish the exact visual foundation, then implement the sections, then transitions, then responsive behavior.

The final experience should feel like a premium, cinematic, interactive portfolio built specifically for Shree Ram Kumar.

**The design is already approved. Your job is to reproduce it faithfully and make it work beautifully.**